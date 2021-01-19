const path = require('path');

module.exports = {
    mode: "production",
    entry: "./dist/wod20th.js",
    output: {
        filename: "wod20th.bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
}