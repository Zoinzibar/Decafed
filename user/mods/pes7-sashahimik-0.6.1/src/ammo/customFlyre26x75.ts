import * as ammoConfig from "../../db/ammo.json";
import { BiggerBangLib } from "../BiggerBangLib";
import { MainProperties } from "src/Pes7Lib";

export const createCustomFlyre26x75 = (mainProperties: MainProperties) => 
{
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bangTraderID = "sashahimik";
        const barterItem = "UAH"; //Roubles
        const ammoParentID = "5485a8684bdc2da71d8b4567";
        const items = serverDatabaseTables.templates.items;

        const biggerBangLibrary = new BiggerBangLib(container);

        //flyre26x75
        const flyre26x75ItemFleaPrice = 1500;
        const flyre26x75ItemCategory = "5b47574386f77428ca22b33b";
        const flyre26x75Id = "6663637547bdd11337662905"; // only UID!!!!!!!!!!!
        const flyre26x75LookupId = "shFlyre26x75";
        const flyre26x75Clone = "5ede474b0c226a66f5402622";
        const flyre26x75LongName = "SH flyre 26x75";
        const flyre26x75ShortName = "SH flyre 26x75";
        const flyre26x75Description = "This flyre 26x75, custom developed ammo by Sasha Himik";
        const flyre26x75LL = 1;
        const flyre26x75Count = 240;
        const flyre26x75Limit = 60;

        // const flyre26x75Props = items[flyre26x75Clone]._props;
        const flyre26x75Props = ammoConfig[flyre26x75LookupId];
        // const flyre26x75Props = {}

        biggerBangLibrary.addRoundBasedOnFilter(flyre26x75Id, flyre26x75Clone, serverDatabaseTables);
        biggerBangLibrary.createItem(flyre26x75Id, flyre26x75Clone, ammoParentID, flyre26x75LongName, flyre26x75ShortName, flyre26x75Description, flyre26x75ItemCategory, flyre26x75ItemFleaPrice, flyre26x75Props, serverDatabaseTables, jsonUtil);
        biggerBangLibrary.createItemOfferLimited(flyre26x75Id, bangTraderID, flyre26x75Count, flyre26x75Limit, flyre26x75ItemFleaPrice, barterItem, flyre26x75LL, serverDatabaseTables);
    }
}