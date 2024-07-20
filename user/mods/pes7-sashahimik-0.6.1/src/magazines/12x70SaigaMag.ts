import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class SaigaInternal100 implements ICustomItem
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
        const newId = "shSaiga12x76x100";
        const newFilter = "5cf8f3b0d7f00c00217872ef";
        const newClone = "5cf8f3b0d7f00c00217872ef";
        const newLongName = "Saiga 50 Round 12/70 Magazine";
        const newShortName = "Saiga 50";
        const newDescription = "Sasha Himik's modification of the Saiga's 50-round magazine is a groundbreaking advancement in firearm technology, redefining the capabilities of this versatile rifle.";
        const newLL = 1;

        const newProps = {
        }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
        items[newId]._props.Cartridges[0]._max_count = 50;
    }
}