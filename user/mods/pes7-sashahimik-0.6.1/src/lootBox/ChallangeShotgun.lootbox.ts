import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class ChallangeShotgunBox implements ICustomItem
{
    itemId: string = "shChallangeShotgunBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Shotgun Box",
            newShortName: "Shotgun Box",
            newDescription: "What is inside??? By Sasha Himik.",
            newCategory: CategoriesEnum.Barter,
            newPrice: 150,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:10,
                Width:5,
                Height:2 
            }
        })
            .changePrefab(this.itemId, "assets/content/items/containers/item_container_weapon_thicc/item_container_weapon_thicc.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => !(
                        item._parent === "5447b6094bdc2dc3278b4567"
                    ))
                }
            );
    }
}