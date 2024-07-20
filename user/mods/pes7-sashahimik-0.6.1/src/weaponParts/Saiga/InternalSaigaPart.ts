import * as config from "../../../config/config.json";
import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class InternalSaigaPart implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        if (config.Magazines.Enabled) 
        {
            const itemTrader = "sashahimik";
            const itemTraderCurrency = "UAH"; //Roubles
            const parentID = "5447b6094bdc2dc3278b4567";

            const customSaigaPartItemFleaPrice = 3000;
            const customSaigaPartItemCategory = "5b5f78e986f77447ed5636b1";
            const customSaigaPartId = "shCustomSaigaPart";
            const customSaigaPartFilter = "576165642459773c7a400233";
            const customSaigaPartClone = "576165642459773c7a400233";
            const customSaigaPartLongName = "Saiga 12/70";
            const customSaigaPartShortName = "12/70";
            const customSaigaPartDescription = "A Ukrainian self-loading Saiga, developed by a team of designers under the leadership of Sasha Himik for the needs of Ukrainian law enforcement agencies. Designed by Sasha Himik on Kiev Polytechnic Institute.";
            const customSaigaPartLL = 1;
        
            const customSaigaPartProps = {
                BackgroundColor: "red",
                Prefab:{
                    path: "assets/content/weapons/saiga12/weapon_izhmash_saiga12k_10_12g_container.bundle"
                },
                weapFireType: [
                    "single",
                    "fullauto"
                ],
                ReloadMode:"InternalMagazine",
                SingleFireRate: 240,
                bFirerate: 300
            }
        
            bbLib.addToWeaponsBasedOnFilter(customSaigaPartId, customSaigaPartFilter, serverDatabaseTables);
            bbLib.createItem(customSaigaPartId, customSaigaPartClone, parentID, customSaigaPartLongName, customSaigaPartShortName, customSaigaPartDescription, customSaigaPartItemCategory, customSaigaPartItemFleaPrice, customSaigaPartProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOffer(customSaigaPartId, itemTrader, customSaigaPartItemFleaPrice, itemTraderCurrency, customSaigaPartLL, serverDatabaseTables);
        }
    }
}