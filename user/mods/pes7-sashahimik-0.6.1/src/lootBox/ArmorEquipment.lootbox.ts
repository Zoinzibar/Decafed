import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";


export class ArmorEquipmentBox implements ICustomItem
{
    itemId: string = "shArmorEquipmentBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Equipment Box",
            newShortName: "Equipment Box",
            newDescription: "Discover rare armor and suitable equipment to dominate the battlefield. By Sasha Himik.",
            newCategory: CategoriesEnum.Barter,
            newPrice: 150,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:10,
                Width:3,
                Height:3 
            }
        })
            .changePrefab(this.itemId, "assets/content/items/containers/item_container_trackcase/item_container_trackcase.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => !(
                        item._parent === "5448e54d4bdc2dcc718b4568" || item._parent === "5645bcb74bdc2ded0b8b4578" || item._parent === "5a341c4086f77401f2541505" || item._parent === "5448e5284bdc2dcb718b4567" || item._parent === "5448e53e4bdc2d60728b4567"
                    ))
                }
            );
    }
}