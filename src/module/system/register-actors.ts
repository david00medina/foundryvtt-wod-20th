/**
 * It registers all the actors from World of Darkness
 * (e.g. vampires, werewolves, mages, etc.)
 */
import {WoDActor} from "../actor/wod-actor";

export function registerActors() {
    game.WoD.WoDActor = WoDActor;
    CONFIG.Actor.entityClass = game.WoD.WoDActor;
}