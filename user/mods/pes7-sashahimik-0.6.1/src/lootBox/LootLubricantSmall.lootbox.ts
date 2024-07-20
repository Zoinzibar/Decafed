import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class LootLubricantSmallBox implements ICustomItem
{
    itemId: string = "shLootLubricantSmallBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Small Lubricant Box",
            newShortName: "Small Lubricant Box",
            newDescription: "Ensure everything runs smoothly with our Lubricant Box—perfect for effortless performance in any situation. By Sasha Himik.\nItems inside:1-2;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 10000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:2,
                Width:1,
                Height:1 
            }
        })
            .changePrefab(this.itemId, "assets/content/items/containers/item_container_junkbox/item_container_junkbox.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => !(
                        item._parent === "57864e4c24597754843f8723"
                    ))
                }
            );
    }
}