import {WOD20THActor} from "./actors/actor";
import {WOD20THActorSheet} from "./actors/sheet/actorSheet";

export function configWOD20TH() {
    game.wod = {
        WOD20THActor
    };
    CONFIG.Actor.entityClass = WOD20THActor;
    CONFIG.Actor.sheetClasses = WOD20THActorSheet;
}