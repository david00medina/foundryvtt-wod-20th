import {WOD_ROOT} from "../../../wod";

export class WoDActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: [],
            template: WOD_ROOT + "/templates/actor/WoDActorSheet.handlebars",
            width: 525,
            height: 743,
            tabs: []
        })
    }
}