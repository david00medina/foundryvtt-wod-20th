/**
 * This modules contains every enumerate used by a
 * base WoD Actor.
 * @packageDocumentation
 * @module WoD Actor Enumerates
 * @category WoD Actor
 */

/**
 * Defines the WoD edition available to select
 * when creating an actor or a game rule
 */
export enum WoDEditionEnum {
    "20TH_ANNIVERSARY",
    "5TH_EDITION",
    "MIXED"
}

/**
 * List of playable races in WoD
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
 * Enumerates the kind of damages an actor may receive
 */

export enum DamageTypeEnum {
    BASHING,
    LETHAL,
    AGGRAVATED
}

/**
 * Enumerates the health states and its penalty values
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
 * Defines the archatypes to be able to define
 * the nature and demeanor of an actor
 */
export enum ArchetypeEnum {
    ARCHITECH,
    AUTOCRAT,
    BON_VIVANT,
    BRAVO,
    CAPITALIST,
    CAREGIVER,
    CELEBRANT,
    CAMELEON,
    CHILD,
    COMPETITOR,
    CONFORMIST
}

/**
 * Method definition for the Archetype enumerate
 */
export namespace ArchetypeEnum {
    /**
     * Gets the name of the archetype
     * @param archetype
     */
    export function getName(archetype: ArchetypeEnum): string {
        return ArchetypeEnum[archetype];
    }

    /**
     * Displays a description of the selected archetype
     * @param archetype
     */
    export function getDescription(archetype: ArchetypeEnum): string {
        switch (archetype) {
            default:
                return ""
        }
    }
}

/**
 * Types of actor feature types
 */
export enum ActorFeatureTypeEnum {
    PHYSICAL,
    SOCIAL,
    MENTAL,
    SUPERNATURAL
}