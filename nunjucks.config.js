'use strict';

const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const PAGES_PATH = 'src/pages';

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);

const getData = async (directoryPath) => {
    const fileNames = await readDir(directoryPath);

    const dataPaths = fileNames.map((name) => ({
        name,
        path: path.join(directoryPath, name, 'data.json'),
    }));

    return Promise.all(
        dataPaths.map(
            ({ name, path }) =>
                new Promise((resolve, reject) => {
                    readFile(path)
                        .then((data) =>
                            resolve({
                                name,
                                data,
                            })
                        )
                        .catch(reject);
                })
        )
    );
};

const loadData = async () => {
    const data = await getData(PAGES_PATH);

    return data.reduce((acc, { name, data }) => {
        acc[name] = JSON.parse(data.toString());

        return acc;
    }, {});
};

module.exports = {
    root: ['./src', '.'],
    data: loadData(),
};
