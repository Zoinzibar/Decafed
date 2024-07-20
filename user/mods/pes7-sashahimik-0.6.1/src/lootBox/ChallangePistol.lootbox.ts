import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class ChallangePistolBox implements ICustomItem
{
    itemId: string = "shChallangePistolBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Pistol Box",
            newShortName: "Pistol Box",
            newDescription: "What is inside??? By Sasha Himik.",
            newCategory: CategoriesEnum.Barter,
            newPrice: 150,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:2,
                Width:2,
                Height:2 
            }
        })
            .changePrefab(this.itemId, "assets/content/items/containers/pistol_case/item_container_pistol_case.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => !(
                        item._props.weapClass === "pistol"
                    ))
                }
            );
    }
}