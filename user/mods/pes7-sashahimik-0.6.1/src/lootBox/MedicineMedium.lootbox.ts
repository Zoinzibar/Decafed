import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class MedicineMediumBox implements ICustomItem
{
    itemId: string = "shMedicineMediumBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Medium Medicine Box",
            newShortName: "Medium Medicine Box",
            newDescription: "Discover wellness in every box with our Medicine Box—packed with essential remedies and supplements for your everyday health needs. By Sasha Himik.\nItems inside:3-8;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 48000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:5,
                Width:2,
                Height:2
            }
        })
            .changePrefab(this.itemId, "assets/content/items/equipment/backpack_medpack/bp_medpack.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => !(
                        item._parent === "5448f3ac4bdc2dce718b4569"
                    ))
                }
            );
    }
}