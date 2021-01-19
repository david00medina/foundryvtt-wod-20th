"use strict";
exports.__esModule = true;
exports.registerActorSheets = void 0;
var vampire_sheet_1 = require("./actor/sheet/vampire-sheet");
function registerActorSheets() {
    Actors.registerSheet("vampire", vampire_sheet_1.VampireWOD20THActorSheet);
}
exports.registerActorSheets = registerActorSheets;
