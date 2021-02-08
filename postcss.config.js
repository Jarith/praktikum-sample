'use strict';

const postCssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [postCssImport, autoprefixer],
};
