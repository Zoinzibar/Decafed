/* eslint-disable @typescript-eslint/naming-convention */
import { IBotConfig } from "./../../types/models/spt/config/IBotConfig.d";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { IInventoryConfig } from "@spt/models/spt/config/IInventoryConfig";
import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../../src/Pes7Lib";

export class Hrn implements ICustomItem
{
    itemId: string = "UAH";
    public main(mainProperties: MainProperties): void
    {
        const {container, fluentAssortCreator, pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "5449016a4bdc2d6f028b456f",
            parentId: "543be5dd4bdc2deb348b4569",
            newName: "Hryvnia",
            newShortName: "UAH",
            newDescription: "Hryvnia, Ukrainian currency that also have exchange on Tarkov. Main distributor: Sasha Himik.",
            newCategory: CategoriesEnum.Money,
            newPrice: 3,
            newBackgroundColor: "green",
            newProps: {
                type: "EUR"
            }
        }).createItemOffer({
            itemId: this.itemId,
            itemPrice: 3,
            itemCurrency: NewMoney.ROUBLES,
            itemLoyalty: 1
        },true,999999999).changePrefab(this.itemId, "items/hrn.bundle");

        const db = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const configs = container.resolve<ConfigServer>("ConfigServer").getConfig<IBotConfig>(ConfigTypes.BOT);

        configs.itemSpawnLimits.assault = {
            ...configs.itemSpawnLimits.assault,
            "UAH": 2
        }

        configs.walletLoot.currencyWeight = {
            ...configs.walletLoot.currencyWeight,
            "UAH": 1
        }

        configs.currencyStackSize.default = {
            ...configs.currencyStackSize.default,
            "UAH": {
                "15000": 2,
                "12000": 5,
                "6000": 15,
                "3000": 70
            }
        }

        configs.currencyStackSize.assault = {
            ...configs.currencyStackSize.assault,
            "UAH": {
                "15000": 2,
                "12000": 5,
                "6000": 15,
                "3000": 70
            }
        }

        for (const typeKey in db.bots.types) 
        {
            const type = db.bots.types[typeKey];
            if (type.generation.items.currency)
            {
                type.generation.items.currency.weights = {...type.generation.items.currency.weights, "UAH": 1}
                type.inventory.items.Pockets = {...type.inventory.items.Pockets, "UAH": 250}
            }
        }

        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const invConfig = configServer.getConfig<IInventoryConfig>(ConfigTypes.INVENTORY);
        invConfig.customMoneyTpls.push("UAH");    

        fluentAssortCreator.createSingleAssortItem(NewMoney.ROUBLES)
            .addUnlimitedStackCount()
            .addBarterCost("UAH", 0.33)
            .addLoyaltyLevel(1)
            .export(pes7Lib.databesTables.traders[pes7Lib.traderId]);

        fluentAssortCreator.createSingleAssortItem(NewMoney.DOLLARS)
            .addUnlimitedStackCount()
            .addBarterCost("UAH", 40)
            .addLoyaltyLevel(1)
            .export(pes7Lib.databesTables.traders[pes7Lib.traderId]);

        fluentAssortCreator.createSingleAssortItem(NewMoney.EUROS)
            .addUnlimitedStackCount()
            .addBarterCost("UAH", 44)
            .addLoyaltyLevel(1)
            .export(pes7Lib.databesTables.traders[pes7Lib.traderId]);
    }
}