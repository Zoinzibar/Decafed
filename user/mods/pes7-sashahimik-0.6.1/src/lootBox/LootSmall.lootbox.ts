import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class LootSmallBox implements ICustomItem
{
    itemId: string = "shLootSmallBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Small Loot Box",
            newShortName: "Small Loot Box",
            newDescription: "Unlock the mystery of the Random Loot Box—a Pandora's chest of surprises! Each reveal promises a thrilling mix of treasures, from the curious to the coveted. By Sasha Himik.\nItems inside:3-8",
            newCategory: CategoriesEnum.Barter,
            newPrice: 100000,
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
                        item._parent === "590c745b86f7743cc433c5f2"
                        || item._parent === "57864ada245977548638de91"
                        || item._parent === "57864a66245977548f04a81f"
                        || item._parent === "57864ee62459775490116fc1"
                        || item._parent === "57864e4c24597754843f8723"
                        || item._parent === "57864c322459775490116fbf"
                        || item._parent === "57864c8c245977548867e7f1"
                        || item._parent === "57864bb7245977548b3b66c2"
                        || item._parent === "57864a3d24597754843f8721"
                        || item._parent === "5448ecbe4bdc2d60728b4568"
                    ))
                }
            );
    }
}