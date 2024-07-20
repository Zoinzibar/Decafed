import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class CylinderMc255Magazine implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const parentID = "610720f290b75a49ff2e5e25";
            
        const newItemFleaPrice = 3563;
        const newItemCategory = "5b5f754a86f774094242f19b";
        const newId = "shcylmc255";
        const newFilter = "60dc519adf4c47305f6d410d";
        const newClone = "60dc519adf4c47305f6d410d";
        const newLongName = "SH 5 Round Cylinder Magazine";
        const newShortName = "CYL 5";
        const newDescription = "Yes, just regular magazine :( I tried, but BSG made hardcode somewhere on c#, so I can't make more 5 rounds :(((";
        const newLL = 1;
        
        const newProps = {
            BackgroundColor: "yellow"
        }
        
        bbLib.addToWeaponsBasedOnFilter(newId, newFilter, serverDatabaseTables);
        bbLib.createItem(newId, newClone, parentID, newLongName, newShortName, newDescription, newItemCategory, newItemFleaPrice, newProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(newId, itemTrader, newItemFleaPrice, itemTraderCurrency, newLL, serverDatabaseTables);
        
        const slot = items[newId]._props.Slots[0];
        items[newId]._props.Slots = [];
        for (let i = 0; i < 5; i++) 
        {
            const formattedIndex = String(i).padStart(3, "0"); // Adds leading zeros
            items[newId]._props.Slots.push({...slot, _name: `camora_${formattedIndex}`, _id: `611f7d218a9d781530261d${i}`});
        }
        items[newId]._props.Cartridges[0]._max_count = 5;
        items[newId]._props.Cartridges[0]._props.filters[0] = items[newFilter]._props.Cartridges[0]._props.filters[0];
    }
}