import {WoD20thActor} from "./actor/WoD20thActor";
import {WoD20thActorSheet} from "./actor/sheet/WoD20thActorSheet";

export const registerSettings = function() {
	// Register any custom system settings here

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("base", WoD20thActorSheet, { makeDefault: true })

}
