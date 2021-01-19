"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VampireWOD20THActorSheet = void 0;
var actorsheet_1 = require("./actorsheet");
var VampireWOD20THActorSheet = /** @class */ (function (_super) {
    __extends(VampireWOD20THActorSheet, _super);
    function VampireWOD20THActorSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VampireWOD20THActorSheet;
}(actorsheet_1.WOD20THActorSheet));
exports.VampireWOD20THActorSheet = VampireWOD20THActorSheet;
