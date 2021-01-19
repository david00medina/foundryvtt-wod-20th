"use strict";
exports.__esModule = true;
exports.configWOD20TH = void 0;
var vampire_1 = require("./actor/vampire");
var vampire_sheet_1 = require("./actor/sheet/vampire-sheet");
function configWOD20TH() {
    CONFIG.Actor.entityClass = vampire_1.VampireWOD20THActor;
    CONFIG.Actor.sheetClass = vampire_sheet_1.VampireWOD20THActorSheet;
}
exports.configWOD20TH = configWOD20TH;
