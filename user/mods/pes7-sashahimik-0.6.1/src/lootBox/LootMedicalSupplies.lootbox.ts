import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class LootMedicalSuppliesSmallBox implements ICustomItem
{
    itemId: string = "shLootMedicalSuppliesSmallBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Small Medical Supplies Box",
            newShortName: "Small Medical Supplies Box",
            newDescription: "Medical Supplies Box by Sasha Himik \nItems inside:1-2;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 90000,
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
                        item._parent === "57864c8c245977548867e7f1"
                    ))
                }
            );
    }
}