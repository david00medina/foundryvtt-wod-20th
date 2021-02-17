/**
 * Implementation for the health and damage mechanics
 * applied to actors at World of Darkness.
 * @packageDocumentation
 * @module Health & Damage system
 * @category WoD Actor
 */

/**
 * Enumerates the kind of damages an actor may receive
 * @category Damage system
 */

export enum DamageTypeEnum {
    BASHING,
    LETHAL,
    AGGRAVATED
}

/**
 * Enumerates the health states and its penalty values
 * @category Health system
 */
export enum HealthStateEnum {
    HEALTHY,
    BRUISED,
    HURT,
    INJURED,
    WOUNDED,
    MAULED,
    CRIPPLED,
    INCAPACITATED,
    DEAD
}

/**
 * Set of functions to operate with the health state enumerate
 * @Category Health system
 */
export namespace HealthStateEnum {
    /**
     * Displays the health state string
     * @param state
     */
    export function toString(state: HealthStateEnum): string {
        return HealthStateEnum[state];
    }

    /**
     * Display the damage penalty associated to a certain health state
     * @param state
     */
    export function healthStatePenalty(state: HealthStateEnum): number {
        switch (state) {
            case HealthStateEnum.HEALTHY:
            case HealthStateEnum.BRUISED:
                return 0;
            case HealthStateEnum.HURT:
            case HealthStateEnum.INJURED:
                return -1;
            case HealthStateEnum.WOUNDED:
            case HealthStateEnum.MAULED:
                return -2;
            case HealthStateEnum.CRIPPLED:
                return -5;
            case HealthStateEnum.INCAPACITATED:
                return Number.POSITIVE_INFINITY;
            case HealthStateEnum.DEAD:
                return Number.NEGATIVE_INFINITY;
            default:
                return undefined;
        }
    }
}

/**
 * It manages the damage received by an actor
 * during the game
 * @category Damage system
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