import {mergeObject} from "foundry-pc-types/types/utils";

export class WOD20THActorSheet extends ActorSheet {
    static get defaultOptions() {
        return {};
        return mergeObject(super.defaultOptions, {
            classes: ['default', 'sheet', 'actor', 'pc'],
            width: 600,
            height: 800,
            template: 'systems/wod20th/templates/actors/actorSheet.hbs',
            tabs: [{
                navSelector: '.sheet-navigation',
                contentSelector: '.sheet-content',
                initial: '.stats'
            }]
        });
    }
}