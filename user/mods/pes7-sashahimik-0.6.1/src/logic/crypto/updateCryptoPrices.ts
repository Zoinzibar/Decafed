import { ILogger } from "@spt/models/spt/utils/ILogger";
import { getCryptoPrices } from "./getCryptoPrices";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { ETH3 } from "src/items/treasures/ethercoin";
import { TRC700000 } from "src/items/treasures/terracoin";
import { TON1000 } from "src/items/treasures/toncoin";

export const updateCryptoPrices = async (databaseServer: DatabaseServer, eth3: ETH3, trc700000 :TRC700000, ton1000: TON1000, logger: ILogger): Promise<void> => 
{
    const prices = await getCryptoPrices(logger);
    //update prices for crypto

    //for new crypto convert to UAH and update
    const tables = databaseServer.getTables();
    const handbook = tables.templates.handbook;

    const bitcoin = handbook.Items.find(x => x.Id == "59faff1d86f7746c51718c9c");
    const eth = handbook.Items.find(x => x.Id == eth3.itemId);
    const trc = handbook.Items.find(x => x.Id == trc700000.itemId);
    const ton = handbook.Items.find(x => x.Id == ton1000.itemId);

    const btcNewPrice = prices?.find(x=> x?.id === "bitcoin")?.price * 0.2;
    const ethNewPrice = prices?.find(x=> x?.id === "ethereum")?.price * eth3.count;
    const trcNewPrice = prices?.find(x=> x?.id === "terracoin")?.price * trc700000.count;
    const tonNewPrice = prices?.find(x=> x?.id === "the-open-network")?.price * ton1000.count;
    if (btcNewPrice)
    {
        bitcoin.Price = btcNewPrice;
        logger.log(`Sasha Himik[Crypto]: BTC Price Updated to ${btcNewPrice}`, LogTextColor.GREEN);
    }
    if (ethNewPrice)
    {
        eth.Price = ethNewPrice;
        logger.log(`Sasha Himik[Crypto]: ETH Price Updated to ${ethNewPrice}`, LogTextColor.GREEN);
    }
    if (trcNewPrice)
    {
        trc.Price = trcNewPrice;
        logger.log(`Sasha Himik[Crypto]: TRC Price Updated to ${trcNewPrice}`, LogTextColor.GREEN);
    }
    if (tonNewPrice)
    {
        ton.Price = tonNewPrice;
        logger.log(`Sasha Himik[Crypto]: TON Price Updated to ${tonNewPrice}`, LogTextColor.GREEN);
    }
}