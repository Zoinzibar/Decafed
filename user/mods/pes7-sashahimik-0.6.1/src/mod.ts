import { Item } from "./../types/models/eft/trade/IProcessSellTradeRequestData.d";
import { Blacklist } from "./../types/models/spt/config/IRagfairConfig.d";
import fs from "fs";
import { WeightedRandomHelper } from "@spt/helpers/WeightedRandomHelper";
import { InventoryHelper } from "@spt/helpers/InventoryHelper";
import { StaticRouterModService } from "@spt/services/mod/staticRouter/StaticRouterModService";
import { DependencyContainer } from "tsyringe";

// SPT types
import { IPreAkiLoadMod } from "@spt/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { PreAkiModLoader } from "@spt/loaders/PreAkiModLoader";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ImageRouter } from "@spt/routers/ImageRouter";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { ITraderConfig } from "@spt/models/spt/config/ITraderConfig";
import { IRagfairConfig } from "@spt/models/spt/config/IRagfairConfig";
import { JsonUtil } from "@spt/utils/JsonUtil";

// New trader settings
import * as baseJson from "../db/base.json";
import * as assoryJson from "../db/assort.json";
import * as dialogueJson from "../db/dialogue.json";
import { TraderHelper } from "./traderHelpers";
import { FluentAssortConstructor, FluentAssortConstructor as FluentAssortCreator } from "./fluentTraderAssortCreator";
import { Money } from "@spt/models/enums/Money";
import { Traders } from "@spt/models/enums/Traders";
import { HashUtil } from "@spt/utils/HashUtil";
import { AssContainer } from "./items/safeContainers/AssContainer";

import packageJson from "../package.json"
import { Quests } from "./Quests";
import { LongContainer } from "./items/safeContainers/LongContainer";
import { FixedWoodContainer } from "./items/safeContainers/FixedWoodContainer";
import { BrokenWoodContainer } from "./items/safeContainers/BrokenWoodContainer";
import { Val90Magazine } from "./magazines/Val90Magazine";
import { CustomWeapons } from "./weapons/CustomWeapons";
import { Toz15Magazine } from "./magazines/Toz15Magazine";
import { Ben25Magazine } from "./magazines/Ben25Magazine";
import { CylinderMc255Magazine } from "./magazines/CylinderMc255Magazine";
import { P90M120 } from "./magazines/P90M120";
import { P90M200 } from "./magazines/P90M200";
import { SKSM100 } from "./magazines/7.62x39_100InternalSKS";
import { SaigaInternal100 } from "./magazines/12x70SaigaMag";
import { SaigaSKSInternal100 } from "./magazines/12x70SaigaSKSMag";
import { CustomAmmos } from "./ammo/CustomAmmos";
import { CustomInjectors } from "./injectors/CustomInjectors";
import { RPK500Magazine } from "./magazines/RPK500Magazine";
import { BL31_5x45x39_90Magazine } from "./magazines/BL31_5x45x39_90Magazine";
import { ShurikenContainer } from "./items/safeContainers/ShurikenContainer";
import { BarrelContainer } from "./items/storageContainers/BarrelContainer";
import { UltraTechContainer } from "./items/storageContainers/UltraTechContainer";
import { Hrn } from "./currency/Hrn";
import { IInventoryConfig } from "@spt/models/spt/config/IInventoryConfig";
import { BobbleHeadContainer } from "./items/storageContainers/BobbleHeadContainer";
import { AmmoBoxContainer } from "./items/storageContainers/AmmoBoxContainer";
import { PL15_45Magazine } from "./magazines/PL15_45Magazine";

// import { RandomLootBox } from "./lootBox/Random.lootbox";
import { SkyfiLootBox } from "./lootBox/Skyfi.lootbox";
import { FoodLargeBox } from "./lootBox/FoodLarge.lootbox";
import { FoodMediumBox } from "./lootBox/FoodMedium.lootbox";
import { FoodSmallBox } from "./lootBox/FoodSmall.lootbox";
import { GrenadeBox } from "./lootBox/Grenage.lootbox";
import { ArmorEquipmentBox } from "./lootBox/ArmorEquipment.lootbox";
import { ArmorEquipmentLargeBox } from "./lootBox/ArmorEquipmentLarge.lootbox";
import { ChallangeGunBox } from "./lootBox/ChallangeGun.lootbox";
import { ChallangePistolBox } from "./lootBox/ChallangePistol.lootbox";
import { ChallangeRandomGunlBox } from "./lootBox/ChallangeRandomGun.lootbox";
import { ChallangeShotgunBox } from "./lootBox/ChallangeShotgun.lootbox";
import { ChallangeSniperRifleBox } from "./lootBox/ChallangeSniperRifle.lootbox";
import { LootBatterySmallBox } from "./lootBox/LootBatterySmall.lootbox";
import { LootBuildingMaterialSmallBox } from "./lootBox/LootBuildingMaterialSmall.lootbox";
import { LootElectronicsSmallBox } from "./lootBox/LootElectronicsSmall.lootbox";
import { LootHouseholdGoodsSmallBox } from "./lootBox/LootHouseholdGoods.lootbox";
import { LootInfoSmallBox } from "./lootBox/LootInfoSmall.lootbox";
import { LootJewelrySmallBox } from "./lootBox/LootJewelry.lootbox";
import { LootLargeBox } from "./lootBox/LootLarge.lootbox";
import { LootLubricantSmallBox } from "./lootBox/LootLubricantSmall.lootbox";
import { LootMedicalSuppliesSmallBox } from "./lootBox/LootMedicalSupplies.lootbox";
import { LootMediumBox } from "./lootBox/LootMedium.lootbox";
import { LootOtherSmallBox } from "./lootBox/LootOtherSmall.lootbox";
import { LootSmallBox } from "./lootBox/LootSmall.lootbox";
import { LootToolSmallBox } from "./lootBox/LootToolSmall.lootbox";
import { MedicineLargeBox } from "./lootBox/MedicineLarge.lootbox";
import { MedicineMediumBox } from "./lootBox/MedicineMedium.lootbox";
import { MedicineSmallBox } from "./lootBox/MedicineSmall.lootbox";
import { RandomContainersBox1 } from "./lootBox/RandomContainers1.lootbox";
import { RandomContainersBox2 } from "./lootBox/RandomContainers2.lootbox";
import { RandomContainersBox3 } from "./lootBox/RandomContainers3.lootbox";
import { RandomContainersBox4 } from "./lootBox/RandomContainers4.lootbox";
import { RandomContainersBox5 } from "./lootBox/RandomContainers5.lootbox";
import { SpecialGrenadeBox } from "./lootBox/SpecialGrenade.lootbox";
import { StimulatorsMediumBox } from "./lootBox/StimulatorsMedium.lootbox";
import { StimulatorsSmallBox } from "./lootBox/StimulatorsSmall.lootbox";
import { RandomLarge } from "./lootBox/RandomLarge.lootbox";
import { RandomMedium } from "./lootBox/RandomMedium.lootbox";
import { RandomSmall } from "./lootBox/RandomSmall.lootbox";


import { SaveServer } from "@spt/servers/SaveServer";

import * as config from "../config/config.json";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { BitCoinFlashDriveContainer } from "./items/storageContainers/BitCoinFlashDriveContainer";
import { Nvidia3060Ti } from "./items/treasures/nvidia3060ti";
import { Pes7Lib } from "./Pes7Lib";
import { PlCustomPikalo } from "./weaponParts/PL 15/plCustomPikalo";
import { CustomSKSPart } from "./weaponParts/SKS/SKSPart";
import { InternalSaigaPart } from "./weaponParts/Saiga/InternalSaigaPart";
import { CustomSaigaSKSPart } from "./weaponParts/SKS/SaigaSKSPart";
import { S9Miner } from "./items/crypto/s9";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { EventOutputHolder } from "@spt/routers/EventOutputHolder";
import { ProfileHelper } from "@spt/helpers/ProfileHelper";
import { logCrypto, updateMiners, updateCryptoPrices } from "./logic/crypto";
import { M203 } from "./underBarrelGrenadeLauncher/M203";
import { ETH3 } from "./items/treasures/ethercoin";
import { TRC700000 } from "./items/treasures/terracoin";
import { TON1000 } from "./items/treasures/toncoin";
import { CustomSVastRoot } from "./weaponParts/SV/CustomSVastRoot";
import { CustomSVastMagazine } from "./weaponParts/SV/CustomSVastMagazine";
import { SVAST } from "./weapons/SV/SV-AST";
import { DependencyChecker } from "./logic/dependancyChecker/dependancyChecker";
import { MPPVSH } from "./items/rigs/mppvsh";
import { BigBroBackPack } from "./items/backpacks/bigbro.backpack";
import { ItemsBlacklist } from "@spt/models/eft/common/tables/IRepeatableQuests";
import { IItemConfig } from "@spt/models/spt/config/IItemConfig";
import { S19Miner } from "./items/crypto/s19";
import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
const version = packageJson.version;

class SampleTrader implements IPreSptLoadMod, IPostDBLoadMod
{
    private mod: string
    private logger: ILogger
    private traderHelper: TraderHelper
    private fluentAssortCreator: FluentAssortCreator
    private fluentTraderAssortHeper: FluentAssortConstructor
    private pes7Lib: Pes7Lib
    private saveServer: SaveServer;
    private inventoryHelper: InventoryHelper;
    private itemHelper: ItemHelper;
    private weightedRandomHelper: WeightedRandomHelper;
    private eventOutputHolder: EventOutputHolder;
    private profileHelper: ProfileHelper;

    constructor() 
    {
        this.mod = `pes7-sashahimik-${version}`; // Set name of mod so we can log it to console later
    }

    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    public preSptLoad(container: DependencyContainer): void
    {
        // Get a logger
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);

        // Get SPT code/data we need later
        const pathreSptModLoader: PreSptModLoader = container.resolve<PreSptModLoader>("PreSptModLoader");
        const imageRouter: ImageRouter = container.resolve<ImageRouter>("ImageRouter");
        const hashUtil: HashUtil = container.resolve<HashUtil>("HashUtil");
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig: ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig<IRagfairConfig>(ConfigTypes.RAGFAIR);
        const staticRouterModService = container.resolve<StaticRouterModService>("StaticRouterModService");

        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.traderHelper = new TraderHelper();
        this.fluentAssortCreator = new FluentAssortCreator(hashUtil, this.logger);
        this.traderHelper.registerProfileImage(baseJson, this.mod, pathreSptModLoader, imageRouter, "himik.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, 3600, 4000);
        this.saveServer = container.resolve<SaveServer>("SaveServer");
        this.inventoryHelper = container.resolve<InventoryHelper>("InventoryHelper");
        this.itemHelper = container.resolve<ItemHelper>("ItemHelper");
        this.weightedRandomHelper = container.resolve<WeightedRandomHelper>("WeightedRandomHelper");
        this.eventOutputHolder = container.resolve<EventOutputHolder>("EventOutputHolder");
        this.profileHelper = container.resolve<ProfileHelper>("ProfileHelper");

        // Add trader to trader enum
        Traders[baseJson._id] = baseJson._id;

        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;

        staticRouterModService.registerStaticRouter(
            "itemMoved",
            [
                {
                    url: "/client/game/profile/items/moving",
                    action: async (url, info, sessionId, output) =>
                    {
                        this.updateLootBoxes(
                            container
                        );
                        return output;
                    }
                }
            ],
            "spt"
        );

        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    public rand(min: number, max: number)
    {
        return Math.floor(Math.random() * max) + min
    }
    public updateLootBoxes (
        container: DependencyContainer
    ): void 
    {
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const invConfig = configServer.getConfig<IInventoryConfig>(ConfigTypes.INVENTORY);

        // invConfig.randomLootContainers["SHLootBoxTest"] = {...invConfig.randomLootContainers["SHLootBoxTest"], rewardCount: this.rand(1,3)};
        invConfig.randomLootContainers["shskyfiLootBox"] = {...invConfig.randomLootContainers["shskyfiLootBox"], rewardCount: this.rand(1,3)};

        invConfig.randomLootContainers["shrandomContainersBox1"] = {...invConfig.randomLootContainers["shrandomContainersBox1"], rewardCount: this.rand(3,8)};
        invConfig.randomLootContainers["shrandomContainersBox2"] = {...invConfig.randomLootContainers["shrandomContainersBox2"], rewardCount: this.rand(3,8)};
        invConfig.randomLootContainers["shrandomContainersBox3"] = {...invConfig.randomLootContainers["shrandomContainersBox3"], rewardCount: this.rand(3,8)};
        invConfig.randomLootContainers["shrandomContainersBox4"] = {...invConfig.randomLootContainers["shrandomContainersBox4"], rewardCount: this.rand(3,8)};
        invConfig.randomLootContainers["shrandomContainersBox5"] = {...invConfig.randomLootContainers["shrandomContainersBox5"], rewardCount: this.rand(3,8)};
        invConfig.randomLootContainers["shrandomLarge"] = {...invConfig.randomLootContainers["shrandomLarge"], rewardCount: this.rand(3,18)};
        invConfig.randomLootContainers["shrandomMedium"] = {...invConfig.randomLootContainers["shrandomMedium"], rewardCount: this.rand(2,9)};
        invConfig.randomLootContainers["shrandomSmall"] = {...invConfig.randomLootContainers["shrandomSmall"], rewardCount: this.rand(1,4)};

        invConfig.randomLootContainers["shArmorEquipmentBox"] = {...invConfig.randomLootContainers["shArmorEquipmentBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shArmorEquipmentLargeBox"] = {...invConfig.randomLootContainers["shArmorEquipmentLargeBox"], rewardCount: this.rand(2,4)};
        invConfig.randomLootContainers["shChallangeGunBox"] = {...invConfig.randomLootContainers["shChallangeGunBox"], rewardCount: this.rand(1,1)};
        invConfig.randomLootContainers["shChallangePistolBox"] = {...invConfig.randomLootContainers["shChallangePistolBox"], rewardCount: this.rand(1,1)};
        invConfig.randomLootContainers["shChallangeRandomGunlBox"] = {...invConfig.randomLootContainers["shChallangeRandomGunlBox"], rewardCount: this.rand(1,1)};
        invConfig.randomLootContainers["shChallangeShotgunBox"] = {...invConfig.randomLootContainers["shChallangeShotgunBox"], rewardCount: this.rand(1,1)};
        invConfig.randomLootContainers["shChallangeSniperRifleBox"] = {...invConfig.randomLootContainers["shChallangeSniperRifleBox"], rewardCount: this.rand(1,1)};

        invConfig.randomLootContainers["shFoodLargeBox"] = {...invConfig.randomLootContainers["shFoodLargeBox"], rewardCount: this.rand(5,21)};
        invConfig.randomLootContainers["shFoodMediumBox"] = {...invConfig.randomLootContainers["shFoodMediumBox"], rewardCount: this.rand(3,6)};
        invConfig.randomLootContainers["shFoodSmallBox"] = {...invConfig.randomLootContainers["shFoodSmallBox"], rewardCount: this.rand(1,2)};

        invConfig.randomLootContainers["shGrenadeBox"] = {...invConfig.randomLootContainers["shGrenadeBox"], rewardCount: this.rand(2,6)};
        invConfig.randomLootContainers["shSpecialGrenadeBox"] = {...invConfig.randomLootContainers["shSpecialGrenadeBox"], rewardCount: this.rand(4,12)};

        invConfig.randomLootContainers["shLootBatterySmallBox"] = {...invConfig.randomLootContainers["shLootBatterySmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootBuildingMaterialSmallBox"] = {...invConfig.randomLootContainers["shLootBuildingMaterialSmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootElectronicsSmallBox"] = {...invConfig.randomLootContainers["shLootElectronicsSmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootHouseholdGoodsSmallBox"] = {...invConfig.randomLootContainers["shLootHouseholdGoodsSmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootInfoSmallBox"] = {...invConfig.randomLootContainers["shLootInfoSmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootJewelrySmallBox"] = {...invConfig.randomLootContainers["shLootJewelrySmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootLargeBox"] = {...invConfig.randomLootContainers["shLootLargeBox"], rewardCount: this.rand(5,21)};
        invConfig.randomLootContainers["shLootLubricantSmallBox"] = {...invConfig.randomLootContainers["shLootLubricantSmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootMedicalSuppliesSmallBox"] = {...invConfig.randomLootContainers["shLootMedicalSuppliesSmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootMediumBox"] = {...invConfig.randomLootContainers["shLootMediumBox"], rewardCount: this.rand(4,12)};
        invConfig.randomLootContainers["shLootOtherSmallBox"] = {...invConfig.randomLootContainers["shLootOtherSmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootToolSmallBox"] = {...invConfig.randomLootContainers["shLootToolSmallBox"], rewardCount: this.rand(1,2)};
        invConfig.randomLootContainers["shLootSmallBox"] = {...invConfig.randomLootContainers["shLootSmallBox"], rewardCount: this.rand(3,6)};

        invConfig.randomLootContainers["shMedicineLargeBox"] = {...invConfig.randomLootContainers["shMedicineLargeBox"], rewardCount: this.rand(5,21)};
        invConfig.randomLootContainers["shMedicineMediumBox"] = {...invConfig.randomLootContainers["shMedicineMediumBox"], rewardCount: this.rand(3,6)};
        invConfig.randomLootContainers["shMedicineSmallBox"] = {...invConfig.randomLootContainers["shMedicineSmallBox"], rewardCount: this.rand(1,2)};

        invConfig.randomLootContainers["shStimulatorsMediumBox"] = {...invConfig.randomLootContainers["shStimulatorsMediumBox"], rewardCount: this.rand(6,25)};
        invConfig.randomLootContainers["shStimulatorsSmallBox"] = {...invConfig.randomLootContainers["shStimulatorsSmallBox"], rewardCount: this.rand(3,8)};
    }
    
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    public postDBLoad(container: DependencyContainer): void
    {
        this.logger.debug(`[${this.mod}] postDb Loading... `);

        // Resolve SPT classes we'll use
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        // const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const jsonUtil: JsonUtil = container.resolve<JsonUtil>("JsonUtil");
        // const customItemService = container.resolve<CustomItemService>("CustomItemService");
        const preSptModLoader: PreSptModLoader = container.resolve<PreSptModLoader>("PreSptModLoader");

        const hashUtil: HashUtil = container.resolve<HashUtil>("HashUtil");
        this.fluentTraderAssortHeper = new FluentAssortConstructor(hashUtil, this.logger);
        this.pes7Lib = new Pes7Lib(container, this.fluentTraderAssortHeper, baseJson._id);

        const customWeapons = new CustomWeapons();
        const customAmmos = new CustomAmmos(); 
        const customInjectors = new CustomInjectors();
        
        // Get a reference to the database tables
        const tables = databaseServer.getTables();
        
        //config pricing
        baseJson.loyaltyLevels[0].buy_price_coef = config.Prices.L1.BuyPriceCoef;
        baseJson.loyaltyLevels[0].exchange_price_coef = config.Prices.L1.ExchangePriceCoef;

        baseJson.loyaltyLevels[1].buy_price_coef = config.Prices.L2.BuyPriceCoef;
        baseJson.loyaltyLevels[1].exchange_price_coef = config.Prices.L2.ExchangePriceCoef;

        // Add new trader to the trader dictionary in DatabaseServer - has no assorts (items) yet
        this.traderHelper.addTraderToDb(jsonUtil.deserialize(jsonUtil.serialize(assoryJson)), baseJson, jsonUtil.deserialize(jsonUtil.serialize(dialogueJson)), tables, jsonUtil);

        const modPath = `./${preSptModLoader.getModPath(this.mod)}`;

        // Containers
        if (config.Containers.Enabled) 
        {
            this.pes7Lib.processItemsArray([
                new AssContainer(),
                new LongContainer(),
                new BrokenWoodContainer(),
                new ShurikenContainer(),
                new BarrelContainer(),
                new UltraTechContainer(),
                new BobbleHeadContainer(),
                new AmmoBoxContainer(),
                new BitCoinFlashDriveContainer(),
                new FixedWoodContainer()
            ])
        }

        const createQuests = new Quests();
        createQuests.main(tables, container, jsonUtil, this.mod, modPath);

        // Add trader to locale file, ensures trader text shows properly on screen
        // WARNING: adds the same text to ALL locales (e.g. chinese/french/english)
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, baseJson.name, baseJson.nickname, baseJson.location, baseJson.description);

        //barter items for FixedWoodContainer
        this.traderHelper.addBarterItem(baseJson._id, tables, FixedWoodContainer.id, 4, "5e2af22086f7746d3f3c33fa")//poxeram
        this.traderHelper.addBarterItem(baseJson._id, tables, FixedWoodContainer.id, 2, "544fb3f34bdc2d03748b456a")//morfin
        this.traderHelper.addBarterItem(baseJson._id, tables, FixedWoodContainer.id, 2, "5d1c819a86f774771b0acd6c")//weapon parts
        this.traderHelper.addBarterItem(baseJson._id, tables, FixedWoodContainer.id, 2, "57347c5b245977448d35f6e1")//bolts
        this.traderHelper.addBarterItem(baseJson._id, tables, FixedWoodContainer.id, 2, "57347c77245977448d35f6e2")//гайки
        this.traderHelper.addBarterItem(baseJson._id, tables, FixedWoodContainer.id, 1, "brokenWoodContainer")//broken wood container

        //hrn
        this.pes7Lib.processItemsArray([new Hrn()]); // UAH

        // //Ammos
        if (config.Ammo.Enabled) 
        {
            this.pes7Lib.processItemsArray([
                { main: customAmmos.createPiranya12x70Ultra }, // 661532a385dc75aca8f639c8
                { main:customAmmos.createPiranya12x70UltraHack }, // 661532a385dc75aca8f639c9
                { main:customAmmos.createTrizda9x19Flash } // 665a27ddc015b807d409f1b2
            ])
        }

        if (config.Magazines.Enabled) 
        {
            this.pes7Lib.processItemsArray([
                new Val90Magazine(), //shVal90Magazine - 90 Val magazine
                new RPK500Magazine(), //shRPK500Magazine - 500 RPK magazine
                new BL31_5x45x39_90Magazine(), //shBL31_5x45x39_90Magazine
                new Toz15Magazine(), //shToz15Magazine - 15 Toz magazine
                new Ben25Magazine(), //shBenelli25Ultra - 25 Benelli magazine
                new CylinderMc255Magazine(), //shcylmc255 - 6 Cylinder magazine for mc255
                new P90M120(), //shP90M120 - P90 120 Magazine
                new P90M200(), //shP90M200 - P90 200 Magazine
                new PL15_45Magazine(), //shPL15_45Mag - PL 15 45 Mag
                new SaigaSKSInternal100(), //shSaigaSKS - SaigaSKS
                new SaigaInternal100(), //shSaiga12x76x100 - saigaInternal100
                new SKSM100() //shSKSM100 - SKSM100
            ])
        }
        
        if (config?.BackPacks?.Enabled) 
        {
            this.pes7Lib.processItemsArray([
                new BigBroBackPack() //shbigbrobackpack
            ])
        }
    

        if (config?.TacticalVests?.Enabled) 
        {
            this.pes7Lib.processItemsArray([
                new MPPVSH() //shmppvsh
            ])
        }

        if (config.Magazines.Enabled && config.CustomWeapons.Enabled)
        {
            this.pes7Lib.processWeaponArray([
                {parts: [
                    new PlCustomPikalo() // shCustomPikalo - PL 15 custom part
                ],
                main: (fluentTraderAssortHeper: FluentAssortConstructor) => // Pikalo PL15
                    fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createPikalo("sh-pikalo"))
                        .addStackCount(69)
                        .addBuyRestriction(7)
                        .addMoneyCost(Money.ROUBLES, 75000)
                        .addLoyaltyLevel(1)
                        .export(tables.traders[baseJson._id])},
                {parts: [
                    new CustomSKSPart() // shCustomSKSPart
                ],
                main: (fluentTraderAssortHeper: FluentAssortConstructor) => // SKS Auto
                    fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createFullAutoSKS("sh-SKS"))
                        .addStackCount(25)
                        .addBuyRestriction(2)
                        .addMoneyCost(Money.ROUBLES, 100000)
                        .addLoyaltyLevel(1)
                        .export(tables.traders[baseJson._id])},
                {parts: [
                    new InternalSaigaPart() // shCustomSaigaPart
                ],
                main: (fluentTraderAssortHeper: FluentAssortConstructor) => // Saiga Auto
                    fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createFullAutoSaiga("sh-Saiga"))
                        .addStackCount(25)
                        .addBuyRestriction(2)
                        .addMoneyCost(Money.ROUBLES, 150000)
                        .addLoyaltyLevel(1)
                        .export(tables.traders[baseJson._id])},
                {parts: [
                    new CustomSaigaSKSPart() // shCustomSaigaPart
                ],
                main: (fluentTraderAssortHeper: FluentAssortConstructor) => // Saiga ammo SKS auto
                    fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createFullAutoSaigaSKS("sh-SaigaSKS"))
                        .addStackCount(25)
                        .addBuyRestriction(2)
                        .addMoneyCost(Money.ROUBLES, 100000)
                        .addLoyaltyLevel(1)
                        .export(tables.traders[baseJson._id])},
                {
                    main: (fluentTraderAssortHeper: FluentAssortConstructor) => // As Val custom
                        fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createCustomVss("assVal_custom"))
                            .addStackCount(90)
                            .addBuyRestriction(1)
                            .addMoneyCost(Money.ROUBLES, 250000)
                            .addLoyaltyLevel(2)
                            .export(tables.traders[baseJson._id])  
                },
                {
                    main: (fluentTraderAssortHeper: FluentAssortConstructor) => // toz (ded paz) custom
                        fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createDedPaz("ded_tozz_custom"))
                            .addStackCount(45)
                            .addBuyRestriction(3)
                            .addMoneyCost(Money.ROUBLES, 301488)
                            .addLoyaltyLevel(1)
                            .export(tables.traders[baseJson._id])
                },
                {
                    main: (fluentTraderAssortHeper: FluentAssortConstructor) => // Bellanore
                        fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createBellanore("bellanore_custom"))
                            .addStackCount(70)
                            .addBuyRestriction(4)
                            .addMoneyCost(Money.ROUBLES, 200000)
                            .addLoyaltyLevel(1)
                            .export(tables.traders[baseJson._id])
                },
                {
                    main: (fluentTraderAssortHeper: FluentAssortConstructor) => // Rullete
                        fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createRullete("rullete_custom"))
                            .addStackCount(45)
                            .addBuyRestriction(2)
                            .addMoneyCost(Money.ROUBLES, 69999)
                            .addLoyaltyLevel(1)
                            .export(tables.traders[baseJson._id])
                },
                {
                    main: (fluentTraderAssortHeper: FluentAssortConstructor) => // Petushok200 (P90 with 200 rounds)
                        fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createPetushok200("petushok200"))
                            .addStackCount(40)
                            .addBuyRestriction(1)
                            .addMoneyCost(Money.ROUBLES, 150000)
                            .addLoyaltyLevel(2)
                            .export(tables.traders[baseJson._id])
                },
                {
                    main: (fluentTraderAssortHeper: FluentAssortConstructor) => // CustomRPK 
                        fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createCustomRPK("pkp_custom"))
                            .addStackCount(5)
                            .addBuyRestriction(1)
                            .addMoneyCost(Money.ROUBLES, 450000)
                            .addLoyaltyLevel(2)
                            .export(tables.traders[baseJson._id])
                },
                {
                    main: (fluentTraderAssortHeper: FluentAssortConstructor) => // Aka-ha 
                        fluentTraderAssortHeper.createComplexAssortItem(customWeapons.createAkaHa("aka-ha"))
                            .addStackCount(25)
                            .addBuyRestriction(2)
                            .addMoneyCost(Money.ROUBLES, 145999)
                            .addLoyaltyLevel(1)
                            .export(tables.traders[baseJson._id])
                },
                {parts: [
                    new CustomSVastRoot(),
                    new CustomSVastMagazine()
                ],
                main: (fluentTraderAssortHeper: FluentAssortConstructor) => // SV-AST
                    fluentTraderAssortHeper.createComplexAssortItem(new SVAST().createWeapon("shSVastWeapon", this.pes7Lib))
                        .addStackCount(33)
                        .addBuyRestriction(3)
                        .addMoneyCost(Money.ROUBLES, 270000)
                        .addLoyaltyLevel(1)
                        .export(tables.traders[baseJson._id])}
            ])
        }

        // if (config.Launchers.Enabled)
        // {
        //     this.pes7Lib.processItemsArray([
        //         new M203(), // shM203
        //         // new Kosterishche40(),
        //         {main:customAmmos.createCustomFlyre26x75} // shFlyre26x75
        //     ])
        // }

        //graphical card
        this.fluentTraderAssortHeper.createSingleAssortItem("57347ca924597744596b4e71")
            .addStackCount(1)
            .addBuyRestriction(1)
            .addBarterCost("UAH", 350000) // UAH
            .addLoyaltyLevel(2)
            .export(tables.traders[baseJson._id]);

        //recepy and loyality for labcard
        this.fluentTraderAssortHeper.createSingleAssortItem("5c94bbff86f7747ee735c08f")
            .addStackCount(1)
            .addBuyRestriction(1)
            .addBarterCost(Money.DOLLARS, 1500) // Dollars
            .addLoyaltyLevel(2)
            .export(tables.traders[baseJson._id]);

        //9x19mm PBP gzh
        this.fluentTraderAssortHeper.createSingleAssortItem("5efb0da7a29a85116f6ea05f")
            .addStackCount(1)
            .addBuyRestriction(1)
            .addBarterCost("UAH", 800) // UAH
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);

        // vintarez
        this.fluentTraderAssortHeper.createComplexAssortItem(tables.globals.ItemPresets["5841482e2459775a050cdda9"]._items)
            .addStackCount(90)
            .addBarterCost("5ed5160a87bb8443d10680b5", 1) // Meldonin
            .addBarterCost("590c661e86f7741e566b646a", 2) // car first aid
            .addBarterCost("544fb3f34bdc2d03748b456a", 1) // morphine
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);

        // console.log('data.assort.items', tables.traders[baseJson._id].assort.items);
        // console.log('tables', tables.globals.ItemPresets);
        // console.log('data.assort.loyal_level_items', tables.traders[baseJson._id].assort.loyal_level_items);

        //Injectors
        customInjectors.createCustomInjectors(tables,jsonUtil,container);

        //Update backpack slots
        const newSlotsBackPack = tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots;
        const secureSlotBackPack = newSlotsBackPack.find(slot=> slot._id === "55d72a104bdc2d89028b4571");
        secureSlotBackPack._props.filters = [
            {
                "Filter": [...secureSlotBackPack._props.filters[0].Filter, 
                    "shbigbrobackpack"
                ]
            }
        ]

        //Update container slots
        const newSlotsSecure = tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots;
        const secureSlotSecure = newSlotsSecure.find(slot=> slot._id === "55d72a054bdc2d88028b456e");
        secureSlotSecure._props.filters = [
            {
                "Filter": [...secureSlotSecure._props.filters[0].Filter, 
                    "ninjacontaineru" // our new container
                ]
            }
        ]

        //Update TacticalVest slots
        const newSlotsTacticalVest = tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots;
        const secureSlotTacticalVest = newSlotsTacticalVest.find(slot=> slot._id === "55d729f74bdc2d87028b456e");
        secureSlotTacticalVest._props.filters = [
            {
                "Filter": secureSlotTacticalVest._props.filters[0].Filter,
                "ExcludedFilter": [...(secureSlotTacticalVest._props.filters[0]?.ExcludedFilter || []), 
                    "ninjacontaineru",
                    "shBitCoinFlashDriveContainer",
                    "bobbleHeadContainer",
                    "ultraTechContainer",
                    "shS9Miner",
                    "shbigbrobackpack"
                ]
            }
        ]

        if (config.LootBoxes.Enabled) 
        {
            this.pes7Lib.processItemsArray([
                // new RandomLootBox(),
                new SkyfiLootBox(),
                new RandomContainersBox1(),
                new RandomContainersBox2(),
                new RandomContainersBox3(),
                new RandomContainersBox4(),
                new RandomContainersBox5(),
                new RandomLarge(),
                new RandomMedium(),
                new RandomSmall(),


                new ArmorEquipmentBox(),
                new ArmorEquipmentLargeBox(),
                new ChallangeGunBox(),
                new ChallangePistolBox(),
                new ChallangeRandomGunlBox(),
                new ChallangeShotgunBox(),
                new ChallangeSniperRifleBox(),
                new GrenadeBox(),
                new LootBatterySmallBox(),
                new LootBuildingMaterialSmallBox(),
                new LootElectronicsSmallBox(),
                new LootHouseholdGoodsSmallBox(),
                new LootInfoSmallBox(),
                new LootJewelrySmallBox(),
                new LootLargeBox(),
                new LootLubricantSmallBox(),
                new LootMedicalSuppliesSmallBox(),
                new LootMediumBox(),
                new LootOtherSmallBox(),
                new LootSmallBox(),
                new LootToolSmallBox(),
                new MedicineLargeBox(),
                new MedicineMediumBox(),
                new MedicineSmallBox(),
                new SpecialGrenadeBox(),
                new StimulatorsMediumBox(),
                new StimulatorsSmallBox(),
                new FoodLargeBox(),
                new FoodMediumBox(),
                new FoodSmallBox()

            ])
        }

        //Remove items restrictions
        if (!config.RestrictionsInRaid.Enabled)
        {
            const db = container.resolve<DatabaseServer>("DatabaseServer").getTables();
            db.globals.config.RestrictionsInRaid = [];
            this.logger.log("Sasha Himik: remove RestrictionsInRaid items. (if you want stay with them use config.json)", LogTextColor.YELLOW);
        }

        //Crypto
        if (config.Crypto.Enabled) 
        {
            const eth3 = new ETH3();
            const trc700000 = new TRC700000();
            const ton1000 = new TON1000();
            this.pes7Lib.processItemsArray([
                new Nvidia3060Ti(), //RTX 3060 TI
                new S9Miner(), //shS9Miner
                new S19Miner(), //shS19Miner
                eth3, //sheth3
                trc700000, //shtrc700000,
                ton1000 // shton1000
            ])

            // Miners processing
            setInterval(() => 
            {
                updateMiners({container,saveServer: this.saveServer,itemHelper: this.itemHelper,weightedRandomHelper: this.weightedRandomHelper,
                    eventOutputHolder: this.eventOutputHolder, inventoryHelper: this.inventoryHelper, pes7Lib: this.pes7Lib, logger: this.logger});
            }, config.Crypto.Interval);
    
            //CryptoPrice Online
            if (config.Crypto.UpdateCryptoPriceOnline.Enabled) 
            {
                updateCryptoPrices(databaseServer, eth3, trc700000, ton1000, this.logger);

                if (config.Crypto.UpdateCryptoPriceOnline.Interval > 0)
                {
                    setInterval(() => 
                    {
                        updateCryptoPrices(databaseServer, eth3, trc700000, ton1000, this.logger);
                    }, config.Crypto.UpdateCryptoPriceOnline.Interval);
                }
            }
    
            //Must be at the end
            setTimeout(()=> 
            {
                logCrypto(this.saveServer, this.itemHelper, this.logger);
            }, 10000)
        }

        //checkDependenciesInstalled
        if (!config.ServerHostsSettings.TurnOffDependencyCheck)
        {
            const checkDependenciesInstalled = async ()=>
            {
                const rootFolder = this.pes7Lib.getCurrentDirectory().split("\\").slice(0,-4).join("\\");
                const modFolder = this.pes7Lib.getCurrentDirectory().split("\\").slice(0,-1).join("\\");
                const checker = new DependencyChecker("", `${rootFolder}\\BepInEx`, this.pes7Lib);
                const jsonContent = await fs.readFileSync(`${modFolder}\\config\\dependencies.json`, "utf-8");
                const jsonStructure = JSON.parse(jsonContent);
                const isProperInstalled = await checker.checkJsonStructure(jsonStructure);

                if (isProperInstalled)
                {
                    this.pes7Lib.log("All dependencies installed properly!", LogTextColor.GREEN);
                }
                else 
                {
                    this.pes7Lib.error("Not all dependencies installed properly! Please have a look on mod page and install dependencies: https://hub.sp-tarkov.com/files/file/1948-sasha-himik");
                }
            }
            checkDependenciesInstalled();
        }
        // checker
        
        //TODO: make optional setting to make all granades stackable 5
        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }
}

module.exports = { mod: new SampleTrader() }