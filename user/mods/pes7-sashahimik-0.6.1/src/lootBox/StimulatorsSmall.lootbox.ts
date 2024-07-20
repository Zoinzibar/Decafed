import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class StimulatorsSmallBox implements ICustomItem
{
    itemId: string = "shStimulatorsSmallBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Small Stimulators Box",
            newShortName: "Small Stimulators Box",
            newDescription: "Boost your battle readiness with our Injectors Box—essential enhancements for peak performance in combat. By Sasha Himik.\nItems inside:3-10;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 125000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:1,
                Width:1,
                Height:1
            }
        })
            .changePrefab(this.itemId, "assets/content/items/barter/item_container_injectorcase/item_container_injectorcase.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) =>item._id === "shUhilant" || !(
                        item._parent === "5448f3a64bdc2d60728b456a"
                    ))
                }
            );
    }
}