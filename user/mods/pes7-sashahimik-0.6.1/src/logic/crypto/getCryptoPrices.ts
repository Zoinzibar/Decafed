/* eslint-disable @typescript-eslint/naming-convention */
import { ILogger } from "@spt/models/spt/utils/ILogger";
import * as config from "../../../config/config.json";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";

export const getCryptoPrices = async (logger: ILogger) => 
{
    const url = "https://api.coingecko.com/api/v3/coins/markets";
    const params = {
        ids: "bitcoin,ethereum,terracoin,the-open-network",
        vs_currency: "rub"
    };

    // Construct query string
    const queryString = new URLSearchParams(params).toString();
    const apiUrl = `${url}?${queryString}`;
  
    try 
    {
        const response = await fetch(apiUrl);
        if (!response.ok) 
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data?.map(resp => ({id: resp?.id, price: resp?.current_price})
        );
    }
    catch (error) 
    {
        if (config.ServerHostsSettings.MakeFetchPriceWarningToError)
        {
            logger.error(`Error fetching crypto data: ${error}`);
            logger.log(`Don't worry about it, we have standard prices for them, just wait ${config.Crypto.UpdateCryptoPriceOnline.Interval/1000} seconds for next update. Or restart server.`, LogTextColor.YELLOW)
        }
    }
}