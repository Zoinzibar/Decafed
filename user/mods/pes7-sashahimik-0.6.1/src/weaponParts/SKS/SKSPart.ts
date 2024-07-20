import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class CustomSKSPart implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil, objectIdGenerator} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "UAH"; //Roubles
        const parentID = "5447b5fc4bdc2d87278b4567";

        const customSKSPartItemFleaPrice = 3000;
        const customSKSPartItemCategory = "5b5f78e986f77447ed5636b1";
        const customSKSPartId = "shCustomSKSPart";
        const customSKSPartFilter = "574d967124597745970e7c94";
        const customSKSPartClone = "574d967124597745970e7c94";
        const customSKSPartLongName = "SKS 7.62x39";
        const customSKSPartShortName = "7.62x39";
        const customSKSPartDescription = "A Ukrainian self-loading SKS, developed by a team of designers under the leadership of Sasha Himik for the needs of Ukrainian law enforcement agencies. Designed by Sasha Himik on Kiev Polytechnic Institute.";
        const customSKSPartLL = 1;
        
        const customSKSPartProps = {
            BackgroundColor: "red",
            weapFireType: [
                "single",
                "fullauto"
            ],
            SingleFireRate: 240,
            bFirerate: 300
        }
        
        bbLib.addToWeaponsBasedOnFilter(customSKSPartId, customSKSPartFilter, serverDatabaseTables);
        bbLib.createItem(customSKSPartId, customSKSPartClone, parentID, customSKSPartLongName, customSKSPartShortName, customSKSPartDescription, customSKSPartItemCategory, customSKSPartItemFleaPrice, customSKSPartProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(customSKSPartId, itemTrader, customSKSPartItemFleaPrice, itemTraderCurrency, customSKSPartLL, serverDatabaseTables);
    }
}