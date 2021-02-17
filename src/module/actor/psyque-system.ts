/**
 * Implementation for the psyche system of an actor in
 * World of Darkness.
 * @packageDocumentation
 * @module Psyche system
 * @Category WoD Actor
 */

/**
 * Defines the archatypes to be able to define
 * the nature and demeanor of an actor
 * @category General
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
 * @category General
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
 * Determines the psyche of the actor
 * @category General
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