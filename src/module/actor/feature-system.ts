/**
 * Implements the merits & flaws system for an actor in
 * World of Darkness.
 * @packageDocumentation
 * @module Feature system
 * @category WoD Actor
 */

/**
 * Feature types enumerator
 * @category General
 */
export enum ActorFeatureTypeEnum {
    PHYSICAL,
    SOCIAL,
    MENTAL,
    SUPERNATURAL
}

/**
 * Contains an specific actor feature
 * @category General
 */
export class ActorFeature {
    /**
     * Feature name.
     */
    private _name: string;

    /**
     * Feature description
     */
    private _description: string;

    /**
     * Feature type
     */
    private _type: ActorFeatureTypeEnum;

    /**
     * The feature points of cost or reward when acquired.
     */
    private _points: number;

    /**
     * ActorFeature constructor
     */
    constructor(name: string, description: string){
        this._name = name;
        this._description = description;
        this._type = ActorFeatureTypeEnum[name];
    };

    /**
     * Feature name getter
     */
    get name(): string {
        return this._name;
    }

    /**
     * Feature description getter
     */
    get description(): string {
        return this._description;
    }

    /**
     * Feature type getter
     */
    get feature(): ActorFeatureTypeEnum {
        return this._type;
    }

    /**
     * Feature points getter
     */
    get points(): number {
        return this._points;
    }
}

/**
 * Actore feature decorator for merits & flaws
 * @category General
 */
export class FeatureTypeDecorator extends ActorFeature {

}