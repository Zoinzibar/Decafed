import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class SaigaSKSInternal100 implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "5448bc234bdc2d3c308b4569";

        const newItemFleaPrice = 40000;
        const newItemCategory = "5b5f754a86f774094242f19b";
        const newId = "shSaigaSKS12x76x100";
        const newFilter = "5cf8f3b0d7f00c00217872ef";
        const newClone = "61695095d92c473c7702147a";
        const newLongName = "SaigaSKS 25 Round 12/70 Magazine";
        const newShortName = "SaigaSKS 25";
        const newDescription = "The modified barrel designed by Sasha Himik ingeniously converts the standard 7.62x39mm rifle to accommodate 12/76 shotgun shells. This innovative transformation involves precise engineering to maintain the firearm's integrity and performance.";
        const newLL = 1;

        const newProps = {
            Prefab:{
                path:"parts/magazines/saigasks24roundsmag.bundle"
            },
            "Width": 2,
            "Height": 2
        }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
        items[newId]._props.Cartridges = items[newFilter]._props.Cartridges;
        items[newId]._props.Cartridges[0]._max_count = 24;
    }
}