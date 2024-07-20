import { BiggerBangLib } from "../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class M203 implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "UAH"; //Roubles
        const parentID = "55818b014bdc2ddc698b456b";
        const items = serverDatabaseTables.templates.items;

        const m203ItemFleaPrice = 3000;
        const m203ItemCategory = "5b5f754a86f774094242f19b";
        const m203Id = "shM203";
        const m203Filter = "6357c98711fb55120211f7e1";
        const m203Clone = "6357c98711fb55120211f7e1";//620109578d82e67e7911abf2
        const m203LongName = "Sasha Himik M203";
        const m203ShortName = "Sasha Himik M203";
        const m203Description = "Sasha Himik's M203 underbarrel grenade launcher allows to use flash cartrid";
        const m203LL = 1;
        
        const m203Props = {
       
        }
        
        bbLib.addToWeaponsBasedOnFilter(m203Id, m203Filter, serverDatabaseTables);
        bbLib.createItem(m203Id, m203Clone, parentID, m203LongName, m203ShortName, m203Description, m203ItemCategory, m203ItemFleaPrice, m203Props, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(m203Id, itemTrader, m203ItemFleaPrice, itemTraderCurrency, m203LL, serverDatabaseTables);

        items[m203Id]._props.Chambers[0]._props.filters[0].Filter[7] = "6663637547bdd11337662905";
    }
}
