import {WodActorSheet} from "../actor/sheet/wod-actor-sheet";

/**
 * It registers all the character sheets needed for
 * WoD game system to use them
 */
export function registerCharacterSheets () {
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet(
        "WoD",
        WodActorSheet,
        {
            label: "base",
            makeDefault: true }
    );

}