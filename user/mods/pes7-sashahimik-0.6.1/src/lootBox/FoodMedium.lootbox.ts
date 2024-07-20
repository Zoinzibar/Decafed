import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class FoodMediumBox implements ICustomItem
{
    itemId: string = "shFoodMediumBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Medium Food Box",
            newShortName: "Medium Food Box",
            newDescription: "Explore a world of flavors in our Food Small Box, a delightful mix of gourmet goodies curated for your palate's pleasure. By Sasha Himik.\nItems inside:3-8;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 40000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:5,
                Width:2,
                Height:2
            }
        })
            .changePrefab(this.itemId, "assets/content/items/containers/item_container_food/item_container_food.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => !(
                        item._parent === "5448e8d64bdc2dce718b4568" || item._parent === "5448e8d04bdc2ddf718b4569"
                    ))
                }
            );
    }
}