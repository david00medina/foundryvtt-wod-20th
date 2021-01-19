import {configWOD20TH} from "./module/config";
import {loadWOD20THTemplates} from "./module/template";
import {registerActorSheets} from "./module/registration";

Hooks.once('init', () => {
    configWOD20TH();
    registerActorSheets();
    loadWOD20THTemplates();
    console.log(Actors.registeredSheets);
})