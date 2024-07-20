import { ItemHelper } from "@spt/helpers/ItemHelper";
import { Item } from "@spt/models/eft/common/tables/IItem";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { SaveServer } from "@spt/servers/SaveServer";
import * as config from "../../../config/config.json";
import { minerS19Mapping, minerS9Mapping } from "./updateMiners";

export const logCrypto = (saveServer: SaveServer, itemHelper: ItemHelper, logger: ILogger) => 
{
    const profiles = saveServer.getProfiles();
    for (const profilesId in profiles) 
    {
        const profile = profiles[profilesId];
        // console.log("profile?.characters?.pmc?.Inventory?.items", profile?.characters?.pmc?.Inventory?.items);
        const miners: Item[] = profile?.characters?.pmc?.Inventory?.items?.filter(item => item._tpl.includes("shS9Miner"));
        if (miners)
        {
            // console.log('miners', miners);
            for (const miner of miners)
            {
                const {isPrepared, minerItem} = minerS9Mapping(itemHelper, profile, miner);

                if (isPrepared)
                {
                    logger.log(`Sasha Himik[Crypto]: ${profile.info.username} has S9 Miner ready for mining with progress: ${minerItem?.upd?.Resource?.Value || 0}/${config.Crypto.CoinNeedValue}`, LogTextColor.GREEN)
                }
            }
        }

        const minersS19: Item[] = profile?.characters?.pmc?.Inventory?.items?.filter(item => item._tpl.includes("shS19Miner"));
        if (minersS19)
        {
            // console.log('miners', miners);
            for (const miner of minersS19)
            {
                const {isPrepared, minerItem, resources} = minerS19Mapping(itemHelper, profile, miner);

                if (isPrepared)
                {
                    logger.log(`Sasha Himik[Crypto]: ${profile.info.username} has S19 Miner ready for mining with progress: ${minerItem?.upd?.Resource?.Value || 0}/${config.Crypto.CoinNeedValue}, fuel: ${resources.reduce((sum, current) => (sum + (current?.Value || 0)), 0) - config.Crypto.FuelConsumption}/${resources.length * 100}`, LogTextColor.GREEN)
                }
            }
        }
    }
    logger.log("Sasha Himik[Crypto]: initialized", LogTextColor.GREEN)
}