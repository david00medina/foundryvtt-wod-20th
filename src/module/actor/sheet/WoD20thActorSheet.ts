import {ROOT} from "../../../wod20th";

export class WoD20thActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: [],
            template: ROOT + "/templates/actor/WoD20thActorSheet.html",
            width: 525,
            height: 743,
            tabs: []
        })
    }
}