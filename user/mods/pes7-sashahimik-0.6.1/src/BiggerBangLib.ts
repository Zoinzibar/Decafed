import type { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { ConfigServer } from "@spt/servers/ConfigServer";

let logger: ILogger;
let customitem: CustomItemService;

export class BiggerBangLib 
{

    constructor(container: DependencyContainer) 
    {
        logger = container.resolve<ILogger>("WinstonLogger");
        customitem = container.resolve<CustomItemService>("CustomItemService");
    }

    public addRoundBasedOnFilter(i_id, i_itemToFilter,tables: IDatabaseTables) 
    {
        const items = tables.templates.items;
        //Loop through items and check if they have i_itemToFilter in their slots, if so add i_id to the same slot
        for (const loopId in items)
        {
            const item = items[loopId];
            if (item._props.Chambers !== undefined && item._props.Chambers.length > 0) 
            {
                for (let chamberino = 0; chamberino < item._props.Chambers.length; chamberino++) 
                {
                    if (item._props.Chambers[chamberino]._props != undefined && item._props.Chambers[chamberino]._props.filters != undefined) 
                    {
                        if (item._props.Chambers[chamberino]._props.filters[0].Filter.includes(i_itemToFilter)) 
                        {
                            item._props.Chambers[chamberino]._props.filters[0].Filter.push(i_id);
                            // logger.info("Pushed " + i_id + " to " + item._id + " chamber");
                        }
                    }
                }
            }
            else if (item._props.Cartridges !== undefined && item._props.Cartridges.length > 0) 
            {
                for (let kartrij = 0; kartrij < item._props.Cartridges.length; kartrij++) 
                {
                    if (item._props.Cartridges[kartrij]._props != undefined && item._props.Cartridges[kartrij]._props.filters != undefined) 
                    {    
                        if (item._props.Cartridges[kartrij]._props.filters[0].Filter.includes(i_itemToFilter)) 
                        {
                            item._props.Cartridges[kartrij]._props.filters[0].Filter.push(i_id);
                            // logger.info("Pushed " + i_id + " to " + item._id + " magazine");
                        }
                    }
                }
            }
            //Need to loop through Slots for revolver shotgun
            if (item._props.Slots !== undefined && item._props.Slots.length > 0) 
            {
                for (let slot = 0; slot < item._props.Slots.length; slot++) 
                {
                    if (item._props.Slots[slot]._props != undefined && item._props.Slots[slot]._props.filters != undefined) 
                    {
                        if (item._props.Slots[slot]._props.filters[0].Filter.includes(i_itemToFilter)) 
                        {
                            item._props.Slots[slot]._props.filters[0].Filter.push(i_id);
                        }
                    }
                }
            }
        }
    }

    public addToWeaponsBasedOnFilter(i_id, i_itemToFilter,tables: IDatabaseTables) 
    {

        const items = tables.templates.items;
        //Loop through items and check if they have i_itemToFilter in their slots, if so add i_id to the same slot
        for (const loopId in items)
        {
            const item = tables.templates.items[loopId];
            if (item._props.Slots !== undefined && item._props.Slots.length > 0) 
            {
                for (let slot = 0; slot < item._props.Slots.length; slot++) 
                {
                    if (item._props.Slots[slot]._props != undefined && item._props.Slots[slot]._props.filters != undefined) 
                    {
                        if (item._props.Slots[slot]._props.filters[0].Filter.includes(i_itemToFilter)) 
                        {
                            item._props.Slots[slot]._props.filters[0].Filter.push(i_id);
                        }
                    }
                }
            }
        }
    }

    public addToGrenadeLaunchers(i_id,tables: IDatabaseTables) 
    {
        const items = tables.templates.items;

        const glFortyBurst = items["glBurst"];
        for (const slot of glFortyBurst._props.Slots) 
        {
            if (slot._name == "mod_magazine") 
            {
                slot._props.filters[0].Filter.push(i_id);
            }
        }

        const glFortyFullAuto = items["glFullAuto"];
        for (const slot of glFortyFullAuto._props.Slots) 
        {
            if (slot._name == "mod_magazine") 
            {
                slot._props.filters[0].Filter.push(i_id);
            }
        }

        // let msglAuto = items["msglAuto"];
        // for (let slot of msglAuto._props.Slots) {
        //     if (slot._name == "mod_magazine") {
        //         slot._props.filters[0].Filter.push(i_id);
        //     }
        // }

        // let bubsLauncher = items["bubsLauncher"];
        // for (let slot of bubsLauncher._props.Slots) {
        //     if (slot._name == "mod_magazine") {
        //         slot._props.filters[0].Filter.push(i_id);
        //     }
        // }
    }

    public addToGrenadierQuest(i_id,tables: IDatabaseTables) 
    {
        const i_quests = tables.templates.quests;
        const grenadierQuestID = "5c0d190cd09282029f5390d8";
        const kwest = i_quests[grenadierQuestID];
        //Add grenade to acceptable weapons for quest
        kwest.conditions.AvailableForFinish[0].counter.conditions[0].weapon.push(i_id);
        i_quests[grenadierQuestID] = kwest;
    }

    public addToStirrupQuest(i_id,tables: IDatabaseTables) 
    {
        const i_quests = tables.templates.quests;
        const stirrupQuestID = "596b455186f77457cb50eccb";
        const kwest = i_quests[stirrupQuestID];
        //Add grenade to acceptable weapons for quest
        kwest.conditions.AvailableForFinish[0].counter.conditions[0].weapon.push(i_id);
        i_quests[stirrupQuestID] = kwest;
    }

    public addToPunisherPart4Quest(i_id,tables: IDatabaseTables) 
    {
        const i_quests = tables.templates.quests;
        const punisherPartFourQuestId = "59ca264786f77445a80ed044";
        const kwest = i_quests[punisherPartFourQuestId];
        //Add grenade to acceptable weapons for quest
        kwest.conditions.AvailableForFinish[0].counter.conditions[0].weapon.push(i_id);
        i_quests[punisherPartFourQuestId] = kwest;
    }

    public addToSetupQuest(i_id,tables: IDatabaseTables) 
    {
        const i_quests = tables.templates.quests;
        const setupQuestId = "5c1234c286f77406fa13baeb";
        const kwest = i_quests[setupQuestId];
        //Add grenade to acceptable weapons for quest
        kwest.conditions.AvailableForFinish[0].counter.conditions[0].weapon.push(i_id);
        i_quests[setupQuestId] = kwest;
    }

    public createItemHandbookEntry(i_id, i_category, i_fprice,tables: IDatabaseTables)
    {
        const i_handbook = tables.templates.handbook.Items;
        //Add item to handbook
        i_handbook.push(
            {
                "Id": i_id,
                "ParentId": i_category,
                "Price": i_fprice
            }
        );
    }

    public createItem(i_id, i_clone, i_parent, i_lname, i_sname, i_desc, i_category, i_price, i_props,tables: IDatabaseTables,JsonUtil: JsonUtil, has_price: boolean = true)
    {
        i_props["Name"] = i_lname;
        i_props["ShortName"] = i_sname;
        i_props["Description"] = i_desc;
        const new_item: NewItemFromCloneDetails = {
            itemTplToClone: i_clone,
            overrideProperties: i_props,
            parentId: i_parent,
            newId: i_id,
            fleaPriceRoubles: has_price ? i_price : 0,
            handbookPriceRoubles: has_price ? i_price : 0,
            handbookParentId: i_category,
            locales: {
                "en": {
                    name: i_lname,
                    shortName: i_sname,
                    description: i_desc
                }
            },
        };

        customitem.createItemFromClone(new_item);
    }

    public createItemOffer(i_id, i_trader, i_price, i_currency, i_loyalty,tables: IDatabaseTables, has_price: boolean = true, custom_count: number = 999999)
    {
        const traders = tables.traders;
        //Add item to trader stock
        traders[i_trader].assort.items.push(
            {
                "_id": i_id,
                "_tpl": i_id,
                "parentId": "hideout",
                "slotId": "hideout",
                "upd":
                {
                    "UnlimitedCount": true,
                    "StackObjectsCount": custom_count
                }
            }
        );
        //Add price to item
        if (has_price)
        {
            traders[i_trader].assort.barter_scheme[i_id] = [
                [
                    {
                        "count": i_price,
                        "_tpl": i_currency
                    }
                ]
            ];
        }
        //Add Loyalty Level to item
        traders[i_trader].assort.loyal_level_items[i_id] = i_loyalty;
    }

    public createItemOfferLimited(i_id, i_trader, i_count, i_maxLimit, i_price, i_currency, i_loyalty,tables: IDatabaseTables, has_price: boolean = true)
    {
        const traders = tables.traders;
        //Add item to trader stock
        traders[i_trader].assort.items.push(
            {
                "_id": i_id,
                "_tpl": i_id,
                "parentId": "hideout",
                "slotId": "hideout",
                "upd":
                {
                    "UnlimitedCount": false,
                    "StackObjectsCount": i_count,
                    "BuyRestrictionMax": i_maxLimit,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        //Add price to item
        if (has_price)
        {
            traders[i_trader].assort.barter_scheme[i_id] = [
                [
                    {
                        "count": i_price,
                        "_tpl": i_currency
                    }
                ]
            ];
        }
        //Add Loyalty Level to item
        traders[i_trader].assort.loyal_level_items[i_id] = i_loyalty;
    }

    public createWeaponPreset(p_id: string, p_name: string, p_preset,tables: IDatabaseTables)
    {
        //Set preset name in locales
        // for (const localeID in tables.locales.global)
        // {
        //     tables.locales.global[localeID].preset[p_id] = {
        //         "Name": p_name
        //     }
        // }
        //Add preset to presets database
        tables.globals.ItemPresets[p_id] = p_preset;
    }

    public createWeaponMastery(p_name, p_presets,tables: IDatabaseTables) 
    {
        const masterylist = tables.globals.config.Mastering
        const mastery = {
            "Name": p_name,
            "Templates": [
                p_presets
            ],
            "Level2": 1000,
            "Level3": 3000
        }
        masterylist.push(mastery);
    }

    public createTraderWeaponPreset(p_id, p_parent, i_id, i_trader, i_price, i_currency, i_loyalty,tables: IDatabaseTables)
    {
        const traderWeaponPreset = tables.globals.ItemPresets[p_id]._items;
        //Add trader preset stock
        traderWeaponPreset[0] = (
            {
                "_id": p_parent,
                "_tpl": i_id,
                "parentId": "hideout",
                "slotId": "hideout",
                "upd":
            {
                "UnlimitedCount": true,
                "StackObjectsCount": 999999
            }
            });
        //Add preset to trader
        tables.traders[i_trader].assort.items.push(...traderWeaponPreset)
        //Add price to preset
        tables.traders[i_trader].assort.barter_scheme[p_parent] = [
            [
                {
                    "count": i_price,
                    "_tpl": i_currency
                }]
        ]
        //Add Loyalty Level to preset
        tables.traders[i_trader].assort.loyal_level_items[p_parent] = i_loyalty;
    }
}