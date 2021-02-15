/**
 * Contains the base class and common components of
 * a World of Darkness character
 * @packageDocumentation
 * @category WoD Actor
 * @module Base Actor
 */
import {ArchetypeEnum, DamageTypeEnum, HealthStateEnum, WoDEditionEnum} from "./wod-enum";

/**
 * It manages the damage received by an actor
 * during the game
 * @category Health system
 */
export class Damage {
    /**
     * Maximum damage an actor may receive
     */
    readonly MAX_DAMAGE: number = 7;

    /**
     * Bashing damage points
     */
    private _bashing: number;

    /**
     * Lethal damage points
     */
    private _lethal: number;

    /**
     * Aggrevated damage points
     */
    private _aggravated: number;

    /**
     * The damage constructor
     */
    constructor() {
        this.bashing = 0;
        this.lethal = 0;
        this.aggravated = 0;
    }

    /**
     * Bashing damage getter
     */
    get bashing (): number {
        return this._bashing;
    }

    /**
     * Bashing damage setter
     * @param points
     */
    set bashing(points: number) {
        this._bashing = points;
    }

    /**
     * Lethal damage getter
     */
    get lethal(): number {
        return this._lethal;
    }

    /**
     * Lethal damage setter
     * @param points
     */
    set lethal(points: number) {
        this._lethal = points;
    }

    /**
     * Aggravated damage getter
     */
    get aggravated(): number {
        return this._aggravated;
    }

    /**
     * Aggravated damage setter
     * @param points
     */
    set aggravated(points: number) {
        this._aggravated = points;
    }
}

/**
 * Manages actor's health.
 * @category Health system
 */
export class Health {
    /**
     * The maximum health point an actor may have
     */
    public readonly MAX_HP: number = 7;

    /**
     * Health points
     */
    private _hp: number;

    /**
     * Actor health state
     */
    private _state: HealthStateEnum;

    /**
     * Contains the amount of damage received by the actor
     */
    private _damage: Damage;

    /**
     * The health constructor
     */
    constructor() {
        this._state = HealthStateEnum.HEALTHY;
        this._damage = new Damage();
    }

    /**
     * Heal a certain amount of damage
     */
    public heal(damage: Damage): void {
        this._damage.bashing -= damage.bashing;
        this._damage.lethal -= damage.lethal;
        this._damage.aggravated -= damage.aggravated;
    }

    /**
     * Force an actor to receive a certain amount of
     * a damage kind
     */
    public hurt(type: DamageTypeEnum, points: number): void {
        switch (type) {
            case DamageTypeEnum.BASHING:
                this._damage.bashing += points;
                break;
            case DamageTypeEnum.LETHAL:
                this._damage.lethal += points;
                break;
            case DamageTypeEnum.AGGRAVATED:
                this._damage.lethal += points;
                break;
            default:
                break;
        }
    }

    /**
     * Retrieves damage penalty associated with a health state
     */
    public damagePenalty(): number {
        return HealthStateEnum.healthStatePenalty(this._state);
    }
}

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

/**
 * Determines the psyche of the actor
 * @category Psyche system
 */
export class Psyche {
    /**
     * The real personality of the actor that hides
     * behind a mask
     */
    private _nature: ArchetypeEnum;

    /**
     * The way the actor behaves externally
     */
    private _demeanor: ArchetypeEnum;

    /**
     * Describes in one or two words who the actor is
     */
    private _concept: string;

    constructor(nature: ArchetypeEnum, demeanor: ArchetypeEnum, concept: string) {
        this._nature = nature;
        this._demeanor = demeanor;
        this._concept = concept;
    }

    /**
     * Nature name getter
     */
    get nature(): string {
        return ArchetypeEnum.getName(this._nature);
    }

    /**
     * Nature type description getter
     */
    get nature_description(): string {
        return ArchetypeEnum.getDescription(this._nature);
    }

    /**
     * Demeanor name getter
     */
    get demeanor(): string {
        return ArchetypeEnum.getName(this._demeanor);
    }

    /**
     * Demeanor type description getter
     */
    get demeanor_description(): string {
        return ArchetypeEnum.getDescription(this._demeanor);
    }

    /**
     * Concept getter
     */
    get concept(): string {
        return this._concept;
    }
}

/**
 * Creates a new Actor for World of Darkness
 * @module WoD Actors
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
