import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomMedium implements ICustomItem
{
    itemId: string = "shrandomMedium";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const randomLootBoxItems: Record<string, number> = {

            "shLootLubricantSmallBox":125,
            "shLootHouseholdGoodsSmallBox":125,
            "shFoodSmallBox":85,
            "shLootBuildingMaterialSmallBox":85,
            "shMedicineSmallBox":75,
            "shLootToolSmallBox":70,     
            "634959225289190e5e773b3b":60,
            "shLootOtherSmallBox":50,
            "shLootElectronicsSmallBox":50,
            "shLootBatterySmallBox":40,
            "shGrenadeBox":30,
            "shFoodMediumBox":30,
            "shskyfiLootBox":20, 
            "shMedicineMediumBox":20,
            "shLootJewelrySmallBox":20,
            "shrandomContainersBox1":20,
            "shLootSmallBox":10,
            "shLootInfoSmallBox":10,
            "shSpecialGrenadeBox":10,
            "shStimulatorsSmallBox":10,
            "shrandomContainersBox2":10,
            "shLootMedicalSuppliesSmallBox":10,
            "shLootMediumBox":7,
            "shStimulatorsMediumBox":3
        };        
        
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Random Medium Container",
            newShortName: "Random Medium Container",
            newDescription: "Enter the mystical vault where each container unlocks a cascade of random containers, brimming with possibilities waiting to be revealed. Embrace the gamble, where every twist brings a new surprise! By Sasha Himik. \nContainers inside: 2-10.\nPossible drop:\nLubricant Small Box - 12.5%;\nHousehold Goods Small Box - 12.5%;\nSmall Box - 8.5%;\nBuildingMaterialSmallBox - 8.5%;\nMedicine Small Box - 7.5%;\nTool Small Box - 7%;\n Pumpkin Box - 6%;\nOther Small Box - 5%;\nElectronics Small Box - 5%;\nBattery Small Box - 4%;\nGrenade Box - 3%;\nFood Medium Box - 3%;\nSkyfi Loot Box - 2%;\nMedicine Medium Box - 2%;\nJewelry Small Box - 2%;\nRandom Containers Box I - 2%;\nRandom Loot Small Box - 1%;\nInfo Small Box - 1%;\nSpecial Grenade Box - 1%;\nStimulators Small Box - 1%;\nRandom Containers Box II - 1%;\nMedical SuppliesSmall Box - 1%;\nRandom Loot Medium Box - 0.7%;\nStimulators Medium Box - 0.3%;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 180000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Width:4,
                Height:3
            }
        })
            .createItemOffer({
                itemId: this.itemId,
                itemPrice: 180000,
                itemCurrency: NewMoney.HRYVNIA,
                itemLoyalty: 1
            })
            .changePrefab(this.itemId, "lootboxes/loot2.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": randomLootBoxItems}
            );
    }
}