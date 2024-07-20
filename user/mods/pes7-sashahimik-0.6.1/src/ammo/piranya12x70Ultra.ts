import * as ammoConfig from "../../db/ammo.json";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { BiggerBangLib } from "../BiggerBangLib";
import { MainProperties } from "src/Pes7Lib";

export const createPiranya12x70Ultra = (mainProperties: MainProperties): void => 
{
    const { serverDatabaseTables, container, jsonUtil} = mainProperties;
    const bangTraderID = "sashahimik";
    const barterItem = "5449016a4bdc2d6f028b456f"; //Roubles
    const ammoParentID = "5485a8684bdc2da71d8b4567";
    const items = serverDatabaseTables.templates.items;

    const biggerBangLibrary = new BiggerBangLib(container);

    //piranya12x70Ultra
    const piranya12x70UltraItemFleaPrice = 1600;
    const piranya12x70UltraItemCategory = "5b47574386f77428ca22b33b";
    const piranya12x70UltraId = "661532a385dc75aca8f639c8"; // only UID!!!!!!!!!!!
    const piranya12x70UltraLookupId = "shPiranya12x70Ultra";
    const piranya12x70UltraClone = "64b8ee384b75259c590fa89b";
    const piranya12x70UltraLongName = "SH Piranya 12x70 Ultra";
    const piranya12x70UltraShortName = "Piranya 12x70 Ultra";
    const piranya12x70UltraDescription = "This 12 gauge round, that was little modified by Sasha Himik, contains dozens of razor sharp steel tacks that blast out at high velocity which virtually guarantees that there will be no response from the perpetrator. Each round is buffed with #12 shot thus creating a double shock to the wound area. Absolutely will not harm your shotgun. To be used no closer than 10 feet and no further than 50 feet.";
    const piranya12x70UltraLL = 1;
    const piranya12x70UltraCount = 240;
    const piranya12x70UltraLimit = 60;

    const piranya12x70UltraProps = ammoConfig[piranya12x70UltraLookupId];

    biggerBangLibrary.addRoundBasedOnFilter(piranya12x70UltraId, piranya12x70UltraClone, serverDatabaseTables);
    biggerBangLibrary.createItem(piranya12x70UltraId, piranya12x70UltraClone, ammoParentID, piranya12x70UltraLongName, piranya12x70UltraShortName, piranya12x70UltraDescription, piranya12x70UltraItemCategory, piranya12x70UltraItemFleaPrice, piranya12x70UltraProps, serverDatabaseTables, jsonUtil);
    biggerBangLibrary.createItemOfferLimited(piranya12x70UltraId, bangTraderID, piranya12x70UltraCount, piranya12x70UltraLimit, piranya12x70UltraItemFleaPrice, barterItem, piranya12x70UltraLL, serverDatabaseTables);

    items[piranya12x70UltraId]._props.Prefab.path = "ammo/piranya12x70ultra.bundle";
}