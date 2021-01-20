const path = require('path');

module.exports = {
    mode: "production",
    entry: "./dist/wod20th.js",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: "wod20th.bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
};