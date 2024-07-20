import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class Val90Magazine implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "5448bc234bdc2d3c308b4569";

        const newItemFleaPrice = 60000;
        const newItemCategory = "5b5f754a86f774094242f19b";
        const newId = "shVal90Magazine";
        const newFilter = "57838f9f2459774a150289a0";
        const newClone = "57838f9f2459774a150289a0";
        const newLongName = "SH 90 Round 9x39mm magazine";
        const newShortName = "VAL 90";
        const newDescription = "90 Round 9x39mm VSS/VAL Magazine by Sasha Himik.";
        const newLL = 1;
        
        const newProps = {
            BackgroundColor: "red"
        }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
        
        items[newId]._props.Cartridges[0]._max_count = 90;
        items[newId]._props.Cartridges[0]._props.filters[0] = items[newFilter]._props.Cartridges[0]._props.filters[0];
    }
}