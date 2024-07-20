import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class BL31_5x45x39_90Magazine implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "5448bc234bdc2d3c308b4569";

        const newItemFleaPrice = 35000;
        const newItemCategory = "5b5f754a86f774094242f19b";
        const newId = "shBL31_5x45x39_90Magazine";
        const newFilter = "55d482194bdc2d1d4e8b456b";
        const newClone = "55d482194bdc2d1d4e8b456b";
        const newLongName = "BL 31 5.45x39 90 rounds Magazine";
        const newShortName = "Bl31 90";
        const newDescription = "BL 31 5.45x39 90 rounds Magazine > Manufactured by Sasha Himik.";
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