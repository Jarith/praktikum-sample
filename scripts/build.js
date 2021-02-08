'use strict';

const fs = require('fs');
const { promisify } = require('util');
const path = require('path');
const nunjucks = require('nunjucks');

const ROOT = 'src';
const PAGES_PATH = 'pages';
const STATIC_PATH = 'static';

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);

const engine = nunjucks.configure('src');

const withRoot = (pathName) => path.join(ROOT, pathName);

const getDataWithTemplatesFileNames = async (directoryPath) => {
    const fileNames = await readDir(withRoot(directoryPath));

    const filePaths = fileNames
        .filter((name) => name !== 'components' && !name.endsWith('.css'))
        .map((name) => ({
            fileName: name,
            filePath: path.join(directoryPath, name),
        }));

    const isAllFiles = filePaths.every(
        ({ filePath }) => !fs.lstatSync(withRoot(filePath)).isDirectory()
    );

    if (isAllFiles) {
        const { filePath: template } =
            filePaths.find(({ fileName }) => fileName === 'index.html') || {};

        const data = filePaths.filter(({ fileName }) =>
            fileName.endsWith('.json')
        );

        return {
            data,
            template,
        };
    }

    return Promise.all(
        filePaths.map(({ filePath }) => getDataWithTemplatesFileNames(filePath))
    ).then((res) => res.flat());
};

const compileTemplates = async (dataWithTemplates) => {
    for (const { template, data } of dataWithTemplates) {
        if (!template) {
            continue;
        }

        for (const { filePath, fileName } of data) {
            const dataContent = await readFile(withRoot(filePath));
            const context = JSON.parse(dataContent.toString());
            const compiled = engine.render(template, context);

            await writeFile(
                path.join(
                    STATIC_PATH,
                    `${fileName.substring(0, fileName.length - 5)}.html`
                ),
                compiled
            );
        }
    }
};

const copyDir = async (srcPath, distPath) => {
    if (!fs.existsSync(distPath)) {
        fs.mkdirSync(distPath);
    }

    const fileNames = await readDir(srcPath);

    return Promise.all(
        fileNames.map((fileName) =>
            copyFile(
                path.join(srcPath, fileName),
                path.join(distPath, fileName)
            )
        )
    );
};

(async () => {
    if (!fs.existsSync(STATIC_PATH)) {
        fs.mkdirSync(STATIC_PATH);
    }

    const dataWithTemplates = await getDataWithTemplatesFileNames(PAGES_PATH);

    await Promise.all([
        compileTemplates(dataWithTemplates),
        copyFile(withRoot('index.html'), path.join(STATIC_PATH, 'index.html')),
        copyDir(withRoot('svg'), path.join(STATIC_PATH, 'svg')),
        copyDir(withRoot('js'), path.join(STATIC_PATH, 'js')),
    ]);
})();
