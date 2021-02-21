import {MageActorSheet, VampireActorSheet} from "../actor/sheet/wod-actor-sheet";

/**
 * It registers all the character sheets needed for
 * WoD game system to use them
 */
export function registerCharacterSheets () {
    Actors.unregisterSheet("core", ActorSheet);

    Actors.registerSheet(
        "WoD",
        VampireActorSheet,
        {
            label: "vampire",
            types: ["vampire"],
            makeDefault: true }
    );

    Actors.registerSheet(
        "WoD",
        MageActorSheet,
        {
            label: "mage",
            types: ["mage"],
            makeDefault: true
        }
    )
}