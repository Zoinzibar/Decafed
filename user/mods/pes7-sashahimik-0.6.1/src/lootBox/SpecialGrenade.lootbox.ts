import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class SpecialGrenadeBox implements ICustomItem
{
    itemId: string = "shSpecialGrenadeBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH SpecialGrenade Box",
            newShortName: "SpecialGrenade Box",
            newDescription: "Fuel your tactics with our Grenades Box—packed with strategic surprises for any mission. By Sasha Himik.\nItems inside:3-15;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 15000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:10,
                Width:3,
                Height:3 
            }
        })
            .changePrefab(this.itemId, "assets/content/items/containers/item_container_grenadebox/item_container_grenadebox.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => !(
                        item._parent === "543be6564bdc2df4348b4568"
                        || item._id === "5ede47405b097655935d7d16"
                        || item._id === "5ede475b549eed7c6d5c18fb"
                        || item._id === "5ede4739e0350d05467f73e8"
                        || item._id === "5f0c892565703e5c461894e9"
                        || item._id === "5ede474b0c226a66f5402622"
                        || item._id === "5ede475339ee016e8c534742"
                    ))
                }
            );
    }
}