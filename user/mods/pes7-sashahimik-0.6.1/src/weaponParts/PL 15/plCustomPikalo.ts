import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class PlCustomPikalo implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "UAH"; //Roubles
        const parentID = "5447b5cf4bdc2d65278b4567";

        const plCustomPikaloItemFleaPrice = 3000;
        const plCustomPikaloItemCategory = "5b5f792486f77447ed5636b3";
        const plCustomPikaloId = "shCustomPikalo";
        const plCustomPikaloFilter = "602a9740da11d6478d5a06dc";
        const plCustomPikaloClone = "602a9740da11d6478d5a06dc";
        const plCustomPikaloLongName = "Lebedev PL-15 9x19 pistol by SH";
        const plCustomPikaloShortName = "PL-15 SH";
        const plCustomPikaloDescription = "A Ukrainian self-loading pistol chambered in 9x19mm, developed by a team of designers from the Kalashnikov concern under the leadership of Sasha Himik for the needs of Ukrainian law enforcement agencies. Designed by Sasha Himik on Kiev Polytechnic Institute.";
        const plCustomPikaloLL = 1;
        
        const plCustomPikaloProps = {
            BackgroundColor: "red",
            weapFireType: [
                "single",
                "fullauto"
            ],
            SingleFireRate: 550,
            bFirerate: 700
        }
        
        bbLib.addToWeaponsBasedOnFilter(plCustomPikaloId, plCustomPikaloFilter, serverDatabaseTables);
        bbLib.createItem(plCustomPikaloId, plCustomPikaloClone, parentID, plCustomPikaloLongName, plCustomPikaloShortName, plCustomPikaloDescription, plCustomPikaloItemCategory, plCustomPikaloItemFleaPrice, plCustomPikaloProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(plCustomPikaloId, itemTrader, plCustomPikaloItemFleaPrice, itemTraderCurrency, plCustomPikaloLL, serverDatabaseTables);
    }
}
