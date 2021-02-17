/**
 * It registers all the actors from World of Darkness
 * (e.g. vampires, werewolves, mages, etc.)
 */
import {WoDActor} from "../actor/wod-actor";
import {WodActorSheet} from "../actor/sheet/wod-actor-sheet";

export function registerActors() {
    game.WoD.WoDActor = WoDActor;
    CONFIG.Actor.entityClass = game.WoD.WoDActor;
}