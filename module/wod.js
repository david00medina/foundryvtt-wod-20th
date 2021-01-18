// Import Modules
import { WoDActor } from "./actor/actor.js";
import { WoDActorSheet } from "./actor/actor-sheet.js";
import { WoDItem } from "./item/item.js";
import { WoDItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.wod = {
    WoDActor,
    WoDItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = WoDActor;
  CONFIG.Item.entityClass = WoDItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("wod", WoDActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("wod", WoDItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});