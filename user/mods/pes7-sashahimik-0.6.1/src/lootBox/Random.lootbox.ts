import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomLootBox implements ICustomItem
{
    itemId: string = "new";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Loot Box",
            newShortName: "Loot Box",
            newDescription: "What is inside??? By Sasha Himik.",
            newCategory: CategoriesEnum.Barter,
            newPrice: 165000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:2,
                Width:2,
                Height:1 
            }
        })
            .createItemOffer({
                itemId: this.itemId,
                itemPrice: 165000,
                itemCurrency: NewMoney.ROUBLES,
                itemLoyalty: 1
            })
            .changePrefab(this.itemId, "containers/safe/assholesafecontainerv2.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase()
                }
            );
    }
}