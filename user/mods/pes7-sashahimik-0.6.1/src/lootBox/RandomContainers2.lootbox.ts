import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomContainersBox2 implements ICustomItem
{
    itemId: string = "shrandomContainersBox2";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const randomLootBoxItems: Record<string, number> = {
            "shLootLubricantSmallBox":120,
            "shLootHouseholdGoodsSmallBox":120,
            "shFoodSmallBox":70,
            "shMedicineSmallBox":70,
            "shLootToolSmallBox":70,
            "shLootBuildingMaterialSmallBox":70,
            "shLootOtherSmallBox":60,
            "634959225289190e5e773b3b":60, 
            "shLootElectronicsSmallBox":50,
            "shGrenadeBox":40,
            "shFoodMediumBox":40,
            "shLootBatterySmallBox":40,
            "shMedicineMediumBox":30,
            "shLootJewelrySmallBox":30,
            "shrandomContainersBox3":30,
            "shSpecialGrenadeBox":20,
            "shLootMedicalSuppliesSmallBox":20,
            "6489bed4a53c8c047c3dc361":10, 
            "shLootInfoSmallBox":10,
            "shLootSmallBox":10,
            "shskyfiLootBox":8, 
            "shFoodLargeBox":5,
            "shStimulatorsSmallBox":5,
            "shMedicineLargeBox":5,
            "shLootMediumBox":5,
            "shLootLargeBox":1,
            "shStimulatorsMediumBox":1
        };
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Container Box II",
            newShortName: "Container Box II",
            newDescription: "Enter the mystical vault where each container unlocks a cascade of random containers, brimming with possibilities waiting to be revealed. Embrace the gamble, where every twist brings a new surprise! By Sasha Himik. \nContainers inside: 3-10.\nPossible drop:\nLubricant Small Box - 12%;\nHousehold Goods Small Box - 12%;\nFood Small Box - 7%;\nBuilding Material Small Box - 7%;\nMedicine Small Box - 7%;\nTool Small Box - 7%;\nOther Small Box - 6%;\nPumpkin Box - 6%;\nElectronics Small Box - 5%;\nBattery Small Box - 4%;\nFood Medium Box - 4%;\nGrenade Box - 4%;\nRandom Containers Box III - 3%;\nMedicine Medium Box - 3%;\nJewelry Small Box - 3%;\nSpecial Grenade Box - 2%;\nMedical Supplies Small Box - 2%;\nWeapon Container - 1%;\nInfo Small Box - 1%;\nRandom Loot Small Box - 1%;\nSkyfi Loot Box - 0.8%;\nFood Large Box - 0.5%;\nStimulators Small Box - 0.5%;\nMedicine Large Box - 0.5%;\nRandom Loot Medium Box - 0.5%;\nRandom Loot Large Box - 0.1%;\nStimulators Medium Box - 0.1%;",
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