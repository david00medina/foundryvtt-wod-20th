/**
 * This module contains the basic components for
 * creating a general World of Darknes actor sheet.
 * @packageDocumentation
 * @category WoD Actor Sheet
 * @module Base Actor Sheet
 */
import {WOD_ROOT} from "../../../wod";

export abstract class WoDActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: [],
            width: 525,
            height: 743,
            tabs: []
        })
    }
}

export class VampireActorSheet extends WoDActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: []
        });
    }

    get template(): string {
        const path = WOD_ROOT + "/templates/actor/";
        return `${path}vampire-actor-sheet.handlebars`;
    }
}

export class MageActorSheet extends WoDActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: []
        });
    }

    get template(): string {
        const path = WOD_ROOT + "/templates/actor/";
        return `${path}mage-actor-sheet.handlebars`;
    }
}