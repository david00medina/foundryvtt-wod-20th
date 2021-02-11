import {WoDActorSheet} from "../actor/sheet/WoDActorSheet";

/**
 * It registers all the character sheets needed for
 * WoD game system to use them
 * @return {undefined}
 */
export function registerCharacterSheets () {
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet(
        "WoD",
        WoDActorSheet,
        {
            label: "base",
            makeDefault: true }
    );

}