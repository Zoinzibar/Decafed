"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NLE = void 0;
const InraidController_1 = require("C:/snapshot/project/obj/controllers/InraidController");
const PlayerScavGenerator_1 = require("C:/snapshot/project/obj/generators/PlayerScavGenerator");
const HealthHelper_1 = require("C:/snapshot/project/obj/helpers/HealthHelper");
const InRaidHelper_1 = require("C:/snapshot/project/obj/helpers/InRaidHelper");
const ItemHelper_1 = require("C:/snapshot/project/obj/helpers/ItemHelper");
const ProfileHelper_1 = require("C:/snapshot/project/obj/helpers/ProfileHelper");
const QuestHelper_1 = require("C:/snapshot/project/obj/helpers/QuestHelper");
const TraderHelper_1 = require("C:/snapshot/project/obj/helpers/TraderHelper");
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const ILogger_1 = require("C:/snapshot/project/obj/models/spt/utils/ILogger");
const ConfigServer_1 = require("C:/snapshot/project/obj/servers/ConfigServer");
const DatabaseServer_1 = require("C:/snapshot/project/obj/servers/DatabaseServer");
const SaveServer_1 = require("C:/snapshot/project/obj/servers/SaveServer");
const InsuranceService_1 = require("C:/snapshot/project/obj/services/InsuranceService");
const JsonUtil_1 = require("C:/snapshot/project/obj/utils/JsonUtil");
const TimeUtil_1 = require("C:/snapshot/project/obj/utils/TimeUtil");
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const PlayerRaidEndState_1 = require("C:/snapshot/project/obj/models/enums/PlayerRaidEndState");
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const LogBackgroundColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogBackgroundColor");
// local import
const ApplicationContext_1 = require("C:/snapshot/project/obj/context/ApplicationContext");
const InventoryHelper_1 = require("C:/snapshot/project/obj/helpers/InventoryHelper");
const MatchBotDetailsCacheService_1 = require("C:/snapshot/project/obj/services/MatchBotDetailsCacheService");
const PmcChatResponseService_1 = require("C:/snapshot/project/obj/services/PmcChatResponseService");
const config = __importStar(require("../config/config.json"));
const VFS_1 = require("C:/snapshot/project/obj/utils/VFS");
const QuestStatus_1 = require("C:/snapshot/project/obj/models/enums/QuestStatus");
const MailSendService_1 = require("C:/snapshot/project/obj/services/MailSendService");
const TraderServicesService_1 = require("C:/snapshot/project/obj/services/TraderServicesService");
const RandomUtil_1 = require("C:/snapshot/project/obj/utils/RandomUtil");
let NLE = class NLE extends InraidController_1.InraidController {
    logger;
    saveServer;
    jsonUtil;
    timeUtil;
    databaseServer;
    pmcChatResponseService;
    matchBotDetailsCacheService;
    questHelper;
    itemHelper;
    profileHelper;
    playerScavGenerator;
    healthHelper;
    traderHelper;
    traderServicesService;
    insuranceService;
    inRaidHelper;
    applicationContext;
    configServer;
    mailSendService;
    randomUtil;
    inventoryHelper;
    vfs;
    airdropConfig;
    btrConfig;
    inraidConfig;
    traderConfig;
    // We need to make sure we use the constructor and pass the dependencies to the parent class!
    constructor(logger, saveServer, jsonUtil, timeUtil, databaseServer, pmcChatResponseService, matchBotDetailsCacheService, questHelper, itemHelper, profileHelper, playerScavGenerator, healthHelper, traderHelper, traderServicesService, insuranceService, inRaidHelper, applicationContext, configServer, mailSendService, randomUtil, inventoryHelper, vfs) {
        super(logger, saveServer, jsonUtil, timeUtil, databaseServer, pmcChatResponseService, matchBotDetailsCacheService, questHelper, itemHelper, profileHelper, playerScavGenerator, healthHelper, traderHelper, traderServicesService, insuranceService, inRaidHelper, applicationContext, configServer, mailSendService, randomUtil);
        this.logger = logger;
        this.saveServer = saveServer;
        this.jsonUtil = jsonUtil;
        this.timeUtil = timeUtil;
        this.databaseServer = databaseServer;
        this.pmcChatResponseService = pmcChatResponseService;
        this.matchBotDetailsCacheService = matchBotDetailsCacheService;
        this.questHelper = questHelper;
        this.itemHelper = itemHelper;
        this.profileHelper = profileHelper;
        this.playerScavGenerator = playerScavGenerator;
        this.healthHelper = healthHelper;
        this.traderHelper = traderHelper;
        this.traderServicesService = traderServicesService;
        this.insuranceService = insuranceService;
        this.inRaidHelper = inRaidHelper;
        this.applicationContext = applicationContext;
        this.configServer = configServer;
        this.mailSendService = mailSendService;
        this.randomUtil = randomUtil;
        this.inventoryHelper = inventoryHelper;
        this.vfs = vfs;
        this.airdropConfig = this.configServer.getConfig(ConfigTypes_1.ConfigTypes.AIRDROP);
        this.btrConfig = this.configServer.getConfig(ConfigTypes_1.ConfigTypes.BTR);
        this.inraidConfig = this.configServer.getConfig(ConfigTypes_1.ConfigTypes.IN_RAID);
        this.traderConfig = this.configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
    }
    savePostRaidProgress(offraidData, sessionID) {
        this.logger.info("NLE active");
        if (config.backupProfileBeforeSave) {
            this.logger.log("Doing profile backup...", "green");
            this.vfs.copyFile(`user/profiles/${sessionID}.json`, `user/profiles/${sessionID}.json.bk`);
        }
        const isDead = this.isPlayerDead(offraidData.exit);
        if (!this.inraidConfig.save.loot) {
            return;
        }
        if (offraidData.isPlayerScav) {
            if (isDead) {
                // check the config for not saving after Scav death option
                if (config.noSaveOnScavDeath) {
                    this.logger.log("SCAV DIED!!!", "red", "white");
                    this.logger.log("SKIPPING POST-RAID SAVE!!!", "green");
                    return;
                }
            }
            this.savePlayerScavProgress(sessionID, offraidData);
        }
        else {
            if (isDead) {
                // check the config for not saving after PMC death option
                if (config.noSaveOnPMCDeath) {
                    this.logger.log("PMC DIED!!!", "red", "white");
                    this.logger.log("SKIPPING POST-RAID SAVE!!!", "green");
                    return;
                }
            }
            this.savePmcProgress(sessionID, offraidData);
        }
    }
    /**
     * Handle updating the profile post-pmc raid
     * @param sessionID session id
     * @param postRaidRequest post-raid data of raid
     */
    savePmcProgress(sessionID, postRaidRequest) {
        const serverProfile = this.saveServer.getProfile(sessionID);
        const locationName = serverProfile.inraid.location.toLowerCase();
        const map = this.databaseServer.getTables().locations[locationName].base;
        let mapHasInsuranceEnabled = map.Insurance;
        let serverPmcProfile = serverProfile.characters.pmc;
        const serverScavProfile = serverProfile.characters.scav;
        const isDead = this.isPlayerDead(postRaidRequest.exit);
        const preRaidGear = this.inRaidHelper.getPlayerGear(serverPmcProfile.Inventory.items);
        serverProfile.inraid.character = "pmc";
        this.inRaidHelper.updateProfileBaseStats(serverPmcProfile, postRaidRequest, sessionID);
        this.inRaidHelper.updatePmcProfileDataPostRaid(serverPmcProfile, postRaidRequest, sessionID);
        this.mergePmcAndScavEncyclopedias(serverPmcProfile, serverScavProfile);
        // Check for exit status
        this.markOrRemoveFoundInRaidItems(postRaidRequest);
        postRaidRequest.profile.Inventory.items = this.itemHelper.replaceIDs(postRaidRequest.profile.Inventory.items, postRaidRequest.profile, serverPmcProfile.InsuredItems, postRaidRequest.profile.Inventory.fastPanel);
        this.inRaidHelper.addUpdToMoneyFromRaid(postRaidRequest.profile.Inventory.items);
        // skips overwriting the new inventory if restoreInitialKit is enabled and player is dead
        // if true disables Insurance
        if (config.restoreInitialKit && isDead) {
            this.logger.log("PMC DIED!!!", "red", "white");
            this.logger.log("RESTORING INITIAL EQUIPPMENT!!!", "green");
            mapHasInsuranceEnabled = false;
        }
        else {
            this.logger.log("pmc alive!!!", "green");
            this.inRaidHelper.setInventory(sessionID, serverPmcProfile, postRaidRequest.profile);
        }
        this.healthHelper.saveVitality(serverPmcProfile, postRaidRequest.health, sessionID);
        // Get array of insured items+child that were lost in raid
        const gearToStore = this.insuranceService.getGearLostInRaid(serverPmcProfile, postRaidRequest, preRaidGear, sessionID, isDead);
        if (gearToStore.length > 0) {
            this.insuranceService.storeGearLostInRaidToSendLater(sessionID, gearToStore);
        }
        // Edge case - Handle usec players leaving lighthouse with Rogues angry at them
        if (locationName === "lighthouse" && postRaidRequest.profile.Info.Side.toLowerCase() === "usec") {
            // Decrement counter if it exists, don't go below 0
            const remainingCounter = serverPmcProfile?.Stats.Eft.OverallCounters.Items.find((x) => x.Key.includes("UsecRaidRemainKills"));
            if (remainingCounter?.Value > 0) {
                remainingCounter.Value--;
            }
        }
        if (isDead) {
            this.pmcChatResponseService.sendKillerResponse(sessionID, serverPmcProfile, postRaidRequest.profile.Stats.Eft.Aggressor);
            this.matchBotDetailsCacheService.clearCache();
            this.performPostRaidActionsWhenDead(postRaidRequest, serverPmcProfile, sessionID);
        }
        else {
            // Not dead
            // Check for cultist amulets in special slot (only slot it can fit)
            const amuletOnPlayer = serverPmcProfile.Inventory.items.filter((item) => item.slotId?.startsWith("SpecialSlot")).find((item) => item._tpl === "64d0b40fbe2eed70e254e2d4");
            if (amuletOnPlayer) {
                // No charges left, delete it
                if (amuletOnPlayer.upd.CultistAmulet.NumberOfUsages <= 0) {
                    serverPmcProfile.Inventory.items.splice(serverPmcProfile.Inventory.items.indexOf(amuletOnPlayer), 1);
                }
                else if (amuletOnPlayer.upd.CultistAmulet.NumberOfUsages > 0) {
                    // Charges left, reduce by 1
                    amuletOnPlayer.upd.CultistAmulet.NumberOfUsages--;
                }
            }
        }
        const victims = postRaidRequest.profile.Stats.Eft.Victims.filter((x) => ["sptbear", "sptusec"].includes(x.Role.toLowerCase()));
        if (victims?.length > 0) {
            this.pmcChatResponseService.sendVictimResponse(sessionID, victims, serverPmcProfile);
        }
        this.insuranceService.sendInsuredItems(serverPmcProfile, sessionID, map.Id);
    }
    filterItemsByParentIdRecursive(items, parentId) {
        const filteredItems = [];
        const stack = [...items]; // Use a stack to keep track of items to process
        while (stack.length > 0) {
            const currentItem = stack.pop();
            if (currentItem.parentId === parentId) {
                filteredItems.push(currentItem);
                const res = this.filterItemsByParentIdRecursive(items, currentItem._id);
                for (const item of res) {
                    filteredItems.push(item);
                }
            }
        }
        return filteredItems;
    }
    markOrRemoveFoundInRaidItems(postRaidRequest) {
        if (postRaidRequest.exit !== PlayerRaidEndState_1.PlayerRaidEndState.SURVIVED && !config.keepFoundInRaidStatus) {
            // Remove FIR status if the player haven't survived
            postRaidRequest.profile = this.inRaidHelper.removeSpawnedInSessionPropertyFromItems(postRaidRequest.profile);
        }
    }
    performPostRaidActionsWhenDead(postRaidSaveRequest, pmcData, sessionID) {
        this.updatePmcHealthPostRaid(postRaidSaveRequest, pmcData);
        if (config.restoreInitialKit && config.keepSecuredContainer) {
            this.logger.logWithColor("KEEPING SECURED CONTAINER!!!", LogTextColor_1.LogTextColor.YELLOW, LogBackgroundColor_1.LogBackgroundColor.RED);
            this.keepSecuredContainer(postRaidSaveRequest.profile.Inventory.items, pmcData, sessionID);
        }
        if (this.inRaidHelper.removeQuestItemsOnDeath()) {
            // Find and remove the completed condition from profile if player died, otherwise quest is stuck in limbo
            // and quest items cannot be picked up again
            const allQuests = this.questHelper.getQuestsFromDb();
            const activeQuestIdsInProfile = pmcData.Quests.filter((x) => ![QuestStatus_1.QuestStatus.AvailableForStart, QuestStatus_1.QuestStatus.Success, QuestStatus_1.QuestStatus.Expired].includes(x.status)).map((x) => x.qid);
            for (const questItem of postRaidSaveRequest.profile.Stats.Eft.CarriedQuestItems) {
                // Get quest/find condition for carried quest item
                const questAndFindItemConditionId = this.questHelper.getFindItemConditionByQuestItem(questItem, activeQuestIdsInProfile, allQuests);
                if (Object.keys(questAndFindItemConditionId)?.length > 0) {
                    this.profileHelper.removeQuestConditionFromProfile(pmcData, questAndFindItemConditionId);
                }
            }
            // Empty out stored quest items from player inventory
            pmcData.Stats.Eft.CarriedQuestItems = [];
        }
        return pmcData;
    }
    // Keeps the secured Container from the raid and replaces initial one
    keepSecuredContainer(offRaidItems, pmcData, sessionID) {
        const raidSecuredContainer = offRaidItems.find(item => item.slotId === "SecuredContainer");
        const raidSecuredItems = this.filterItemsByParentIdRecursive(offRaidItems, raidSecuredContainer._id);
        const initialSecuredContainer = pmcData.Inventory.items.find(item => item.slotId === "SecuredContainer");
        const initialSecuredItems = this.filterItemsByParentIdRecursive(pmcData.Inventory.items, initialSecuredContainer._id);
        // removes the old items in the secured Container
        for (const item of initialSecuredItems) {
            this.inventoryHelper.removeItem(pmcData, item._id, sessionID);
        }
        // Replace the old parentId with the new ParentId with the inital ParentId of the Secure Container
        const res = this.replaceParentId(raidSecuredItems, raidSecuredContainer._id, initialSecuredContainer._id);
        // Add secured items from raid to current inventory
        pmcData.Inventory.items = [...pmcData.Inventory.items, ...res];
    }
    replaceParentId(items, oldParentId, newParentId) {
        var stack = [...items];
        stack.forEach(item => {
            if (item.parentId === oldParentId) {
                item.parentId = newParentId;
            }
        });
        return stack;
    }
};
exports.NLE = NLE;
exports.NLE = NLE = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("WinstonLogger")),
    __param(1, (0, tsyringe_1.inject)("SaveServer")),
    __param(2, (0, tsyringe_1.inject)("JsonUtil")),
    __param(3, (0, tsyringe_1.inject)("TimeUtil")),
    __param(4, (0, tsyringe_1.inject)("DatabaseServer")),
    __param(5, (0, tsyringe_1.inject)("PmcChatResponseService")),
    __param(6, (0, tsyringe_1.inject)("MatchBotDetailsCacheService")),
    __param(7, (0, tsyringe_1.inject)("QuestHelper")),
    __param(8, (0, tsyringe_1.inject)("ItemHelper")),
    __param(9, (0, tsyringe_1.inject)("ProfileHelper")),
    __param(10, (0, tsyringe_1.inject)("PlayerScavGenerator")),
    __param(11, (0, tsyringe_1.inject)("HealthHelper")),
    __param(12, (0, tsyringe_1.inject)("TraderHelper")),
    __param(13, (0, tsyringe_1.inject)("TraderServicesService")),
    __param(14, (0, tsyringe_1.inject)("InsuranceService")),
    __param(15, (0, tsyringe_1.inject)("InRaidHelper")),
    __param(16, (0, tsyringe_1.inject)("ApplicationContext")),
    __param(17, (0, tsyringe_1.inject)("ConfigServer")),
    __param(18, (0, tsyringe_1.inject)("MailSendService")),
    __param(19, (0, tsyringe_1.inject)("RandomUtil")),
    __param(20, (0, tsyringe_1.inject)("InventoryHelper")),
    __param(21, (0, tsyringe_1.inject)("VFS")),
    __metadata("design:paramtypes", [typeof (_a = typeof ILogger_1.ILogger !== "undefined" && ILogger_1.ILogger) === "function" ? _a : Object, typeof (_b = typeof SaveServer_1.SaveServer !== "undefined" && SaveServer_1.SaveServer) === "function" ? _b : Object, typeof (_c = typeof JsonUtil_1.JsonUtil !== "undefined" && JsonUtil_1.JsonUtil) === "function" ? _c : Object, typeof (_d = typeof TimeUtil_1.TimeUtil !== "undefined" && TimeUtil_1.TimeUtil) === "function" ? _d : Object, typeof (_e = typeof DatabaseServer_1.DatabaseServer !== "undefined" && DatabaseServer_1.DatabaseServer) === "function" ? _e : Object, typeof (_f = typeof PmcChatResponseService_1.PmcChatResponseService !== "undefined" && PmcChatResponseService_1.PmcChatResponseService) === "function" ? _f : Object, typeof (_g = typeof MatchBotDetailsCacheService_1.MatchBotDetailsCacheService !== "undefined" && MatchBotDetailsCacheService_1.MatchBotDetailsCacheService) === "function" ? _g : Object, typeof (_h = typeof QuestHelper_1.QuestHelper !== "undefined" && QuestHelper_1.QuestHelper) === "function" ? _h : Object, typeof (_j = typeof ItemHelper_1.ItemHelper !== "undefined" && ItemHelper_1.ItemHelper) === "function" ? _j : Object, typeof (_k = typeof ProfileHelper_1.ProfileHelper !== "undefined" && ProfileHelper_1.ProfileHelper) === "function" ? _k : Object, typeof (_l = typeof PlayerScavGenerator_1.PlayerScavGenerator !== "undefined" && PlayerScavGenerator_1.PlayerScavGenerator) === "function" ? _l : Object, typeof (_m = typeof HealthHelper_1.HealthHelper !== "undefined" && HealthHelper_1.HealthHelper) === "function" ? _m : Object, typeof (_o = typeof TraderHelper_1.TraderHelper !== "undefined" && TraderHelper_1.TraderHelper) === "function" ? _o : Object, typeof (_p = typeof TraderServicesService_1.TraderServicesService !== "undefined" && TraderServicesService_1.TraderServicesService) === "function" ? _p : Object, typeof (_q = typeof InsuranceService_1.InsuranceService !== "undefined" && InsuranceService_1.InsuranceService) === "function" ? _q : Object, typeof (_r = typeof InRaidHelper_1.InRaidHelper !== "undefined" && InRaidHelper_1.InRaidHelper) === "function" ? _r : Object, typeof (_s = typeof ApplicationContext_1.ApplicationContext !== "undefined" && ApplicationContext_1.ApplicationContext) === "function" ? _s : Object, typeof (_t = typeof ConfigServer_1.ConfigServer !== "undefined" && ConfigServer_1.ConfigServer) === "function" ? _t : Object, typeof (_u = typeof MailSendService_1.MailSendService !== "undefined" && MailSendService_1.MailSendService) === "function" ? _u : Object, typeof (_v = typeof RandomUtil_1.RandomUtil !== "undefined" && RandomUtil_1.RandomUtil) === "function" ? _v : Object, typeof (_w = typeof InventoryHelper_1.InventoryHelper !== "undefined" && InventoryHelper_1.InventoryHelper) === "function" ? _w : Object, typeof (_x = typeof VFS_1.VFS !== "undefined" && VFS_1.VFS) === "function" ? _x : Object])
], NLE);
//# sourceMappingURL=NLE.js.map