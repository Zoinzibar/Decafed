import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class SKSM100 implements ICustomItem
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
        const newId = "shSKSM100";
        const newFilter = "61695095d92c473c7702147a";
        const newClone = "61695095d92c473c7702147a";
        const newLongName = "SH 100 Round Magazine";
        const newShortName = "SKS 100";
        const newDescription = "Sasha Himik's innovative 100-round magazine for the SKS rifle is a game-changer in the world of firearms, blending ingenuity with practicality to elevate the classic SKS to new heights.";
        const newLL = 1;

        const newProps = {

        }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
        
        items[newId]._props.Cartridges[0]._max_count = 100;
        items[newId]._props.Cartridges[0]._props.filters[0] = items[newFilter]._props.Cartridges[0]._props.filters[0];
    }
}