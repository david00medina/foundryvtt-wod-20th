"use strict";
exports.__esModule = true;
var config_1 = require("./module/config");
var template_1 = require("./module/template");
var registration_1 = require("./module/registration");
Hooks.once('init', function () {
    config_1.configWOD20TH();
    registration_1.registerActorSheets();
    template_1.loadWOD20THTemplates();
    console.log(Actors.registeredSheets);
});
