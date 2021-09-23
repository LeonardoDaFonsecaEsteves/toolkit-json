const path = require('path');

module.exports = {
    mode: 'production',
    entry: { index: './src/index.js' },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: "toolkit-json",
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    }
};
