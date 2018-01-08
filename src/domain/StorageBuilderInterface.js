/* @flow */
import type {StorageInterface} from "./StorageInterface"

/**
 * Storage builder
 */
export interface StorageBuilderInterface
{
    /**
     * Build a storage instance
     *
     * @param   {any}            parameters  Storage parameters
     * @return  {StorageInterface}              Storage instance
     */
    build(parameters?:any):StorageInterface;
}
