import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomContainersBox4 implements ICustomItem
{
    itemId: string = "shrandomContainersBox4";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const randomLootBoxItems: Record<string, number> = {
            "shLootElectronicsSmallBox":70,
            "shLootHouseholdGoodsSmallBox":70,
            "shGrenadeBox":40,
            "shFoodSmallBox":40,
            "shskyfiLootBox":40, 
            "shLootSmallBox":40,
            "shFoodMediumBox":40,
            "shLootInfoSmallBox":40,
            "shMedicineSmallBox":40,
            "shLootToolSmallBox":40,
            "shLootOtherSmallBox":40,
            "shMedicineMediumBox":40,
            "shLootBatterySmallBox":40,
            "shLootJewelrySmallBox":40,
            "shLootLubricantSmallBox":40,
            "634959225289190e5e773b3b":40, 
            "shLootBuildingMaterialSmallBox":40,
            "shFoodLargeBox":30,
            "shLootMediumBox":30,
            "shMedicineLargeBox":30,
            "shSpecialGrenadeBox":30,
            "shStimulatorsSmallBox":30,
            "6489bed4a53c8c047c3dc361":30, 
            "shLootMedicalSuppliesSmallBox":30,
            "shLootLargeBox":20,
            "shStimulatorsMediumBox":20,
            "shrandomContainersBox5":10
        };   

        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Container Box IV",
            newShortName: "Container Box IV",
            newDescription: "Enter the mystical vault where each container unlocks a cascade of random containers, brimming with possibilities waiting to be revealed. Embrace the gamble, where every twist brings a new surprise! By Sasha Himik. \nContainers inside: 3-10.\nPossible drop:\nElectronics Small Box - 7%;\nHousehold Goods Small Box - 7%;\nPumpkin Box - 4%;\nGrenade Box - 4%;\nFood Small Box - 4%;\nTool Small Box - 4%;\nOther Small Box - 4%;\nFood Medium Box - 4%;\nBattery Small Box - 4%;\nJewelry Small Box - 4%;\nMedicine Small Box - 4%;\nLubricant Small Box - 4%;\nMedicine Medium Box - 4%;\nSpecial Grenade Box - 4%;\nRandom Loot Small Box - 4%;\nMedical Supplies Small Box - 4%;\nBuilding Material Small Box - 4%;\nFood Large Box - 3%;\nMedicine Large Box - 3%;\nStimulators Small Box - 3%;\nRandom Loot Medium Box - 3%;\nInfo Small Box - 2%;\nSkyfi Loot Box - 2%;\nWeapon Container - 2%;\nRandom Loot Large Box - 2%;\nStimulators Medium Box - 2%;\nRandom Containers Box V - 1%;",
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