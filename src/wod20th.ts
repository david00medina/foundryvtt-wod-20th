import {configWOD20TH} from "./module/config";
import {loadWOD20THTemplates} from "./module/templates";
import {registerActorSheets} from "./module/registration";

Hooks.once('init', async () => {
    configWOD20TH();
    registerActorSheets();
    loadWOD20THTemplates();
    console.log(CONFIG);
});