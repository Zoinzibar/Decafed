import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class GrenadeBox implements ICustomItem
{
    itemId: string = "shGrenadeBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Grenade Box",
            newShortName: "Grenade Box",
            newDescription: "Fuel your tactics with our Grenades Box—packed with strategic surprises for any mission. By Sasha Himik.\nItems inside:2-7;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 40000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:4,
                Width:2,
                Height:2 
            }
        })
            .changePrefab(this.itemId, "assets/content/items/containers/item_container_grenadebox/item_container_grenadebox.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => !(
                        item._parent === "543be6564bdc2df4348b4568"
                    ))
                }
            );
    }
}