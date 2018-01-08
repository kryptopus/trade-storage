/**
 * Compiler pass for the service container
 * It handles tags to register trade storage builders
 */
export default class RegisterStorageBuilderCompilerPass
{
    /**
     * Process the tags
     *
     * @param   {Container}     container   Service container
     */
    async process(container)
    {
        let definition = container.getDefinition("kryptopus_trade_storage_builder_registry");

        let serviceIds = container.findTaggedServiceIds("kryptopus.trade_storage_builder");
        for (let serviceId of serviceIds) {
            let storageReference = container.getReference(serviceId);
            let storageDefinition = container.getDefinition(serviceId);
            let storageTags = storageDefinition.getTags();

            for (let tag of storageTags) {
                if (tag.name !== "kryptopus.trade_storage_builder") {
                    continue;
                }

                if (!tag.builder_id) {
                    throw new Error(`Invalid tag "kryptopus.trade_storage_builder" for service ${serviceId}`);
                }

                let options = Object.assign({}, tag);
                delete options.name;
                delete options.builder_id;

                definition.addMethodCall("addBuilder", [
                    tag.builder_id,
                    storageReference,
                    options
                ]);
            }


        }
    }
}
