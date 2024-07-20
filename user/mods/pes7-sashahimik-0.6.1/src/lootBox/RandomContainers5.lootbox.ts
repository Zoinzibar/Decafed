import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomContainersBox5 implements ICustomItem
{
    itemId: string = "shrandomContainersBox5";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const randomLootBoxItems: Record<string, number> = {
            "shFoodLargeBox":100,
            "shLootMediumBox":100,
            "shMedicineLargeBox":100,
            "shStimulatorsSmallBox":100,
            "shGrenadeBox":50,
            "shLootLargeBox":50,
            "shLootSmallBox":50,
            "shskyfiLootBox":50, 
            "shFoodMediumBox":50,
            "shMedicineMediumBox":50,
            "shSpecialGrenadeBox":50,
            "shStimulatorsMediumBox":50,
            "6489bed4a53c8c047c3dc361":50, 
            "shLootInfoSmallBox":30,
            "shFoodSmallBox":10,
            "shMedicineSmallBox":10,
            "shLootToolSmallBox":10,
            "shLootOtherSmallBox":10,
            "shLootBatterySmallBox":10,
            "shLootJewelrySmallBox":10,
            "shLootLubricantSmallBox":10,
            "634959225289190e5e773b3b":10, 
            "shLootElectronicsSmallBox":10,
            "shLootHouseholdGoodsSmallBox":10,
            "shLootMedicalSuppliesSmallBox":10,
            "shLootBuildingMaterialSmallBox":10
        };        
 
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Container Box V",
            newShortName: "Container Box V",
            newDescription: "Enter the mystical vault where each container unlocks a cascade of random containers, brimming with possibilities waiting to be revealed. Embrace the gamble, where every twist brings a new surprise! By Sasha Himik. \nContainers inside: 3-10.\nPossible drop:\nFood Large Box - 10%;\nMedicine Large Box - 10%;\nStimulators Small Box - 10%;\nRandom Loot Medium Box - 10%;\nGrenade Box - 5%;\nSkyfi Loot Box - 5%;\nFood Medium Box - 5%;\nWeapon Container - 5%;\nMedicine Medium Box - 5%;\nSpecial Grenade Box - 5%;\nRandom Loot Small Box - 5%;\nRandom Loot Large Box - 5%;\nStimulators Medium Box - 5%;\nInfo Small Box - 3%;\nPumpkin Box - 1%;\nFood Small Box - 1%;\nTool Small Box - 1%;\nOther Small Box - 1%;\nBattery Small Box - 1%;\nJewelry Small Box - 1%;\nMedicine Small Box - 1%;\nLubricant Small Box - 1%;\nElectronics Small Box - 1%;\nHousehold Goods Small Box - 1%;\nMedical Supplies Small Box - 1%;\nBuilding Material Small Box - 1%;",
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