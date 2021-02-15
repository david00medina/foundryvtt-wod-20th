/**
 * A module which contains the components and elements
 * which composes an actor as a vampire.
 * @packageDocumentation
 * @category WoD Actor
 * @module Vampire Actor
 */
import {WoDActor} from "./wod-actor";

/**
 * Enumerates the clan sects
 * @category General
 */
export enum ClanSectEnum {
    ASSAMITE,
    BRUJAH,
    GANGREL,
    GIOVANNI,
    LASOMBRA,
    MALKAVIAN,
    NOSFERATU,
    RAVNOS,
    SET_FOLLOWERS,
    TOREADOR,
    TREMERE,
    TZIMISCE,
    VENTRUE
}

/**
 * Set of functions to operate with the clan sect enumerates
 * @category General
 */
export namespace ClanSectEnum {
    /**
     * Gets the name of the clan sect
     * @param clan
     */
    export function getClan(clan: ClanSectEnum): string {
        return ClanSectEnum[clan];
    }

    /**
     * Displays clan weakness
     * @param clan
     */
    export function weakness(clan: ClanSectEnum): string {
        switch (clan) {
            default:
                return ""
        }
    }
}

/**
 * A concrete class which defines an actor playing
 * as a vampire in the World of Darkness.
 * @category General
 */
export class VampireActor extends WoDActor {
    /**
     * Establishes the vampiric generation; how close
     * the actor is to the first vampire, Cain.
     */
    private _generation: number;

    /**
     * VampireActor constructor
     */
    constructor(data, props) {
        super(data, props);
        this.generation = data.generation;
    }

    /**
     * Generation level getter
     */
    get generation(): number {
        return this._generation;
    }

    /**
     * Generation level setter
     * @param lvl
     */
    set generation(lvl: number) {
        this.generation = lvl;
    }

}