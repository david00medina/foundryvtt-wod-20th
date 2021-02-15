/**
 * This module contains the basic components for
 * creating a general World of Darknes actor sheet.
 * @packageDocumentation
 * @category WoD Actor Sheet
 * @module Base Actor Sheet
 */
import {WOD_ROOT} from "../../../wod";

export class WodActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: [],
            template: WOD_ROOT + "/templates/actor/wod-actor-sheet.handlebars",
            width: 525,
            height: 743,
            tabs: []
        })
    }
}