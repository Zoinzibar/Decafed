"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeepEquipment = void 0;
const ApplicationContext_1 = require("C:/snapshot/project/obj/context/ApplicationContext");
const InraidController_1 = require("C:/snapshot/project/obj/controllers/InraidController");
const PlayerScavGenerator_1 = require("C:/snapshot/project/obj/generators/PlayerScavGenerator");
const HealthHelper_1 = require("C:/snapshot/project/obj/helpers/HealthHelper");
const InRaidHelper_1 = require("C:/snapshot/project/obj/helpers/InRaidHelper");
const ItemHelper_1 = require("C:/snapshot/project/obj/helpers/ItemHelper");
const ProfileHelper_1 = require("C:/snapshot/project/obj/helpers/ProfileHelper");
const QuestHelper_1 = require("C:/snapshot/project/obj/helpers/QuestHelper");
const TraderHelper_1 = require("C:/snapshot/project/obj/helpers/TraderHelper");
const ILogger_1 = require("C:/snapshot/project/obj/models/spt/utils/ILogger");
const ConfigServer_1 = require("C:/snapshot/project/obj/servers/ConfigServer");
const SaveServer_1 = require("C:/snapshot/project/obj/servers/SaveServer");
const DatabaseService_1 = require("C:/snapshot/project/obj/services/DatabaseService");
const InsuranceService_1 = require("C:/snapshot/project/obj/services/InsuranceService");
const LocalisationService_1 = require("C:/snapshot/project/obj/services/LocalisationService");
const MailSendService_1 = require("C:/snapshot/project/obj/services/MailSendService");
const MatchBotDetailsCacheService_1 = require("C:/snapshot/project/obj/services/MatchBotDetailsCacheService");
const PmcChatResponseService_1 = require("C:/snapshot/project/obj/services/PmcChatResponseService");
const TraderServicesService_1 = require("C:/snapshot/project/obj/services/TraderServicesService");
const RandomUtil_1 = require("C:/snapshot/project/obj/utils/RandomUtil");
const TimeUtil_1 = require("C:/snapshot/project/obj/utils/TimeUtil");
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const PlayerRaidEndState_1 = require("C:/snapshot/project/obj/models/enums/PlayerRaidEndState");
const EquipmentSlots_1 = require("C:/snapshot/project/obj/models/enums/EquipmentSlots");
let KeepEquipment = class KeepEquipment extends InraidController_1.InraidController {
    config = require("../config/config");
    constructor(logger, saveServer, timeUtil, databaseService, pmcChatResponseService, matchBotDetailsCacheService, questHelper, itemHelper, profileHelper, playerScavGenerator, healthHelper, traderHelper, traderServicesService, localisationService, insuranceService, inRaidHelper, applicationContext, configServer, mailSendService, randomUtil) {
        super(logger, saveServer, timeUtil, databaseService, pmcChatResponseService, matchBotDetailsCacheService, questHelper, itemHelper, profileHelper, playerScavGenerator, healthHelper, traderHelper, traderServicesService, localisationService, insuranceService, inRaidHelper, applicationContext, configServer, mailSendService, randomUtil);
    }
    /**
     * Handle updating player profile post-pmc raid
     * @param sessionID session id
     * @param postRaidData post-raid data
     */
    savePmcProgress(sessionID, postRaidData) {
        if (postRaidData.exit == PlayerRaidEndState_1.PlayerRaidEndState.SURVIVED) {
            super.savePmcProgress(sessionID, postRaidData);
            return;
        }
        const currentProfile = this.saveServer.getProfile(sessionID);
        let pmcData = currentProfile.characters.pmc;
        currentProfile.inraid.character = "pmc";
        // Sets xp, skill fatigue, location status, encyclopedia, etc
        this.updateStats(pmcData, postRaidData, sessionID);
        if (!this.config.retainFoundInRaidStatus) {
            postRaidData.profile = this.inRaidHelper.removeSpawnedInSessionPropertyFromItems(postRaidData.profile);
        }
        postRaidData.profile.Inventory.items =
            this.itemHelper.replaceIDs(postRaidData.profile.Inventory.items, postRaidData.profile, pmcData.InsuredItems, postRaidData.profile.Inventory.fastPanel);
        this.inRaidHelper.addStackCountToMoneyFromRaid(postRaidData.profile.Inventory.items);
        if (this.config.keepItemsFoundInRaid) {
            this.inRaidHelper.setInventory(sessionID, pmcData, postRaidData.profile);
        }
        else if (this.config.keepItemsInSecureContainer) {
            const securedContainer = this.getSecuredContainerAndChildren(postRaidData.profile.Inventory.items);
            if (securedContainer) {
                pmcData = this.profileHelper.removeSecureContainer(pmcData);
                pmcData.Inventory.items = pmcData.Inventory.items.concat(securedContainer);
            }
        }
        if (this.config.saveVitality) {
            this.healthHelper.saveVitality(pmcData, postRaidData.health, sessionID);
        }
        if (this.config.useSacredAmulet) {
            const locationName = currentProfile.inraid.location.toLowerCase();
            if (locationName === "lighthouse" && postRaidData.profile.Info.Side.toLowerCase() === "usec") {
                // Decrement counter if it exists, don't go below 0
                const remainingCounter = pmcData?.Stats.Eft.OverallCounters.Items.find((x) => x.Key.includes("UsecRaidRemainKills"));
                if (remainingCounter?.Value > 0) {
                    remainingCounter.Value--;
                }
            }
        }
        const isDead = this.isPlayerDead(postRaidData.exit);
        if (isDead) {
            this.pmcChatResponseService.sendKillerResponse(sessionID, pmcData, postRaidData.profile.Stats.Eft.Aggressor);
            this.matchBotDetailsCacheService.clearCache();
        }
        const victims = postRaidData.profile.Stats.Eft.Victims.filter(x => x.Role === "sptBear" || x.Role === "sptUsec");
        if (victims?.length > 0) {
            this.pmcChatResponseService.sendVictimResponse(sessionID, victims, pmcData);
        }
    }
    updateStats(profileData, saveProgress, sessionID) {
        // Resets skill fatigue, I see no reason to have this be configurable.
        for (const skill of saveProgress.profile.Skills.Common) {
            skill.PointsEarnedDuringSession = 0.0;
        }
        // Level
        if (this.config.profileSaving.level) {
            profileData.Info.Level = saveProgress.profile.Info.Level;
        }
        // Skills
        if (this.config.profileSaving.skills) {
            profileData.Skills = saveProgress.profile.Skills;
        }
        // Stats, not going to allow disabling as I'm not quite sure what this does.
        profileData.Stats.Eft = saveProgress.profile.Stats.Eft;
        // Encyclopedia
        if (this.config.profileSaving.encyclopedia) {
            profileData.Encyclopedia = saveProgress.profile.Encyclopedia;
        }
        // Quest progress
        if (this.config.profileSaving.questProgress) {
            profileData.TaskConditionCounters = saveProgress.profile.TaskConditionCounters;
            this.validateTaskConditionCounters(saveProgress, profileData);
        }
        // Survivor class
        if (this.config.profileSaving.survivorClass) {
            profileData.SurvivorClass = saveProgress.profile.SurvivorClass;
        }
        // Experience
        if (this.config.profileSaving.experience) {
            profileData.Info.Experience += profileData.Stats.Eft.TotalSessionExperience;
            profileData.Stats.Eft.TotalSessionExperience = 0;
        }
        this.saveServer.getProfile(sessionID).inraid.location = "none";
    }
    // I just yoinked this straight from InRaidHelper
    validateTaskConditionCounters(saveProgressRequest, profileData) {
        for (const backendCounterKey in saveProgressRequest.profile.TaskConditionCounters) {
            // Skip counters with no id
            if (!saveProgressRequest.profile.TaskConditionCounters[backendCounterKey].id) {
                continue;
            }
            const postRaidValue = saveProgressRequest.profile.TaskConditionCounters[backendCounterKey]?.value;
            if (typeof postRaidValue === "undefined") {
                // No value, skip
                continue;
            }
            const matchingPreRaidCounter = profileData.TaskConditionCounters[backendCounterKey];
            if (!matchingPreRaidCounter) {
                this.logger.error(this.localisationService.getText("inraid-unable_to_find_key_in_taskconditioncounters", backendCounterKey));
                continue;
            }
            if (matchingPreRaidCounter.value !== postRaidValue) {
                this.logger.error(this.localisationService.getText("inraid-taskconditioncounter_keys_differ", { key: backendCounterKey, oldValue: matchingPreRaidCounter.value, newValue: postRaidValue }));
            }
        }
    }
    // private handleInventory(profileData: IPmcData, saveProgress: IPostRaidPmcData, sessionID: string): void {
    // 	if (this.config.keepItemsFoundInRaid) { // Keep all items found in raid
    // 		this.inRaidHelper.setInventory(sessionID, profileData, saveProgress);
    // 	} else { // Revert back to original kit
    // 		let keptItems: Item[] = [];
    // 		this.removeItem(profileData, profileData.Inventory.questRaidItems);
    // 		this.removeItem(profileData, profileData.Inventory.sortingTable);
    // 		this.logger.info(profileData.Inventory.equipment);
    // 		// Select which slots we want to keep
    // 		for (const item of profileData.Inventory.items) {
    // 			const itemWithChildren = this.itemHelper.findAndReturnChildrenAsItems(profileData.Inventory.items, item._id);
    // 			if (item.slotId) {
    // 				if (this.config.equipmentSaving[item.slotId] || item.slotId == "hideout") {
    // 					keptItems = [...keptItems, ...itemWithChildren];
    // 				} else if (!this.config.keepItemsInSecureContainer && item.slotId == EquipmentSlots.SECURED_CONTAINER) {
    // 					keptItems = [...keptItems, ...itemWithChildren];
    // 				} else {
    // 					this.removeItem(profileData, item._id);
    // 				}
    // 			} else {
    // 				keptItems.push(item);
    // 			}
    // 		}
    // 		if (this.config.keepItemsInSecureContainer) {
    // 			const original = profileData.Inventory.items.find((x) => x.slotId === "SecuredContainer");
    // 			if (original) {
    // 				this.removeItem(profileData, original._id);
    // 			}
    // 			const secureContainer = this.getSecuredContainerAndChildren(saveProgress.Inventory.items);
    // 			keptItems = [...keptItems, ...secureContainer];
    // 		}
    // 		profileData.Inventory.items = keptItems;
    // 		profileData.Inventory.fastPanel = saveProgress.Inventory.fastPanel; // Quick access items bar
    // 		profileData.InsuredItems = [];
    // 	}
    // }
    // private removeItem(profile: IPmcData, itemId: string): void {
    // 	if (!itemId) {
    // 		this.logger.warning(this.localisationService.getText("inventory-unable_to_remove_item_no_id_given"));
    // 		return;
    // 	}
    // 	// Get children of item, they get deleted too
    // 	const itemToRemoveWithChildren = this.itemHelper.findAndReturnChildrenByItems(profile.Inventory.items, itemId);
    // 	const inventoryItems = profile.Inventory.items;
    // 	const insuredItems = profile.InsuredItems;
    // 	for (const childId of itemToRemoveWithChildren) {
    // 		// We expect that each inventory item and each insured item has unique "_id", respective "itemId".
    // 		// Therefore we want to use a NON-Greedy function and escape the iteration as soon as we find requested item.
    // 		const inventoryIndex = inventoryItems.findIndex((item) => item._id === childId);
    // 		if (inventoryIndex !== -1) {
    // 			inventoryItems.splice(inventoryIndex, 1);
    // 		} else {
    // 			this.logger.warning(
    // 				this.localisationService.getText("inventory-unable_to_remove_item_id_not_found", {
    // 					childId: childId,
    // 					profileId: profile._id
    // 				})
    // 			);
    // 		}
    // 		const insuredIndex = insuredItems.findIndex((item) => item.itemId === childId);
    // 		if (insuredIndex !== -1) {
    // 			insuredItems.splice(insuredIndex, 1);
    // 		}
    // 	}
    // }
    getSecuredContainerAndChildren(items) {
        const secureContainer = items.find((x) => x.slotId === EquipmentSlots_1.EquipmentSlots.SECURED_CONTAINER);
        if (secureContainer) {
            return this.itemHelper.findAndReturnChildrenAsItems(items, secureContainer._id);
        }
        return undefined;
    }
};
exports.KeepEquipment = KeepEquipment;
exports.KeepEquipment = KeepEquipment = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("WinstonLogger")),
    __param(1, (0, tsyringe_1.inject)("SaveServer")),
    __param(2, (0, tsyringe_1.inject)("TimeUtil")),
    __param(3, (0, tsyringe_1.inject)("DatabaseService")),
    __param(4, (0, tsyringe_1.inject)("PmcChatResponseService")),
    __param(5, (0, tsyringe_1.inject)("MatchBotDetailsCacheService")),
    __param(6, (0, tsyringe_1.inject)("QuestHelper")),
    __param(7, (0, tsyringe_1.inject)("ItemHelper")),
    __param(8, (0, tsyringe_1.inject)("ProfileHelper")),
    __param(9, (0, tsyringe_1.inject)("PlayerScavGenerator")),
    __param(10, (0, tsyringe_1.inject)("HealthHelper")),
    __param(11, (0, tsyringe_1.inject)("TraderHelper")),
    __param(12, (0, tsyringe_1.inject)("TraderServicesService")),
    __param(13, (0, tsyringe_1.inject)("LocalisationService")),
    __param(14, (0, tsyringe_1.inject)("InsuranceService")),
    __param(15, (0, tsyringe_1.inject)("InRaidHelper")),
    __param(16, (0, tsyringe_1.inject)("ApplicationContext")),
    __param(17, (0, tsyringe_1.inject)("ConfigServer")),
    __param(18, (0, tsyringe_1.inject)("MailSendService")),
    __param(19, (0, tsyringe_1.inject)("RandomUtil")),
    __metadata("design:paramtypes", [typeof (_a = typeof ILogger_1.ILogger !== "undefined" && ILogger_1.ILogger) === "function" ? _a : Object, typeof (_b = typeof SaveServer_1.SaveServer !== "undefined" && SaveServer_1.SaveServer) === "function" ? _b : Object, typeof (_c = typeof TimeUtil_1.TimeUtil !== "undefined" && TimeUtil_1.TimeUtil) === "function" ? _c : Object, typeof (_d = typeof DatabaseService_1.DatabaseService !== "undefined" && DatabaseService_1.DatabaseService) === "function" ? _d : Object, typeof (_e = typeof PmcChatResponseService_1.PmcChatResponseService !== "undefined" && PmcChatResponseService_1.PmcChatResponseService) === "function" ? _e : Object, typeof (_f = typeof MatchBotDetailsCacheService_1.MatchBotDetailsCacheService !== "undefined" && MatchBotDetailsCacheService_1.MatchBotDetailsCacheService) === "function" ? _f : Object, typeof (_g = typeof QuestHelper_1.QuestHelper !== "undefined" && QuestHelper_1.QuestHelper) === "function" ? _g : Object, typeof (_h = typeof ItemHelper_1.ItemHelper !== "undefined" && ItemHelper_1.ItemHelper) === "function" ? _h : Object, typeof (_j = typeof ProfileHelper_1.ProfileHelper !== "undefined" && ProfileHelper_1.ProfileHelper) === "function" ? _j : Object, typeof (_k = typeof PlayerScavGenerator_1.PlayerScavGenerator !== "undefined" && PlayerScavGenerator_1.PlayerScavGenerator) === "function" ? _k : Object, typeof (_l = typeof HealthHelper_1.HealthHelper !== "undefined" && HealthHelper_1.HealthHelper) === "function" ? _l : Object, typeof (_m = typeof TraderHelper_1.TraderHelper !== "undefined" && TraderHelper_1.TraderHelper) === "function" ? _m : Object, typeof (_o = typeof TraderServicesService_1.TraderServicesService !== "undefined" && TraderServicesService_1.TraderServicesService) === "function" ? _o : Object, typeof (_p = typeof LocalisationService_1.LocalisationService !== "undefined" && LocalisationService_1.LocalisationService) === "function" ? _p : Object, typeof (_q = typeof InsuranceService_1.InsuranceService !== "undefined" && InsuranceService_1.InsuranceService) === "function" ? _q : Object, typeof (_r = typeof InRaidHelper_1.InRaidHelper !== "undefined" && InRaidHelper_1.InRaidHelper) === "function" ? _r : Object, typeof (_s = typeof ApplicationContext_1.ApplicationContext !== "undefined" && ApplicationContext_1.ApplicationContext) === "function" ? _s : Object, typeof (_t = typeof ConfigServer_1.ConfigServer !== "undefined" && ConfigServer_1.ConfigServer) === "function" ? _t : Object, typeof (_u = typeof MailSendService_1.MailSendService !== "undefined" && MailSendService_1.MailSendService) === "function" ? _u : Object, typeof (_v = typeof RandomUtil_1.RandomUtil !== "undefined" && RandomUtil_1.RandomUtil) === "function" ? _v : Object])
], KeepEquipment);
//# sourceMappingURL=keep.js.map