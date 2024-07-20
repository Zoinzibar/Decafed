import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class Nvidia3060Ti implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "57864a66245977548f04a81f";

        const itemItemFleaPrice = 1100000;
        const itemItemCategory = "5b47574386f77428ca22b2ef";
        const itemId = "shrtx3060ti";
        const itemClone = "57347ca924597744596b4e71";
        const itemLongName = "RTX 3060 TI";
        const itemShortName = "RTX 3060 TI";
        const itemDescription = "RTX 3060 TI, pretty good graphics card for gaming and mining by Sasha Himik.";
        const itemLL = 2;
        
        const itemProps = {
            BackgroundColor: "green",
            "Width": 3,
            "Weight": 1.3
        }
        
        bbLib.createItem(itemId, itemClone, parentID, itemLongName, itemShortName, itemDescription, itemItemCategory, itemItemFleaPrice, itemProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(itemId, itemTrader, itemItemFleaPrice, itemTraderCurrency, itemLL, serverDatabaseTables);

        items[itemId]._props.Prefab.path = "items/graphiccard.bundle";
    }
}