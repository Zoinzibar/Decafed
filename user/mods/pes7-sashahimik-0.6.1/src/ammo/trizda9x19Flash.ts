
import * as ammoConfig from "../../db/ammo.json";
import { BiggerBangLib } from "../BiggerBangLib";
import { MainProperties } from "src/Pes7Lib";

export const createTrizda9x19Flash = (mainProperties: MainProperties) => 
{
    const { serverDatabaseTables, container, jsonUtil} = mainProperties;
    const bangTraderID = "sashahimik";
    const barterItem = "UAH"; //Roubles
    const ammoParentID = "5485a8684bdc2da71d8b4567";
    const biggerBangLibrary = new BiggerBangLib(container);

    //trizda9x19Flash
    const trizda9x19FlashItemFleaPrice = 40;
    const trizda9x19FlashItemCategory = "5b47574386f77428ca22b33b";
    const trizda9x19FlashId = "665a27ddc015b807d409f1b2"; // only UID!!!!!!!!!!!
    const trizda9x19FlashLookupId = "shtrizda9x19Flash";
    const trizda9x19FlashClone = "5efb0da7a29a85116f6ea05f";
    const trizda9x19FlashLongName = "SH Trizda 9x19 Flash";
    const trizda9x19FlashShortName = "SH Trizda 9x19 Flash";
    const trizda9x19FlashDescription = "This Trizda 9x19 Flash, custom developed ammo by Sasha Himik, contains a lot of flashbank!!!!";
    const trizda9x19FlashLL = 1;
    const trizda9x19FlashCount = 240;
    const trizda9x19FlashLimit = 60;

    // const trizda9x19FlashProps = items[trizda9x19FlashClone]._props;
    const trizda9x19FlashProps = ammoConfig[trizda9x19FlashLookupId];
    // const trizda9x19FlashProps = {}

    biggerBangLibrary.addRoundBasedOnFilter(trizda9x19FlashId, trizda9x19FlashClone, serverDatabaseTables);
    biggerBangLibrary.createItem(trizda9x19FlashId, trizda9x19FlashClone, ammoParentID, trizda9x19FlashLongName, trizda9x19FlashShortName, trizda9x19FlashDescription, trizda9x19FlashItemCategory, trizda9x19FlashItemFleaPrice, trizda9x19FlashProps, serverDatabaseTables, jsonUtil);
    biggerBangLibrary.createItemOfferLimited(trizda9x19FlashId, bangTraderID, trizda9x19FlashCount, trizda9x19FlashLimit, trizda9x19FlashItemFleaPrice, barterItem, trizda9x19FlashLL, serverDatabaseTables);

}