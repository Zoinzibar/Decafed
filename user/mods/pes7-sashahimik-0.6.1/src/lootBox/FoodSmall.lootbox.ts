import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class FoodSmallBox implements ICustomItem
{
    itemId: string = "shFoodSmallBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Small Food Box",
            newShortName: "Small Food Box",
            newDescription: "Explore a world of flavors in our Food Small Box, a delightful mix of gourmet goodies curated for your palate's pleasure. By Sasha Himik.\nItems inside:1-2;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 15000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:2,
                Width:1,
                Height:1 
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