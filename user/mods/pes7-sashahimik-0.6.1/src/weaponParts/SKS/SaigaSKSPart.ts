import * as config from "../../../config/config.json";
import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class CustomSaigaSKSPart implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        if (config.Magazines.Enabled) 
        {
            const items = serverDatabaseTables.templates.items;

            const itemTrader = "sashahimik";
            const itemTraderCurrency = "UAH"; //Roubles
            const parentID = "5447b6094bdc2dc3278b4567";

            const customSaigaSKSPartItemFleaPrice = 3000;
            const customSaigaSKSPartItemCategory = "5b5f78e986f77447ed5636b1";
            const customSaigaSKSPartId = "shCustomSaigaSKSPart";
            const customSaigaSKSPartFilter = "576165642459773c7a400233";
            const customSaigaSKSPartClone = "574d967124597745970e7c94";
            const customSaigaSKSPartLongName = "Sasha Khimik Special SKS12/70";
            const customSaigaSKSPartShortName = "SKS12/70";
            const customSaigaSKSPartDescription = "A Ukrainian self-loading SKS, developed by a team of designers under the leadership of Sasha Himik for the needs of Ukrainian law enforcement agencies. Designed by Sasha Himik on Kiev Polytechnic Institute.";
            const customSaigaSKSPartLL = 1;
        
            const customSaigaSKSPartProps = {
                BackgroundColor: "red",
                weapFireType: [
                    "single",
                    "fullauto"
                ],
                SingleFireRate: 180,
                bFirerate: 300,
            }
        
            bbLib.addToWeaponsBasedOnFilter(customSaigaSKSPartId, customSaigaSKSPartFilter, serverDatabaseTables);
            bbLib.createItem(customSaigaSKSPartId, customSaigaSKSPartClone, parentID, customSaigaSKSPartLongName, customSaigaSKSPartShortName, customSaigaSKSPartDescription, customSaigaSKSPartItemCategory, customSaigaSKSPartItemFleaPrice, customSaigaSKSPartProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOffer(customSaigaSKSPartId, itemTrader, customSaigaSKSPartItemFleaPrice, itemTraderCurrency, customSaigaSKSPartLL, serverDatabaseTables);
            items[customSaigaSKSPartId]._props.Slots[2]._props.filters = items[customSaigaSKSPartFilter]._props.Slots[7]._props.filters;
            items[customSaigaSKSPartId]._props.Chambers[0]._props.filters = items[customSaigaSKSPartFilter]._props.Chambers[0]._props.filters;
        }
    }
}
