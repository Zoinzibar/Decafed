import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class P90M120 implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "5448bc234bdc2d3c308b4569";

        const newItemFleaPrice = 15000;
        const newItemCategory = "5b5f754a86f774094242f19b";
        const newId = "shP90M120";
        const newFilter = "5cc70093e4a949033c734312";
        const newClone = "5cc70093e4a949033c734312";
        const newLongName = "SH 120 Round Magazine";
        const newShortName = "P90 120";
        const newDescription = "120 Round P90 Magazine by Sasha Himik.";
        const newLL = 1;
        
        const newProps = {
            BackgroundColor: "red"
        }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
        
        items[newId]._props.Cartridges[0]._max_count = 120;
        items[newId]._props.Cartridges[0]._props.filters[0] = items[newFilter]._props.Cartridges[0]._props.filters[0];
    }
}