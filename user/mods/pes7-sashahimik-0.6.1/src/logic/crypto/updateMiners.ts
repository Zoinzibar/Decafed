import { ItemHelper } from "@spt/helpers/ItemHelper";
import { Item, Resource } from "@spt/models/eft/common/tables/IItem";
import { SaveServer } from "@spt/servers/SaveServer";
import { DependencyContainer } from "tsyringe";
import * as config from "../../../config/config.json";
import { WeightedRandomHelper } from "@spt/helpers/WeightedRandomHelper";
import { EventOutputHolder } from "@spt/routers/EventOutputHolder";
import { InventoryHelper } from "@spt/helpers/InventoryHelper";
import { Pes7Lib } from "../../Pes7Lib";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { IAkiProfile } from "@spt/models/eft/profile/IAkiProfile";
import { ISptProfile } from "@spt/models/eft/profile/ISptProfile";

export type UpdateMinerParams = {
    container: DependencyContainer,
    saveServer: SaveServer,
    itemHelper: ItemHelper,
    weightedRandomHelper: WeightedRandomHelper,
    eventOutputHolder: EventOutputHolder,
    inventoryHelper: InventoryHelper,
    pes7Lib: Pes7Lib,
    logger: ILogger
}

const consoleProgress = (logger: ILogger, profile: ISptProfile, minerItem: Item, resources: Resource[], minerName: string): void => 
{
    if (config.Crypto.Logging)
    {
        logger.log(`Sasha Himik[Crypto]: Processing ${minerName} for user "${profile?.info?.username}" with progress: ${minerItem?.upd?.Resource?.Value || 0}/${config.Crypto.CoinNeedValue}, fuel: ${resources.reduce((sum, current) => (sum + (current?.Value || 0)), 0) - config.Crypto.FuelConsumption}/${resources.length * 100}`, LogTextColor.GREEN);
    }
}

const minerLogic = (props: UpdateMinerParams, minerResource: Resource, minerItem: Item, gpuValue: number, profile: ISptProfile, resources: Resource[], 
    profilesId: string, minerName: string): void => 
{
    const {eventOutputHolder, inventoryHelper, itemHelper, logger, pes7Lib, saveServer, weightedRandomHelper} = props;

    if (!minerResource)
    {
        minerItem.upd.Resource = { Value: gpuValue, UnitsConsumed: 0 };
    }
    else 
    {
        minerResource.Value += gpuValue;

        consoleProgress(logger, profile, minerItem, resources, minerName);

        if (minerResource.Value >= config.Crypto.CoinNeedValue)
        {
            minerResource.Value = 0;
            const coinMined = weightedRandomHelper.getWeightedValue<string>(config.Crypto.COINS_LIST);

            const output = eventOutputHolder.getOutput(profilesId);
            const [,minedItem] = itemHelper.getItem(coinMined);
            inventoryHelper.addItemToStash(profilesId, {
                foundInRaid: true, itemWithModsToAdd: [{ ...minedItem, _tpl: minedItem._id, _id: pes7Lib.objectIdGenerator.generateObjectId() }], callback() 
                {
                    logger.log(`Sasha Himik[Crypto]: ${minerName} mined: ${minedItem._id}(1)`, LogTextColor.GREEN);
                },
                useSortingTable: false
            }, profile.characters.pmc, output)
            saveServer.saveProfile(profilesId);
        }
    }
}

const consumeFuelLogic = (resources: Resource[], fuelConsumption: number) => 
{
    for (const resource of resources) 
    {
        if (resource.Value > 0) 
        {
            resource.Value -= fuelConsumption;
            if (resource.Value < 0) 
            {
                resource.Value = 0; // Ensure it doesn't go below 0
            }
            if (resource.Value > 1) 
            {
                break; // Stop if we still have enough resource left
            }
        }
    }
};

export const minerS19Mapping = (itemHelper: ItemHelper, profile: ISptProfile, miner: Item) => 
{
    const minersWithInv: Item[] = itemHelper.findAndReturnChildrenAsItems(profile?.characters?.pmc?.Inventory?.items, miner._id);

    const minerItem = minersWithInv.find(item => item._tpl === "shS19Miner");
    const rfidSlot1 = minersWithInv.find(item => item.slotId === "GridView (1)");
    const fuelSlot1 = minersWithInv.find(item => item.slotId === "GridView (2)");
    const cpu1Slot = minersWithInv.find(item => item.slotId === "GridView (3)");
    const powerSlot1 = minersWithInv.find(item => item.slotId === "GridView (4)");
    const cpu2Slot = minersWithInv.find(item => item.slotId === "GridView (5)");
    const cpu3Slot = minersWithInv.find(item => item.slotId === "GridView (6)");
    const cpu4Slot = minersWithInv.find(item => item.slotId === "GridView (7)");
    const gpu1Slot = minersWithInv.find(item => item.slotId === "GridView (8)");
    const gpu2Slot = minersWithInv.find(item => item.slotId === "GridView (9)");
    const gpu3Slot = minersWithInv.find(item => item.slotId === "GridView (10)");
    const magneticDiskSlot1 = minersWithInv.find(item => item.slotId === "GridView (11)");
    const cpuFan1Slot = minersWithInv.find(item => item.slotId === "GridView (12)");
    const cpuFan2Slot = minersWithInv.find(item => item.slotId === "GridView (13)");
    const cpuFan3Slot = minersWithInv.find(item => item.slotId === "GridView (14)");
    const cpuFan4Slot = minersWithInv.find(item => item.slotId === "GridView (15)");
    const cpuFan5Slot = minersWithInv.find(item => item.slotId === "GridView (16)");
    const cpuFan6Slot = minersWithInv.find(item => item.slotId === "GridView (17)");
    const fuelSlot2 = minersWithInv.find(item => item.slotId === "GridView (18)");
    const powerSlot2 = minersWithInv.find(item => item.slotId === "GridView (19)");
    const rfidSlot2 = minersWithInv.find(item => item.slotId === "GridView (20)");
    const gpu4Slot = minersWithInv.find(item => item.slotId === "GridView (21)");
    const gpu5Slot = minersWithInv.find(item => item.slotId === "GridView (22)");
    const gpu6Slot = minersWithInv.find(item => item.slotId === "GridView (23)");
    const gpu7Slot = minersWithInv.find(item => item.slotId === "GridView (24)");
    const magneticDiskSlot2 = minersWithInv.find(item => item.slotId === "GridView (25)");
    const cpuFan7Slot = minersWithInv.find(item => item.slotId === "GridView (26)");
    const cpuFan8Slot = minersWithInv.find(item => item.slotId === "GridView (27)");
    const cpuFan9Slot = minersWithInv.find(item => item.slotId === "GridView (28)");
    const cpuFan10Slot = minersWithInv.find(item => item.slotId === "GridView (29)");
    const cpuFan11Slot = minersWithInv.find(item => item.slotId === "GridView (30)");
    const cpuFan12Slot = minersWithInv.find(item => item.slotId === "GridView (31)");
    const cpuFan13Slot = minersWithInv.find(item => item.slotId === "GridView (32)");
    const cpuFan14Slot = minersWithInv.find(item => item.slotId === "GridView (33)");

    if (
        rfidSlot1 && rfidSlot2 && (fuelSlot1 || fuelSlot2) && cpu1Slot && cpu2Slot && cpu3Slot && cpu4Slot &&
        powerSlot1 && powerSlot2 && (gpu1Slot || gpu2Slot || gpu3Slot || gpu4Slot || gpu5Slot || gpu6Slot || gpu7Slot) &&
        magneticDiskSlot1 && magneticDiskSlot2 &&
        cpuFan1Slot && cpuFan2Slot && cpuFan3Slot && cpuFan4Slot && cpuFan5Slot && cpuFan6Slot &&
        cpuFan7Slot && cpuFan8Slot && cpuFan9Slot && cpuFan10Slot && cpuFan11Slot && cpuFan12Slot &&
        cpuFan13Slot && cpuFan14Slot
    ) 
    {
        const resourcesSlot1 = fuelSlot1?.upd?.Resource
        const resourcesSlot2 = fuelSlot2?.upd?.Resource;
        const resources = [];
        if (!resourcesSlot1 && fuelSlot1) 
        {
            fuelSlot1.upd.Resource = { Value: 100, UnitsConsumed: 0 };
        }

        if (!resourcesSlot2 && fuelSlot2) 
        {
            fuelSlot2.upd.Resource = { Value: 100, UnitsConsumed: 0 };
            resources.push(resourcesSlot2);
        }

        if (fuelSlot1) 
        {
            resources.push(resourcesSlot1);
        }
        if (fuelSlot2) 
        {
            resources.push(resourcesSlot2);
        }

        return {
            minerItem,
            rfidSlot1,
            rfidSlot2,
            fuelSlot1,
            fuelSlot2,
            cpu1Slot,
            cpu2Slot,
            cpu3Slot,
            cpu4Slot,
            powerSlot1,
            powerSlot2,
            gpu1Slot,
            gpu2Slot,
            gpu3Slot,
            gpu4Slot,
            gpu5Slot,
            gpu6Slot,
            gpu7Slot,
            magneticDiskSlot1,
            magneticDiskSlot2,
            cpuFan1Slot,
            cpuFan2Slot,
            cpuFan3Slot,
            cpuFan4Slot,
            cpuFan5Slot,
            cpuFan6Slot,
            cpuFan7Slot,
            cpuFan8Slot,
            cpuFan9Slot,
            cpuFan10Slot,
            cpuFan11Slot,
            cpuFan12Slot,
            cpuFan13Slot,
            cpuFan14Slot,
            isPrepared: true,
            resources
        };
    }
    else 
    {
        return {
            isPrepared: false
        };
    }
};

const updateMinerS19Logic = (props: UpdateMinerParams, miners: Item[], profile: ISptProfile, profilesId: string, minerName: string): void => 
{
    const {itemHelper} = props;
    for (const miner of miners)
    {
        const {isPrepared, resources, gpu1Slot, gpu2Slot, gpu3Slot, gpu4Slot, gpu5Slot, gpu6Slot, gpu7Slot, minerItem} = minerS19Mapping(itemHelper, profile, miner);
    
        if (
            isPrepared
        ) 
        {
            const resourcesValue = resources.reduce((sum, current) => (sum + (current?.Value || 0)), 0);
            if (Math.round(resourcesValue) > 1) 
            {
                let gpuValue = 0;
                [gpu1Slot, gpu2Slot, gpu3Slot, gpu4Slot, gpu5Slot, gpu6Slot, gpu7Slot].forEach(slot => 
                {
                    if (slot?._tpl) 
                    {
                        gpuValue += config.Crypto.GPU_VALUES[slot._tpl];
                    }
                });
        
                const minerResource = minerItem?.upd?.Resource;
                minerLogic(props, minerResource, minerItem, gpuValue, profile, resources, profilesId, minerName);
                consumeFuelLogic(resources, config.Crypto.FuelConsumption);
            }
        }
    }
}

export const minerS9Mapping = (itemHelper: ItemHelper, profile: ISptProfile, miner: Item) => 
{
    const minersWithInv: Item[] = itemHelper.findAndReturnChildrenAsItems(profile?.characters?.pmc?.Inventory?.items, miner._id);
    // console.log("minersWithInv", minersWithInv);
    const minerItem = minersWithInv.find(item => item._tpl === "shS9Miner");
    const rfidSlot = minersWithInv.find(item => item.slotId === "GridView (1)");
    const fuelSlot = minersWithInv.find(item => item.slotId === "GridView (2)");
    const cpu1Slot = minersWithInv.find(item => item.slotId === "GridView (3)");
    const cpu2Slot = minersWithInv.find(item => item.slotId === "GridView (5)");
    const cpu3Slot = minersWithInv.find(item => item.slotId === "GridView (6)");
    const cpu4Slot = minersWithInv.find(item => item.slotId === "GridView (7)");
    const powerSlot = minersWithInv.find(item => item.slotId === "GridView (4)");
    const gpu1Slot = minersWithInv.find(item => item.slotId === "GridView (8)");
    const gpu2Slot = minersWithInv.find(item => item.slotId === "GridView (9)");
    const gpu3Slot = minersWithInv.find(item => item.slotId === "GridView (10)");
    const magneticDiskSlot = minersWithInv.find(item => item.slotId === "1x1 Slot");
    const cpuFan1Slot = minersWithInv.find(item => item.slotId === "1x1 Slot (1)");
    const cpuFan2Slot = minersWithInv.find(item => item.slotId === "1x1 Slot (2)");
    const cpuFan3Slot = minersWithInv.find(item => item.slotId === "1x1 Slot (3)");
    const cpuFan4Slot = minersWithInv.find(item => item.slotId === "1x1 Slot (4)");
    const cpuFan5Slot = minersWithInv.find(item => item.slotId === "1x1 Slot (5)");
    const cpuFan6Slot = minersWithInv.find(item => item.slotId === "1x1 Slot (6)");

    if (rfidSlot && fuelSlot && cpu1Slot && cpu2Slot && cpu3Slot && cpu4Slot && powerSlot
                    && (gpu1Slot || gpu2Slot || gpu3Slot) && magneticDiskSlot && cpuFan1Slot
                    && cpuFan2Slot && cpuFan3Slot && cpuFan4Slot && cpuFan5Slot && cpuFan6Slot
    )
    {
        return {
            minerItem, rfidSlot, fuelSlot, cpu1Slot, cpu2Slot, cpu3Slot, cpu4Slot, 
            powerSlot,gpu1Slot, gpu2Slot, gpu3Slot,magneticDiskSlot,cpuFan1Slot,cpuFan2Slot,cpuFan3Slot,
            cpuFan4Slot,cpuFan5Slot, cpuFan6Slot, isPrepared: true
        }
    }
    else 
    {
        return {
            isPrepared: false
        }
    }
}

const updateMinerS9Logic = (props: UpdateMinerParams, miners: Item[], profile: ISptProfile, profilesId: string, minerName: string): void => 
{
    const {itemHelper} = props;
    for (const miner of miners)
    {
        const {isPrepared, fuelSlot, gpu1Slot, gpu2Slot, gpu3Slot, minerItem} = minerS9Mapping(itemHelper, profile, miner);
    
        if (isPrepared)
        {
            // console.log("Miner S9 has all necessary parts!");
            // console.log("fuelSlot", fuelSlot);
            const resources = fuelSlot.upd?.Resource;
            if (!resources) // if 100% canister
            {
                fuelSlot.upd.Resource = { Value: 100, UnitsConsumed: 0 }
            }
            const value = resources?.Value;
            if (Math.round(value) > 1)
            {
                let gpuValue = 0;
                if (gpu1Slot?._tpl)
                {
                    gpuValue += config.Crypto.GPU_VALUES[gpu1Slot._tpl]
                }
                if (gpu2Slot?._tpl)
                {
                    gpuValue += config.Crypto.GPU_VALUES[gpu2Slot._tpl]
                }
                if (gpu3Slot?._tpl)
                {
                    gpuValue += config.Crypto.GPU_VALUES[gpu3Slot._tpl]
                }

                const minerResource = minerItem?.upd?.Resource;
                
                minerLogic(props, minerResource, minerItem, gpuValue, profile, [resources], profilesId, minerName);
                // console.log("minerResource.Value: ", minerResource?.Value);
                resources.Value -= config.Crypto.FuelConsumption;
            }
        }
    }
}

export const updateMiners = (props: UpdateMinerParams
): void => 
{
    const {saveServer} = props;
    const profiles = saveServer.getProfiles();
        
    // console.log('profiles', profiles);
    for (const profilesId in profiles) 
    {
        const profile = profiles[profilesId];

        // console.log("profile?.characters?.pmc?.Inventory?.items", profile?.characters?.pmc?.Inventory?.items);
        const minersS9: Item[] = profile?.characters?.pmc?.Inventory?.items?.filter(item => item._tpl.includes("shS9Miner"));
        if (minersS9)
        {
            // console.log('miners', miners);
            updateMinerS9Logic(props, minersS9, profile, profilesId, "S9");
        }

        const minersS19: Item[] = profile?.characters?.pmc?.Inventory?.items?.filter(item => item._tpl.includes("shS19Miner"));
        if (minersS19)
        {
            // console.log('miners', miners);
            updateMinerS19Logic(props, minersS19, profile, profilesId, "S19");
        }
    }
}