module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    env: {
        node: true,
        browser: true,
        es2017: true,
    },
    parserOptions: {
        sourceType: 'module',
    },
};
