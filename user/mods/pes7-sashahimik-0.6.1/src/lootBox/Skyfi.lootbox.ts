/* eslint-disable @typescript-eslint/naming-convention */
import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class SkyfiLootBox implements ICustomItem
{
    itemId: string = "shskyfiLootBox";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const skyfiLootBoxItems: Record<string, number> = {"UAH": 3, "5c94bbff86f7747ee735c08f": 1, "5b4391a586f7745321235ab2": 2, "shSeniorStim": 2, "5efb0da7a29a85116f6ea05f": 3, "628e4e576d783146b124c64d": 1, "5c093e3486f77430cb02e593": 1, "5e2aedd986f7746d404f3aa4": 2, "5e2aee0a86f774755a234b62": 1, "5d03794386f77420415576f5": 1, "5d03775b86f774203e7e0c4b": 1, "5c12620d86f7743f8b198b72": 1, "5c052fb986f7746b2101e909": 1, "57347ca924597744596b4e71": 1, "5d1b2ffd86f77425243e8d17": 1, "6389c70ca33d8c4cdf4932c6": 3, "590c392f86f77444754deb29": 1, "590c621186f774138d11ea29": 2 };

        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Skyfi Box",
            newShortName: "Skyfi Box",
            newDescription: "Skyfi Box by Sasha Himik \nItems inside:1-3;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 15000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Weight:2,
                Width:2,
                Height:1 
            }
        })
            .createItemOffer({
                itemId: this.itemId,
                itemPrice: 150000,
                itemCurrency: NewMoney.HRYVNIA,
                itemLoyalty: 1
            })
            .changePrefab(this.itemId, "containers/skyficontainer.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": skyfiLootBoxItems}
            );
    }
}