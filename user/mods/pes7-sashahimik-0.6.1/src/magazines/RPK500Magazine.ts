import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class RPK500Magazine implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "5448bc234bdc2d3c308b4569";

        const newItemFleaPrice = 100000;
        const newItemCategory = "5b5f754a86f774094242f19b";
        const newId = "shRPK500Magazine";
        const newFilter = "646372518610c40fc20204e8";
        const newClone = "646372518610c40fc20204e8";
        const newLongName = "SH 500 7.62x54R magazine";
        const newShortName = "RPK 500";
        const newDescription = "SH 500 7.62x54R magazine for for Kalashnikov Machine gun. Manufactured by Sasha Himik.";
        const newLL = 1;
        
        const newProps = {
            BackgroundColor: "red"
        }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
        
        items[newId]._props.Cartridges[0]._max_count = 500;
        items[newId]._props.Cartridges[0]._props.filters[0] = items[newFilter]._props.Cartridges[0]._props.filters[0];
    }
}