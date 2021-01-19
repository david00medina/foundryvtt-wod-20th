import {VampireWOD20THActor} from "./actor/vampire";
import {VampireWOD20THActorSheet} from "./actor/sheet/vampire-sheet";

export function configWOD20TH() {
    CONFIG.Actor.entityClass = VampireWOD20THActor;
    CONFIG.Actor.sheetClass = VampireWOD20THActorSheet;
}