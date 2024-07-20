/* eslint-disable @typescript-eslint/naming-convention */
import type { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { FluentAssortConstructor } from "./fluentTraderAssortCreator";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { Grid, ITemplateItem } from "@spt/models/eft/common/tables/ITemplateItem";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { Money } from "@spt/models/enums/Money";
import { Item, Upd } from "@spt/models/eft/common/tables/IItem";
import path from "path";
import { IInventoryConfig, RewardDetails } from "@spt/models/spt/config/IInventoryConfig";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { IItemConfig } from "@spt/models/spt/config/IItemConfig";


export type MainProperties = {
    serverDatabaseTables: IDatabaseTables;
    container: DependencyContainer;
    jsonUtil: JsonUtil;
    objectIdGenerator: ObjectIdGenerator;
    fluentAssortCreator: FluentAssortConstructor;
    pes7Lib: Pes7Lib;
}
export interface ICustomItem 
{
    itemId?: string;
    main: (mainProperties: MainProperties) => void
}

export interface ISHCustomWeapon
{
    itemId?: string;
    createWeapon: (id: string, pes7Lib: Pes7Lib) => void
}

export interface ICryptoCoin
{
    itemId: string;
    count: number;
}

export interface ICustomPart extends ICustomItem
{
}

export interface ICustomWeapon
{
    parts?: Array<ICustomPart>
    main: (fluentAssortCreator: FluentAssortConstructor) => void
}

export type CreateItemDTO = {
    newId: string;
    cloneId: string;
    parentId: string;
    newName: string;
    newShortName: string;
    newDescription: string;
    newCategory: string;
    newPrice: number;
    newProps?: object;
    hasPrice?: boolean;
    newBackgroundColor?: string;
    newRigLayoutName?: string,
}

export type CreateItemOfferDTO = {
    itemId: string;
    itemPrice: number;
    itemCurrency: string;
    itemLoyalty: number;
    traderId?: string;
}

export enum CustomMoney 
    {
    HRYVNIA = "UAH"
}

export const NewMoney = {
    ...Money,
    ...CustomMoney
};

export class Pes7Lib 
{
    private logger: ILogger;
    private customitem: CustomItemService;
    private container: DependencyContainer;
    private jsonUtil: JsonUtil;
    private fluentAssortCreator: FluentAssortConstructor;
    private invConfig: IInventoryConfig;
    private configServer: ConfigServer;

    public databesTables: IDatabaseTables;
    public traderId: string;
    public weaponPreparer: WeaponPreparer;
    public objectIdGenerator: ObjectIdGenerator;

    constructor(container: DependencyContainer, fluentAssortCreator: FluentAssortConstructor, traderId: string) 
    {
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.customitem = container.resolve<CustomItemService>("CustomItemService");
        this.databesTables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        this.jsonUtil = container.resolve<JsonUtil>("JsonUtil");
        this.container = container;
        this.fluentAssortCreator = fluentAssortCreator;
        this.objectIdGenerator = new ObjectIdGenerator();
        this.traderId = traderId;
        this.weaponPreparer = new WeaponPreparer(); 
        this.configServer = container.resolve<ConfigServer>("ConfigServer");
        this.invConfig = this.configServer.getConfig<IInventoryConfig>(ConfigTypes.INVENTORY);
    }

    public processItemsArray(customItems: Array<ICustomItem>): void
    {
        for (const item of customItems)
        {
            item.main({serverDatabaseTables: this.databesTables, container: this.container, jsonUtil: this.jsonUtil,
                objectIdGenerator: this.objectIdGenerator, fluentAssortCreator: this.fluentAssortCreator, pes7Lib: this});
        }
    }

    public processWeaponArray(customItems: Array<ICustomWeapon>): void
    {
        for (const item of customItems)
        {
            if (item.parts)
            {
                for (const part of item.parts)
                {
                    part.main({serverDatabaseTables: this.databesTables, container: this.container, jsonUtil: this.jsonUtil,
                        objectIdGenerator: this.objectIdGenerator, fluentAssortCreator: this.fluentAssortCreator, pes7Lib: this})
                }
            }
            item.main(this.fluentAssortCreator);
        }
    }

    
    public createItem(input: CreateItemDTO): Pes7Lib
    {
        const { newId, cloneId, parentId, newName,
            newShortName, newDescription, newCategory,
            newPrice, newProps, hasPrice = true, newBackgroundColor, 
            newRigLayoutName } = input;

        let overrideProperties = newProps || {};
        if (newBackgroundColor) 
        {
            overrideProperties = {...overrideProperties, BackgroundColor: newBackgroundColor}
        }

        if (newRigLayoutName)
        {
            overrideProperties = {...overrideProperties, RigLayoutName: newRigLayoutName}
        }

        overrideProperties["Name"] = newName;
        overrideProperties["ShortName"] = newShortName;
        overrideProperties["Description"] = newDescription;
        const newItem: NewItemFromCloneDetails = {
            itemTplToClone: cloneId,
            overrideProperties,
            parentId: parentId,
            newId: newId,
            fleaPriceRoubles: hasPrice ? newPrice : 0,
            handbookPriceRoubles: hasPrice ? newPrice : 0,
            handbookParentId: newCategory,
            locales: {
                "en": {
                    name: newName,
                    shortName: newShortName,
                    description: newDescription
                }
            }
        };

        this.customitem.createItemFromClone(newItem);
        return this;
    }

    public createItemOffer(input: CreateItemOfferDTO, hasPrice: boolean = true, customCount: number = 999999): Pes7Lib
    {
        const { itemId, traderId, itemPrice, itemCurrency, itemLoyalty } = input;

        let itemTrader = this.traderId;
        if (traderId)
        {
            itemTrader = traderId;
        }

        const traders = this.databesTables.traders;
        //Add item to trader stock
        traders[itemTrader].assort.items.push(
            {
                "_id": itemId,
                "_tpl": itemId,
                "parentId": "hideout",
                "slotId": "hideout",
                "upd":
                {
                    "UnlimitedCount": true,
                    "StackObjectsCount": customCount
                }
            }
        );
        //Add price to item
        if (hasPrice)
        {
            traders[itemTrader].assort.barter_scheme[itemId] = [
                [
                    {
                        "count": itemPrice,
                        "_tpl": itemCurrency
                    }
                ]
            ];
        }
        //Add Loyalty Level to item
        traders[itemTrader].assort.loyal_level_items[itemId] = itemLoyalty;

        return this;
    }

    public addWeaponBasedOnFilter(newId: string, itemToFilter: string): Pes7Lib 
    {
        const tables = this.databesTables;
        const items = tables.templates.items;

        for (const loopId in items)
        {
            const item = tables.templates.items[loopId];
            if (item._props.Slots !== undefined && item._props.Slots.length > 0) 
            {
                for (let slot = 0; slot < item._props.Slots.length; slot++) 
                {
                    if (item._props.Slots[slot]._props != undefined && item._props.Slots[slot]._props.filters != undefined) 
                    {
                        if (item._props.Slots[slot]._props.filters[0].Filter.includes(itemToFilter)) 
                        {
                            item._props.Slots[slot]._props.filters[0].Filter.push(newId);
                        }
                    }
                }
            }
        }

        return this;
    }

    public prepareMagazine(maxCount: number, itemId: string, filtersFromId: string): Pes7Lib
    {
        const items = this.databesTables.templates.items;
        items[itemId]._props.Cartridges[0]._max_count = maxCount;
        items[itemId]._props.Cartridges[0]._props.filters[0] = items[filtersFromId]._props.Cartridges[0]._props.filters[0];
        return this;
    }
    
    public changeContainerSize(containerId: string, cellsH: number, cellsV: number): Pes7Lib
    {
        const items = this.databesTables.templates.items;
        items[containerId]._props.Grids[0]._props.cellsH = cellsH;
        items[containerId]._props.Grids[0]._props.cellsV = cellsV;
        return this;
    }

    public changePrefab(itemId: string, prefabPath: string): Pes7Lib
    {
        const items = this.databesTables.templates.items;
        items[itemId]._props.Prefab.path = prefabPath;
        return this;
    }

    public setGridsArray(itemId: string, grids: Grid[]): Pes7Lib
    {
        const items = this.databesTables.templates.items;
        items[itemId]._props.Grids = grids;
        return this;
    }

    public log(message: string, color: LogTextColor = LogTextColor.GREEN, module?: string): Pes7Lib
    {
        this.logger.log(`Sasha Himik${module ? `[${module}]` : ""}: ${message}`, color);
        return this;
    }

    public error(message: string, module?: string): Pes7Lib
    {
        this.logger.error(`Sasha Himik${module ? `[${module}]` : ""}: ${message}`);
        return this;
    }

    public getCurrentDirectory(): string
    {
        return path.dirname(__filename)
    }
    public getItemsByParent(parentId: string): Record<string, number>
    {
        return this.getAllFixedItemsForCase((item)=> item._parent !== parentId);
    }
    public getAllFixedItemsForCase(additionalCondition?: (item: ITemplateItem)=>boolean): Record<string, number>
    {
        const blacklist = [
            "54490a4d4bdc2dbc018b4573",
            "544a3d0a4bdc2d1b388b4567",
            "55d617094bdc2d89028b4568",
            "590de52486f774226a0c24c2",
            "5648b62b4bdc2d9d488b4585",
            "544a3f024bdc2d1d388b4568",
            "590de4a286f77423d9312a32",
            "5751961824597720a31c09ac",
            "63b35f281745dd52341e5da7",
            "5996f6cb86f774678763a6ca",
            "5996f6d686f77467977ba6cc",
            "5943d9c186f7745a13413ac9",
            "5cdeb229d7f00c000e7ce174",
            "5996f6fc86f7745e585b4de3",
            "5cde8864d7f00c0010373be1",
            "5d2f2ab648f03550091993ca",
            "5ae083b25acfc4001a5fc702",
            "5e85aac65505fa48730d8af2",
            "58ac60eb86f77401897560ff",
            "59e8936686f77467ce798647",
            "56e294cdd2720b603a8b4575",
            "5d53f4b7a4b936793d58c780",
            "6241c316234b593b5676b637",
            "5e99735686f7744bfc4af32c",
            "62811d61578c54356d6d67ea",
            "6281214c1d5df4475f46a33a",
            "6281215b4fa03b6b6c35dc6c",
            "628121651d5df4475f46a33c",
            "628120415631d45211793c99",
            "628120f210e26c1f344e6558",
            "5ede47641cf3836a88318df1",
            "5d70e500a4b9364de70d38ce",
            "624c0570c9b794431568f5d5",
            "624c09cfbc2e27219346d955",
            "624c09da2cec124eb67c1046",
            "624c09e49b98e019a3315b66",
            "5cffa483d7ad1a049e54ef1c",
            "5f647fd3f6e4ab66c82faed6",
            "5671446a4bdc2d97058b4569",
            "57518f7724597720a31c09ab",
            "61a4cda622af7f4f6a3ce617",
            "6087e570b998180e9f76dc24",
            "5efdafc1e70b5e33f86de058",
            "63dbd45917fff4dee40fe16e",
            "648c1a965043c4052a4f8505",
            "5ae089fb5acfc408fb13989b",
            "6241c2c2117ad530666a5108",
            "5580239d4bdc2de7118b4583"
        ];
        const rewardItemBlacklist = [
            "58ac60eb86f77401897560ff",
            "5e997f0b86f7741ac73993e2",
            "5b44abe986f774283e2e3512",
            "5e99711486f7744bfc4af328",
            "5e99735686f7744bfc4af32c",
            "6087e570b998180e9f76dc24",
            "5d52d479a4b936793d58c76b",
            "5e85aac65505fa48730d8af2",
            "63495c500c297e20065a08b1",
            "5cde8864d7f00c0010373be1",
            "5b3b713c5acfc4330140bd8d",
            "60c080eb991ac167ad1c3ad4",
            "6389c7f115805221fb410466",
            "64d0b40fbe2eed70e254e2d4",
            "6389c88b33a719183c7f63b6",
            "57cd379a24597778e7682ecf",
            "5fc64ea372b0dd78d51159dc",
            "5c0e842486f77443a74d2976",
            "5c0e874186f7745dc7616606",
            "5c0e541586f7747fa54205c9",
            "63626d904aa74b8fe30ab426",
            "6275303a9f372d6ea97f9ec7",
            "628bc7fb408e2b2e9c0801b1",
            "5ede4739e0350d05467f73e8",
            "5ede47405b097655935d7d16",
            "5ede474b0c226a66f5402622",
            "5ede475339ee016e8c534742",
            "5ede475b549eed7c6d5c18fb",
            "62e910aaf957f2915e0a5e36",
            "619bc61e86e01e16f839a999",
            "619bddc6c9546643a67df6ee",
            "6241c316234b593b5676b637",
            "5d70e500a4b9364de70d38ce",
            "619bde3dc9546643a67df6f2",
            "619bdeb986e01e16f839a99e",
            "619bddffc9546643a67df6f0",
            "619bdf9cc9546643a67df6f8",
            "63a0b2eabea67a6d93009e52",
            "5d2f2ab648f03550091993ca",
            "614451b71e5874611e2c7ae5"
        ];
        const bossItems = [
            "6275303a9f372d6ea97f9ec7",
            "62a61bbf8ec41a51b34758d2",
            "628e4dd1f477aa12234918aa",
            "628b9784bcf6e2659e09b8a2",
            "628bc7fb408e2b2e9c0801b1",
            "628baf0b967de16aab5a4f36",
            "62963c18dbc8ab5f0d382d0b",
            "628b9c7d45122232a872358f",
            "5fc64ea372b0dd78d51159dc",
            "64ca3d3954fc657e230529cc",
            "64637076203536ad5600c990",
            "5c0e874186f7745dc7616606",
            "5c0e842486f77443a74d2976",
            "5c0e541586f7747fa54205c9",
            "5b3b713c5acfc4330140bd8d",
            "5e997f0b86f7741ac73993e2",
            "5d08d21286f774736e7c94c3",
            "6087e570b998180e9f76dc24",
            "60a7ad2a2198820d95707a2e",
            "60a7ad3a0c5cb24b0134664a",
            "60a7acf20c5cb24b01346648",
            "636270263f2495c26f00b007",
            "63626d904aa74b8fe30ab426",
            "63611865ba5b90db0c0399d1",
            "5eff09cd30a7dc22fd1ddfed",
            "5efde6b4f5448336730dbd61",
            "609e860ebd219504d8507525",
            "63a0b208f444d32d6f03ea1e",
            "63495c500c297e20065a08b1",
            "6530e8587cbfc1e309011e37",
            "6531119b9afebff7ff0a1769",
            "6540d2162ae6d96b540afcaf",
            "5e99735686f7744bfc4af32c",
            "5e99711486f7744bfc4af328",
            "61b9e1aaef9a1b5d6a79899a",
            "5a43943586f77416ad2f06e2",
            "5a43957686f7742a2c2f11b0",
            "5c1a1e3f2e221602b66cc4c2"
        ];
        if (!additionalCondition) 
        {
            additionalCondition = () => false;
        }

        return Object.keys(this.databesTables.templates.items).reduce((acc, key) => 
        {

            const item = this.databesTables.templates.items[key];


            if (item._props?.IsUngivable === true 
                            || item._props?.IsUnbuyable === true 
                            || item._props?.IsUnsaleable === true 
                            || item._props?.QuestItem === true 
                            || !item._props?.Height
                            || !item._props?.Width
                            || item._id === "5d1b33a686f7742523398398"
                            || item._id === "5d1b376e86f774252519444e"
                            || item._id === "59f32bb586f774757e1e8442"
                            || item._id === "59f32c3b86f77472a31742f0"
                            || item._id === "5df8a6a186f77412640e2e80"
                            || item._id === "5df8a72c86f77412640e2e83"
                            || item._id === "5df8a77486f77412672a1e3f"
                            || item._id === "57864e4c24597754843f8723"
                            || item._id === "5939a00786f7742fe8132936"
                            || item._id === "5d650c3e815116009f6201d2"
                            || item._parent === "543be6674bdc2df1348b4569"
                            || item._parent === "5661632d4bdc2d903d8b456b"  // ammo box
                            || blacklist.includes(item._id)
                            || rewardItemBlacklist.includes(item._id)
                            || bossItems.includes(item._id)
                            || additionalCondition(item)
            )
            {
                return acc;
            }
            else 
            { 
                acc[item._id] = 1;
            }
        
            return acc;
        }, {});
    }

    public setRandomLootContainerLoot(lootContainerId: string, loot: RewardDetails): Pes7Lib
    {
        this.invConfig.randomLootContainers[lootContainerId] = loot;
        return this;
    }
}

export class ObjectIdGenerator 
{
    constructor() 
    {
    }

    public generateObjectId(): string 
    {
        const timestamp = Math.floor(new Date().getTime() / 1000).toString(16);
        return (
            timestamp +
          "xxxxxxxxxxxxxxxx"
              .replace(/[x]/g, function() 
              {
                  return ((Math.random() * 16) | 0).toString(16);
              })
              .toLowerCase()
        );
    }
}

export class WeaponPreparer 
{
    constructor() 
    {
    }

    public prepareRowToWeapon(arrayWeaponRow: Array<Item>, newWeaponId: string, upd?: Upd): Item[]
    {
        const rootElement = arrayWeaponRow[0];
        const rootElementId = rootElement._id;
        rootElement._id = newWeaponId;
        rootElement.upd = {...rootElement.upd, ...upd};

        for (const element of arrayWeaponRow)
        {
            if (element.parentId === rootElementId)
            {
                element.parentId = newWeaponId;
            }
        }

        return arrayWeaponRow;
    }
}

export enum CategoriesEnum 
    {
    Barter = "5b47574386f77428ca22b33e", // Barter items
    Others = "5b47574386f77428ca22b2f4", // Others
    Building = "5b47574386f77428ca22b2ee", // Building materials
    Electronics = "5b47574386f77428ca22b2ef", // Electronics
    EnergyElements = "5b47574386f77428ca22b2ed", // Energy elements
    FlammableMaterials = "5b47574386f77428ca22b2f2", // Flammable materials
    HouseholdMaterials = "5b47574386f77428ca22b2f0", // Household materials
    MedicalSupplies = "5b47574386f77428ca22b2f3", // Medical supplies
    Tools = "5b47574386f77428ca22b2f6", // Tools
    Valuables = "5b47574386f77428ca22b2f1", // Valuables
    Gear = "5b47574386f77428ca22b33f", // Gear
    Backpacks = "5b5f6f6c86f774093f2ecf0b", // Backpacks
    BodyArmor = "5b5f701386f774093f2ecf0f", // Body armor
    Eyewear = "5b47574386f77428ca22b331", // Eyewear
    Facecovers = "5b47574386f77428ca22b32f", // Facecovers
    GearComponents = "5b5f704686f77447ec5d76d7", // Gear components
    Headgear = "5b47574386f77428ca22b330", // Headgear
    Headsets = "5b5f6f3c86f774094242ef87", // Headsets
    SecureContainers = "5b5f6fd286f774093f2ecf0d", // Secure containers
    StorageContainers = "5b5f6fa186f77409407a7eb7", // Storage containers
    TacticalRigs = "5b5f6f8786f77447ed563642", // Tactical rigs
    WeaponPartsAndMods = "5b5f71a686f77447ed5636ab", // Weapon parts & mods
    FunctionalMods = "5b5f71b386f774093f2ecf11", // Functional mods
    AuxiliaryParts = "5b5f74cc86f77447ec5d770a", // Auxiliary parts
    Bipods = "5b5f71c186f77409407a7ec0", // Bipods
    Foregrips = "5b5f71de86f774093f2ecf13", // Foregrips
    LightAndLaserDevices = "5b5f736886f774094242f193", // Light & laser devices
    Flashlights = "5b5f73ab86f774094242f195", // Flashlights
    LaserTargetPointers = "5b5f73c486f77447ec5d7704", // Laser target pointers
    TacticalComboDevices = "5b5f737886f774093e6cb4fb", // Tactical combo devices
    MuzzleDevices = "5b5f724186f77447ed5636ad", // Muzzle devices
    FlashhidersAndBrakes = "5b5f724c86f774093f2ecf15", // Flashhiders & brakes
    MuzzleAdapters = "5b5f72f786f77447ec5d7702", // Muzzle adapters
    Suppressors = "5b5f731a86f774093e6cb4f9", // Suppressors
    Sights = "5b5f73ec86f774093e6cb4fd", // Sights
    AssaultScopes = "5b5f740a86f77447ec5d7706", // Assault scopes
    Collimators = "5b5f742686f774093e6cb4ff", // Collimators
    CompactCollimators = "5b5f744786f774094242f197", // Compact collimators
    IronSights = "5b5f746686f77447ec5d7708", // Iron sights
    Optics = "5b5f748386f774093e6cb501", // Optics
    SpecialPurposeSights = "5b5f749986f774094242f199", // Special purpose sights
    GearMods = "5b5f750686f774093e6cb503", // Gear mods
    ChargingHandles = "5b5f751486f77447ec5d770c", // Charging handles
    Launchers = "5b5f752e86f774093e6cb505", // Launchers
    Magazines = "5b5f754a86f774094242f19b", // Magazines
    Mounts = "5b5f755f86f77447ec5d770e", // Mounts
    StocksAndChassis = "5b5f757486f774093e6cb507", // Stocks & chassis
    VitalMods = "5b5f75b986f77447ec5d7710", // Vital parts
    Barrels = "5b5f75c686f774094242f19f", // Barrels
    GasBlocks = "5b5f760586f774093e6cb509", // Gas blocks
    Handguards = "5b5f75e486f77447ec5d7712", // Handguards
    PistolGrips = "5b5f761f86f774094242f1a1", // Pistol grips
    ReceiversAndSlides = "5b5f764186f77447ec5d7714", // Receivers & slides
    Weapons = "5b5f78dc86f77409407a7f8e", // Weapons
    AssaultCarbines = "5b5f78e986f77447ed5636b1", // Assault carbines
    AssaultRifles = "5b5f78fc86f77409407a7f90", // Assault rifles
    BoltActionRifles = "5b5f798886f77447ed5636b5", // Bolt-action rifles
    GrenadeLaunchers = "5b5f79d186f774093f2ed3c2", // Grenade launchers
    MachineGuns = "5b5f79a486f77409407a7f94", // Machine guns
    MarksmanRifles = "5b5f791486f774093f2ed3be", // Marksman rifles
    MeleeWeapons = "5b5f7a0886f77409407a7f96", // Melee weapons
    Pistols = "5b5f792486f77447ed5636b3", // Pistols
    SMGs = "5b5f796a86f774093f2ed3c0", // SMGs
    Shotguns = "5b5f794b86f77409407a7f92", // Shotguns
    SpecialWeapons = "5b5f79eb86f77447ed5636b7", // Special weapons
    Throwables = "5b5f7a2386f774093f2ed3c4", // Throwables
    Ammo = "5b47574386f77428ca22b346", // Ammo
    AmmoPacks = "5b47574386f77428ca22b33c", // Ammo packs
    Rounds = "5b47574386f77428ca22b33b", // Rounds
    Provisions = "5b47574386f77428ca22b340", // Provisions
    Drinks = "5b47574386f77428ca22b335", // Drinks
    Food = "5b47574386f77428ca22b336", // Food
    Medication = "5b47574386f77428ca22b344", // Medication
    Injectors = "5b47574386f77428ca22b33a", // Injectors
    InjuryTreatment = "5b47574386f77428ca22b339", // Injury treatment
    Medkits = "5b47574386f77428ca22b338", // Medkits
    Pills = "5b47574386f77428ca22b337", // Pills
    Keys = "5b47574386f77428ca22b342", // Keys
    ElectronicKeys = "5c518ed586f774119a772aee", // Electronic keys
    MechanicalKeys = "5c518ec986f7743b68682ce2", // Mechanical keys
    InfoItems = "5b47574386f77428ca22b341", // Info items
    SpecialEquipment = "5b47574386f77428ca22b345", // Special equipment
    Maps = "5b47574386f77428ca22b343", // Maps
    Money = "5b5f78b786f77447ed5636af" // Money
}