import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class LootToolSmallBox implements ICustomItem
{
    itemId: string = "shLootToolSmallBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Small Tool Box",
            newShortName: "Small Tool Box",
            newDescription: "Unleash your inner handyman with our Tool Box—a powerhouse of precision and versatility, perfect for tackling any project with confidence and flair. By Sasha Himik.\nItems inside:1-2;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 17000,
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
                        item._parent === "57864bb7245977548b3b66c2"
                    ))
                }
            );
    }
}