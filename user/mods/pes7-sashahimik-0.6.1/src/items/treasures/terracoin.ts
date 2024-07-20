import { BiggerBangLib } from "../../BiggerBangLib";
import { ICryptoCoin, ICustomItem, MainProperties } from "src/Pes7Lib";

export class TRC700000 implements ICustomItem, ICryptoCoin
{
    itemId: string = "shtrc700000";
    count: number = 700000;
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "57864a3d24597754843f8721";

        const itemItemFleaPrice = 740032;
        const itemItemCategory = "5b47574386f77428ca22b2f1";
        const itemClone = "59faff1d86f7746c51718c9c";
        const itemLongName = "700000 TRC";
        const itemShortName = "700000 TRC";
        const itemDescription = "700000 physical TRC coins by Sasha Himik.";
        const itemLL = 1;
        
        const itemProps = {
            BackgroundColor: "yellow"
        }
        
        bbLib.createItem(this.itemId, itemClone, parentID, itemLongName, itemShortName, itemDescription, itemItemCategory, itemItemFleaPrice, itemProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(this.itemId, itemTrader, itemItemFleaPrice, itemTraderCurrency, itemLL, serverDatabaseTables);

        items[this.itemId]._props.Prefab.path = "items/terracoin.bundle";
    }
}