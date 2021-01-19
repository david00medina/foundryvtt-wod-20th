const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/wod20th.ts",
    output: {
        filename: "wod20th.bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
}