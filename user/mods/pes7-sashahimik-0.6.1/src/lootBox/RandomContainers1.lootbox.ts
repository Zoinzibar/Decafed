import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomContainersBox1 implements ICustomItem
{
    itemId: string = "shrandomContainersBox1";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const randomLootBoxItems: Record<string, number> = {
            "shLootLubricantSmallBox":150,
            "shLootHouseholdGoodsSmallBox":150,
            "shFoodSmallBox":80,
            "shLootBuildingMaterialSmallBox":80,
            "shMedicineSmallBox":80,
            "shLootToolSmallBox":80,
            "shLootOtherSmallBox":40,
            "shrandomContainersBox2":40,
            "634959225289190e5e773b3b":40, 
            "shLootElectronicsSmallBox":40,
            "shLootBatterySmallBox":30,
            "shFoodMediumBox":30,
            "shGrenadeBox":30,
            "shMedicineMediumBox":20,
            "shLootJewelrySmallBox":20,
            "shSpecialGrenadeBox":15,
            "shLootMedicalSuppliesSmallBox":15,
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
            newName: "SH Container Box I",
            newShortName: "Container Box I",
            newDescription: "Enter the mystical vault where each container unlocks a cascade of random containers, brimming with possibilities waiting to be revealed. Embrace the gamble, where every twist brings a new surprise! By Sasha Himik. \nContainers inside: 3-10.\nPossible drop:\nLubricant Small Box - 15%;\nHousehold Goods Small Box - 15%;\nTool Small Box - 8%;\nFood Small Box - 8%;\nMedicine Small Box - 8%;\nBuilding Material Small Box - 8%;\nPumpkin Box - 4%;\nOther Small Box - 4%;\nElectronics Small Box - 4%;\nRandom Containers Box II - 4%;\nGrenade Box - 3%;\nFood Medium Box - 3%;\nBattery Small Box - 3%;\nJewelry Small Box - 2%;\nMedicine Medium Box - 2%;\nSpecial Grenade Box - 1.5%;\nMedical Supplies Small Box - 1.5%;\nInfo Small Box - 1%;\nWeapon Container - 1%;\nRandom Loot Small Box - 1%;\nSkyfi Loot Box - 0.8%;\nFood Large Box - 0.5%;\nMedicine Large Box - 0.5%;\nStimulators Small Box - 0.5%;\nRandom Loot Medium Box - 0.5%;\nRandom Loot Large Box - 0.1%;\nStimulators Medium Box - 0.1%;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 150000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Width:3,
                Height:4 
            }
        })
            .createItemOffer({
                itemId: this.itemId,
                itemPrice: 150000,
                itemCurrency: NewMoney.HRYVNIA,
                itemLoyalty: 1
            })
            .changePrefab(this.itemId, "lootboxes/loot4.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": randomLootBoxItems}
            );
    }
}