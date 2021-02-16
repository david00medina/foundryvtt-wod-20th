/**
 * Contains the classes responsible of the implementation
 * of actos in World of Darkness.
 * @packageDocumentation
 * @category WoD Actor
 * @module Actors
 */

/**
 * Defines the WoD edition available to select
 * when creating an actor or a game rule
 * @category General
 */
export enum WoDEditionEnum {
    "20TH_ANNIVERSARY",
    "5TH_EDITION",
    "MIXED"
}

/**
 * List of playable races in WoD
 * @category General
 */
export enum WoDRaceEnum {
    VAMPIRE,
    WEREWOLF,
    MAGE,
    FAIRY,
    WRAITH,
    MUMMY,
    DEMON
}

/**
 * Creates a new Actor for World of Darkness
 * @category General
 */
export class WoDActor extends Actor {
    /**
     * Character edition template
     */
    readonly EDITION: WoDEditionEnum;

    /**
     * WodActor constructor
     */
    constructor(data, options) {
        super(data, options);
    }

    /**
     * Retrieves and calculates character's stats
     */
    prepareData() {
        super.prepareData();
    }
}

/**
 * Enumerates the clan sects
 * @category Vampire
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
 * @category Vampire
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
 * @category Vampire
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