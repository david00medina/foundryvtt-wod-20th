import {VampireWOD20THActorSheet} from "./actors/sheet/vampireSheet";

export function registerActorSheets() {
    Actors.unregisterSheet("core", ActorSheet);

    Actors.registerSheet("vampire", VampireWOD20THActorSheet, {
        types: [
            "vampire"
        ],
        makeDefault: true
    });
}