/* @flow */
import {bind} from "decko"
import type {StorageBuilderInterface} from "./StorageBuilderInterface"

/**
 * Storage builder registry
 */
export default class StorageRegistry
{
    /**
     * Builders
     */
    builders:Map<string, StorageBuilderInterface>;

    /**
     * Constructor
     */
    constructor()
    {
        this.builders = new Map;
    }

    /**
     * Add a storage builder
     *
     * @param   {string}                    id          Builder identifier
     * @param   {StorageBuilderInterface}   builder     Builder instance
     * @param   {any}                       options     Options
     */
    @bind
    addBuilder(id:string, builder:StorageBuilderInterface, options?:any)
    {
        this.builders.set(id, builder);
    }

    /**
     * Get available builders
     *
     * @return  {Map}   Available builders
     */
    @bind
    getBuilders():Map<string, StorageBuilderInterface>
    {
        return this.builders;
    }
}
