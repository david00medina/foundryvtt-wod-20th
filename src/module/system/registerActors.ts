import {WoDActor} from "../actor/WoDActor";

/**
 * It registers all the actors from World of Darkness
 * (e.g. vampires, werewolves, mages, etc.)
 */
export function registerActors() {
    game.WoD.WoDActor = WoDActor;
    CONFIG.Actor.entityClass = game.WoD.WoDActor;
}