import { InraidController } from "@spt-aki/controllers/InraidController";
import { PlayerScavGenerator } from "@spt-aki/generators/PlayerScavGenerator";
import { HealthHelper } from "@spt-aki/helpers/HealthHelper";
import { InRaidHelper } from "@spt-aki/helpers/InRaidHelper";
import { ItemHelper } from "@spt-aki/helpers/ItemHelper";
import { ProfileHelper } from "@spt-aki/helpers/ProfileHelper";
import { QuestHelper } from "@spt-aki/helpers/QuestHelper";
import { TraderHelper } from "@spt-aki/helpers/TraderHelper";
import { ILocationBase } from "@spt-aki/models/eft/common/ILocationBase";
import { IPmcData } from "@spt-aki/models/eft/common/IPmcData";
import { ISaveProgressRequestData } from "@spt-aki/models/eft/inRaid/ISaveProgressRequestData";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { IAirdropConfig } from "@spt-aki/models/spt/config/IAirdropConfig";
import { IInRaidConfig } from "@spt-aki/models/spt/config/IInRaidConfig";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { SaveServer } from "@spt-aki/servers/SaveServer";
import { InsuranceService } from "@spt-aki/services/InsuranceService";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { TimeUtil } from "@spt-aki/utils/TimeUtil";
import { inject, injectable } from "tsyringe";
import { PlayerRaidEndState } from "@spt-aki/models/enums/PlayerRaidEndState";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { LogBackgroundColor } from "@spt-aki/models/spt/logging/LogBackgroundColor";

// local import
import { ApplicationContext } from "@spt-aki/context/ApplicationContext";
import { InventoryHelper } from "@spt-aki/helpers/InventoryHelper";
import { Item } from "@spt-aki/models/eft/common/tables/IItem";
import { MatchBotDetailsCacheService } from "@spt-aki/services/MatchBotDetailsCacheService";
import { PmcChatResponseService } from "@spt-aki/services/PmcChatResponseService";
import * as config from "../config/config.json";

import { VFS } from "@spt-aki/utils/VFS";
import { QuestStatus } from "@spt-aki/models/enums/QuestStatus";
import { MailSendService } from "@spt-aki/services/MailSendService";
import { TraderServicesService } from "@spt-aki/services/TraderServicesService";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { IBTRConfig } from "@spt-aki/models/spt/config/IBTRConfig";
import { ITraderConfig } from "@spt-aki/models/spt/config/ITraderConfig";

@injectable()
export class NLE extends InraidController {
  protected airdropConfig: IAirdropConfig;
  protected btrConfig: IBTRConfig;
  protected inraidConfig: IInRaidConfig;
  protected traderConfig: ITraderConfig;

  // We need to make sure we use the constructor and pass the dependencies to the parent class!
  constructor(
    @inject("WinstonLogger") protected logger: ILogger,
    @inject("SaveServer") protected saveServer: SaveServer,
    @inject("JsonUtil") protected jsonUtil: JsonUtil,
    @inject("TimeUtil") protected timeUtil: TimeUtil,
    @inject("DatabaseServer") protected databaseServer: DatabaseServer,
    @inject("PmcChatResponseService") protected pmcChatResponseService: PmcChatResponseService,
    @inject("MatchBotDetailsCacheService") protected matchBotDetailsCacheService: MatchBotDetailsCacheService,
    @inject("QuestHelper") protected questHelper: QuestHelper,
    @inject("ItemHelper") protected itemHelper: ItemHelper,
    @inject("ProfileHelper") protected profileHelper: ProfileHelper,
    @inject("PlayerScavGenerator") protected playerScavGenerator: PlayerScavGenerator,
    @inject("HealthHelper") protected healthHelper: HealthHelper,
    @inject("TraderHelper") protected traderHelper: TraderHelper,
    @inject("TraderServicesService") protected traderServicesService: TraderServicesService,
    @inject("InsuranceService") protected insuranceService: InsuranceService,
    @inject("InRaidHelper") protected inRaidHelper: InRaidHelper,
    @inject("ApplicationContext") protected applicationContext: ApplicationContext,
    @inject("ConfigServer") protected configServer: ConfigServer,
    @inject("MailSendService") protected mailSendService: MailSendService,
    @inject("RandomUtil") protected randomUtil: RandomUtil,
    @inject("InventoryHelper") protected inventoryHelper: InventoryHelper,
    @inject("VFS") protected vfs: VFS,

  ) {
    super(logger,
      saveServer,
      jsonUtil,
      timeUtil,
      databaseServer,
      pmcChatResponseService, matchBotDetailsCacheService, questHelper, itemHelper,
      profileHelper, playerScavGenerator, healthHelper,
      traderHelper, traderServicesService, insuranceService, inRaidHelper, applicationContext, configServer, mailSendService, randomUtil);
    this.airdropConfig = this.configServer.getConfig(ConfigTypes.AIRDROP);
    this.btrConfig = this.configServer.getConfig(ConfigTypes.BTR);
    this.inraidConfig = this.configServer.getConfig(ConfigTypes.IN_RAID);
    this.traderConfig = this.configServer.getConfig(ConfigTypes.TRADER);
  }

  public override savePostRaidProgress(offraidData: ISaveProgressRequestData, sessionID: string): void {
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
  protected savePmcProgress(sessionID: string, postRaidRequest: ISaveProgressRequestData): void {
    const serverProfile = this.saveServer.getProfile(sessionID);

    const locationName = serverProfile.inraid.location.toLowerCase();

    const map: ILocationBase = this.databaseServer.getTables().locations[locationName].base;
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

    postRaidRequest.profile.Inventory.items = this.itemHelper.replaceIDs(
      postRaidRequest.profile.Inventory.items,
      postRaidRequest.profile,
      serverPmcProfile.InsuredItems,
      postRaidRequest.profile.Inventory.fastPanel,
    );

    this.inRaidHelper.addUpdToMoneyFromRaid(postRaidRequest.profile.Inventory.items);


    // skips overwriting the new inventory if restoreInitialKit is enabled and player is dead
    // if true disables Insurance
    if (config.restoreInitialKit && isDead) {
      this.logger.log("PMC DIED!!!", "red", "white");
      this.logger.log("RESTORING INITIAL EQUIPPMENT!!!", "green");
      mapHasInsuranceEnabled = false;
    } else {
      this.logger.log("pmc alive!!!", "green");
      this.inRaidHelper.setInventory(sessionID, serverPmcProfile, postRaidRequest.profile);
    }

    this.healthHelper.saveVitality(serverPmcProfile, postRaidRequest.health, sessionID);

    // Get array of insured items+child that were lost in raid
    const gearToStore = this.insuranceService.getGearLostInRaid(
      serverPmcProfile,
      postRaidRequest,
      preRaidGear,
      sessionID,
      isDead,
    );

    if (gearToStore.length > 0) {
      this.insuranceService.storeGearLostInRaidToSendLater(sessionID, gearToStore);
    }

    // Edge case - Handle usec players leaving lighthouse with Rogues angry at them
    if (locationName === "lighthouse" && postRaidRequest.profile.Info.Side.toLowerCase() === "usec") {
      // Decrement counter if it exists, don't go below 0
      const remainingCounter = serverPmcProfile?.Stats.Eft.OverallCounters.Items.find((x) =>
        x.Key.includes("UsecRaidRemainKills")
      );
      if (remainingCounter?.Value > 0) {
        remainingCounter.Value--;
      }
    }

    if (isDead) {
      this.pmcChatResponseService.sendKillerResponse(
        sessionID,
        serverPmcProfile,
        postRaidRequest.profile.Stats.Eft.Aggressor,
      );
      this.matchBotDetailsCacheService.clearCache();

      this.performPostRaidActionsWhenDead(postRaidRequest, serverPmcProfile, sessionID);
    }
    else {
      // Not dead

      // Check for cultist amulets in special slot (only slot it can fit)
      const amuletOnPlayer = serverPmcProfile.Inventory.items.filter((item) =>
        item.slotId?.startsWith("SpecialSlot")
      ).find((item) => item._tpl === "64d0b40fbe2eed70e254e2d4");
      if (amuletOnPlayer) {
        // No charges left, delete it
        if (amuletOnPlayer.upd.CultistAmulet.NumberOfUsages <= 0) {
          serverPmcProfile.Inventory.items.splice(
            serverPmcProfile.Inventory.items.indexOf(amuletOnPlayer),
            1,
          );
        }
        else if (amuletOnPlayer.upd.CultistAmulet.NumberOfUsages > 0) {
          // Charges left, reduce by 1
          amuletOnPlayer.upd.CultistAmulet.NumberOfUsages--;
        }
      }
    }

    const victims = postRaidRequest.profile.Stats.Eft.Victims.filter((x) =>
      ["sptbear", "sptusec"].includes(x.Role.toLowerCase())
    );
    if (victims?.length > 0) {
      this.pmcChatResponseService.sendVictimResponse(sessionID, victims, serverPmcProfile);
    }

    this.insuranceService.sendInsuredItems(serverPmcProfile, sessionID, map.Id);
  }

  protected filterItemsByParentIdRecursive(items: Item[], parentId: String): Item[] {
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

  protected markOrRemoveFoundInRaidItems(postRaidRequest: ISaveProgressRequestData): void {

    if (postRaidRequest.exit !== PlayerRaidEndState.SURVIVED && !config.keepFoundInRaidStatus) {
      // Remove FIR status if the player haven't survived
      postRaidRequest.profile = this.inRaidHelper.removeSpawnedInSessionPropertyFromItems(postRaidRequest.profile);
    }
  }

  protected performPostRaidActionsWhenDead(
    postRaidSaveRequest: ISaveProgressRequestData,
    pmcData: IPmcData,
    sessionID: string,
  ): IPmcData {
    this.updatePmcHealthPostRaid(postRaidSaveRequest, pmcData);

    if (config.restoreInitialKit && config.keepSecuredContainer) {
      this.logger.logWithColor("KEEPING SECURED CONTAINER!!!", LogTextColor.YELLOW, LogBackgroundColor.RED);

      this.keepSecuredContainer(postRaidSaveRequest.profile.Inventory.items, pmcData, sessionID);
    }


    if (this.inRaidHelper.removeQuestItemsOnDeath()) {
      // Find and remove the completed condition from profile if player died, otherwise quest is stuck in limbo
      // and quest items cannot be picked up again
      const allQuests = this.questHelper.getQuestsFromDb();
      const activeQuestIdsInProfile = pmcData.Quests.filter((x) =>
        ![QuestStatus.AvailableForStart, QuestStatus.Success, QuestStatus.Expired].includes(x.status)
      ).map((x) => x.qid);
      for (const questItem of postRaidSaveRequest.profile.Stats.Eft.CarriedQuestItems) {
        // Get quest/find condition for carried quest item
        const questAndFindItemConditionId = this.questHelper.getFindItemConditionByQuestItem(
          questItem,
          activeQuestIdsInProfile,
          allQuests,
        );
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
  private keepSecuredContainer(offRaidItems: Item[], pmcData: IPmcData, sessionID: string): void {

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

  private replaceParentId(items: Item[], oldParentId: string, newParentId: string): Item[] {
    var stack = [...items];

    stack.forEach(item => {
      if (item.parentId === oldParentId) {
        item.parentId = newParentId;
      }
    });

    return stack;
  }
}