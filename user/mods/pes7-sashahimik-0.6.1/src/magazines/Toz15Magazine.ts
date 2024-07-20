import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class Toz15Magazine implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "5448bc234bdc2d3c308b4569";

        const newItemFleaPrice = 5000;
        const newItemCategory = "5b5f754a86f774094242f19b";
        const newId = "shToz15Magazine";
        const newFilter = "5c6161fb2e221600113fbde5";
        const newClone = "5c6161fb2e221600113fbde5";
        const newLongName = "SH 15 Round Toz 20x70 magazine";
        const newShortName = "Toz 15";
        const newDescription = "15 Round Toz Magazine by Sasha Himic, to make the gun even more amazing.";
        const newLL = 1;
        
        const newProps = {
            BackgroundColor: "violet"
        }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
        
        items[newId]._props.Cartridges[0]._max_count = 15;
    }
}