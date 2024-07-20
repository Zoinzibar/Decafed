import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties, Pes7Lib } from "src/Pes7Lib";

export class Kosterishche40 implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil, objectIdGenerator} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "UAH"; //Roubles
        const parentID = "55818b014bdc2ddc698b456b";
        const items = serverDatabaseTables.templates.items;

        const newItemFleaPrice = 3000;
        const newItemCategory = "5b5f754a86f774094242f19b";
        const newId = "shKosterishche40";
        const newFilter = "62e7e7bbe6da9612f743f1e0";
        const newClone = "62e7e7bbe6da9612f743f1e0";//620109578d82e67e7911abf2
        const newLongName = "Kosterishche 40";
        const newShortName = "Kosterishche 40";
        const newDescription = "Kosterishche 40, 40mm grenade launcher modified by Sasha Himik.";
        const newLL = 1;
        
        const newProps = {
            Chambers: [{
                "_name": "patron_in_weapon",
                "_id": objectIdGenerator.generateObjectId(),
                "_parent": "shKosterishche40",
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5656eb674bdc2d35148b457c"
                            ]
                        }
                    ]
                },
                "_required": false,
                "_mergeSlotWithChildren": false,
                "_proto": "55d4af244bdc2d962f8b4571"
            }]
        }

        // for (let i = 0; i < 6; i++)
        // {
        //     newProps.Chambers.push({
        //         "_name": `patron_in_weapon_${i}`,
        //         "_id": objectIdGenerator.generateObjectId(),
        //         "_parent": "shKosterishche40",
        //         "_props": {
        //             "filters": [
        //                 {
        //                     "Filter": [
        //                         "5656eb674bdc2d35148b457c"
        //                     ]
        //                 }
        //             ]
        //         },
        //         "_required": false,
        //         "_mergeSlotWithChildren": false,
        //         "_proto": "55d4af244bdc2d962f8b4571"
        //     })
        // }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
    }
}
