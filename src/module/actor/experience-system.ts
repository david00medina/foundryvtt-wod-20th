/**
 * Implementation of the experience system of an actor
 * in World of Darkness.
 * @packageDocumentation
 * @module Experience system
 * @category WoD Actor
 */

/**
 * Manages the experience earned by an actor
 * @category Experience system
 */

export class Experience {
    /**
     * Holds the amount of experience points earned by an actor
     */
    private _xp: number;

    /**
     * Experience constructor
     */
    constructor() {
        this._xp = 0;
    }

    /**
     * Experience points getter
     */
    get xp(): number {
        return this._xp;
    }

    /**
     * Experience points setter
     */
    set xp(points: number) {
        this._xp = points;
    }
}