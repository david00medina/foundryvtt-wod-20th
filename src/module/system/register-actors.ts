/**
 * It registers all the actors from World of Darkness
 * (e.g. vampires, werewolves, mages, etc.)
 */
import {ClanSectEnum, VampireActor, WoDActor} from "../actor/wod-actor";

export function registerActors() {
    game.WoD.WoDActor = WoDActor;
    CONFIG.Actor.entityClass = game.WoD.WoDActor;
    CONFIG.WoD = {
        Actor: {
            entityClasses: {
                vampire: VampireActor,
                werewolf: { },
                mage: { },
                changeling: { },
                wraith: { },
                mummy: { },
                demon: { }
            }
        }
    }
}