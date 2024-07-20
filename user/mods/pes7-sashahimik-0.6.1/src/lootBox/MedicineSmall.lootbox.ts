import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class MedicineSmallBox implements ICustomItem
{
    itemId: string = "shMedicineSmallBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Small Medicine Box",
            newShortName: "Small Medicine Box",
            newDescription: "Discover wellness in every box with our Medicine Box—packed with essential remedies and supplements for your everyday health needs. By Sasha Himik.\nItems inside:1-2;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 16000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:2,
                Width:1,
                Height:1 
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