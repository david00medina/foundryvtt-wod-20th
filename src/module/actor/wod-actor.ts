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
export abstract class WoDActor extends Actor {
    /**
     * Character edition template
     */
    readonly EDITION: WoDEditionEnum;

    /**
     * WodActor constructor
     */
    constructor(data, options?) {
        if (options?.WoD?.ready) {
            super(data, options)
        } else {
            try {
                const ready = {
                    WoD: {
                        ready: true
                    }
                }
                return new CONFIG.WoD.Actor.entityClasses[data.type](data, {
                    ...ready,
                    ...options
                });
            } catch (e) {
                console.log(e);
                super(data, options);
            }
        }
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
    export function getClan(clan: string): ClanSectEnum {
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
     * The clan of the vampire actor
     */
    private _clan: ClanSectEnum;

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

    /**
     * Clan sect getter
     */
    get clan(): ClanSectEnum {
        return this._clan;
    }

    /**
     * Clan sect setter
     */
    set clan(clan: ClanSectEnum) {
        this._clan = clan;
    }
}