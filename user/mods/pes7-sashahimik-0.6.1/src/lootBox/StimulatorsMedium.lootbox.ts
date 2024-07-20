import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class StimulatorsMediumBox implements ICustomItem
{
    itemId: string = "shStimulatorsMediumBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Medium Stimulators Box",
            newShortName: "Medium Stimulators Box",
            newDescription: "Boost your battle readiness with our Injectors Box—essential enhancements for peak performance in combat. By Sasha Himik.\nItems inside:5-30;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 400000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:3,
                Width:2,
                Height:1
            }
        })
            .changePrefab(this.itemId, "assets/content/items/containers/item_container_lopouch/item_container_lopouch.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": 
                    pes7Lib.getAllFixedItemsForCase((item) => item._id === "shUhilant" || !(
                        item._parent === "5448f3a64bdc2d60728b456a"
                    ))
                }
            );
    }
}