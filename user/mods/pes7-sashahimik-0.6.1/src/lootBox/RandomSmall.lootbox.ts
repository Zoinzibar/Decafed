import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomSmall implements ICustomItem
{
    itemId: string = "shrandomSmall";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const randomLootBoxItems: Record<string, number> = {
          
            "shLootLubricantSmallBox":150,
            "shLootHouseholdGoodsSmallBox":150,
            "shFoodSmallBox":100,
            "shLootToolSmallBox":100,
            "shMedicineSmallBox":100,
            "shLootBuildingMaterialSmallBox":80,
            "shLootOtherSmallBox":80,
            "shLootBatterySmallBox":80,
            "shLootElectronicsSmallBox":80,
            "shrandomContainersBox1":30,
            "shLootSmallBox":10,
            "shLootInfoSmallBox":10,
            "shLootJewelrySmallBox":10,
            "shLootMedicalSuppliesSmallBox":10,
            "shskyfiLootBox":5, 
            "shStimulatorsSmallBox":5
        };        

        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Random Small Container",
            newShortName: "Random Small Container",
            newDescription: "Enter the mystical vault where each container unlocks a cascade of random containers, brimming with possibilities waiting to be revealed. Embrace the gamble, where every twist brings a new surprise! By Sasha Himik. \nContainers inside: 1-4.\nPossible drop:\nLoot Lubricant Small Box - 15 %;\nLoot Household Goods Small Box - 15 %;\nTool Small Box - 10 %;\nMedicine Small Box - 10 %;\nFood Small Box - 10 %;\nOther Small Box - 8 %;\nBattery Small Box - 8 %;\nElectronics Small Box - 8 %;\nBuilding Material Small Box - 8 %;\nRandom Containers Box I - 3 %;\nInfo Small Box - 1 %;\nJewelry Small Box - 1 %;\nSmall Loot Box - 1 %;\nMedical Supplies Small Box - 1 %;\nStimulators Small Box - 0.5 %;\nSkyfi Loot Box - 0.5 %;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 60000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Width:4,
                Height:3 
            }
        })
            .createItemOffer({
                itemId: this.itemId,
                itemPrice: 60000,
                itemCurrency: NewMoney.HRYVNIA,
                itemLoyalty: 1
            })
            .changePrefab(this.itemId, "lootboxes/loot1.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": randomLootBoxItems}
            );
    }
}