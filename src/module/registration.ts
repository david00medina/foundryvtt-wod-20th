import {VampireWOD20THActorSheet} from "./actor/sheet/vampire-sheet";

export function registerActorSheets() {
    Actors.registerSheet("vampire", VampireWOD20THActorSheet);
}