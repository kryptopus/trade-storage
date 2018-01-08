/* @flow */
import type {CommandInterface} from "solfegejs-cli/interface"
import type StorageBuilderRegistry from "../../domain/StorageBuilderRegistry"

/**
 * List available storages
 */
export default class ListStoragesCommand implements CommandInterface
{
    /**
     * Command description
     */
    description:string;

    /**
     * Storage builder registry
     */
    builderRegistry:StorageBuilderRegistry;

    /**
     * Constructor
     *
     * @param   {StorageBuilderRegistry}    builderRegistry     Builder registry
     */
    constructor(builderRegistry:StorageBuilderRegistry)
    {
        this.builderRegistry = builderRegistry;
    }

    /**
     * Get command name
     *
     * @return  {string}    Command name
     */
    getName():string
    {
        return "kryptopus:trade:storage_builder:list";
    }

    /**
     * Get command description
     *
     * @return  {string}    Command description
     */
    getDescription():string
    {
        return this.description;
    }

    /**
     * Configure the command
     */
    async configure()
    {
        this.description = "List available trade storages";
    }

    /**
     * Execute the command
     *
     * @param   {Array}     parameters  Command parameters
     */
    async execute(parameters:Array<string>)
    {
        const builders = this.builderRegistry.getBuilders();

        console.info("Available storage builders:");
        for (let [id:string, builder:StorageBuilderInterface] of builders) {
            console.info(id, builder);
        }
    }
}
