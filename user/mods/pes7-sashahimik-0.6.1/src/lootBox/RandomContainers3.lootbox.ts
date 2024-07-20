import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomContainersBox3 implements ICustomItem
{
    itemId: string = "shrandomContainersBox3";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const randomLootBoxItems: Record<string, number> = {
            "shFoodSmallBox":70,
            "shMedicineSmallBox":70,
            "shLootToolSmallBox":70,
            "shLootBuildingMaterialSmallBox":70,
            "shLootOtherSmallBox":60,
            "shLootLubricantSmallBox":60,
            "634959225289190e5e773b3b":60, 
            "shLootHouseholdGoodsSmallBox":60,
            "shLootElectronicsSmallBox":50,
            "shGrenadeBox":40,
            "shFoodMediumBox":40,
            "shLootBatterySmallBox":40,
            "shMedicineMediumBox":40,
            "shLootJewelrySmallBox":40,
            "shSpecialGrenadeBox":40,
            "shLootMedicalSuppliesSmallBox":40,
            "shrandomContainersBox4":20,
            "6489bed4a53c8c047c3dc361":20, 
            "shLootInfoSmallBox":20,
            "shLootSmallBox":20,
            "shskyfiLootBox":20, 
            "shFoodLargeBox":10,
            "shStimulatorsSmallBox":10,
            "shMedicineLargeBox":10,
            "shLootMediumBox":10,
            "shLootLargeBox":5,
            "shStimulatorsMediumBox":5
        };        
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Container Box III",
            newShortName: "Container Box III",
            newDescription: "Enter the mystical vault where each container unlocks a cascade of random containers, brimming with possibilities waiting to be revealed. Embrace the gamble, where every twist brings a new surprise! By Sasha Himik. \nContainers inside: 3-10.\nPossible drop:\nFood Small Box - 7%;\nTool Small Box - 7%;\nMedicine Small Box - 7%;\nBuilding Material Small Box - 7%;\nPumpkin Box - 6%;\nOther Small Box - 6%;\nLubricant Small Box - 6%;\nHousehold Goods Small Box - 6%;\nElectronics Small Box - 5%;\nGrenade Box - 4%;\nFood Medium Box - 4%;\nBattery Small Box - 4%;\nJewelry Small Box - 4%;\nMedicine Medium Box - 4%;\nSpecial Grenade Box - 4%;\nMedical Supplies Small Box - 4%;\nInfo Small Box - 2%;\nSkyfi Loot Box - 2%;\nWeapon Container - 2%;\nRandom Loot Small Box - 2%;\nRandom Containers Box IV - 2%;\nFood Large Box - 1%;\nMedicine Large Box - 1%;\nStimulators Small Box - 1%;\nRandom Loot Medium Box - 1%;\nRandom Loot Large Box - 0.5%;\nStimulators Medium Box - 0.5%;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 15000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Width:3,
                Height:4 
            }
        })  
            .changePrefab(this.itemId, "lootboxes/loot4.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": randomLootBoxItems}
            );
    }
}