import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../Pes7Lib";

export class RandomLarge implements ICustomItem
{
    itemId: string = "shrandomLarge";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        const randomLootBoxItems: Record<string, number> = {
            "shLootLubricantSmallBox":120,
            "shLootHouseholdGoodsSmallBox":120,
            "shFoodSmallBox":80,
            "shLootBuildingMaterialSmallBox":80,
            "shMedicineSmallBox":80,
            "shLootToolSmallBox":70,
            "634959225289190e5e773b3b":60, 
            "shLootOtherSmallBox":50,
            "shLootBatterySmallBox":40,
            "shLootElectronicsSmallBox":40,
            "shGrenadeBox":30,
            "shFoodMediumBox":30,
            "shMedicineMediumBox":25,
            "shLootJewelrySmallBox":25,
            "shLootSmallBox":15,
            "shSpecialGrenadeBox":15,
            "shrandomContainersBox1":15,
            "shskyfiLootBox":10, 
            "shFoodLargeBox":10,
            "shLootMediumBox":10,
            "shMedicineLargeBox":10,
            "shLootInfoSmallBox":10,
            "shStimulatorsSmallBox":10,
            "shrandomContainersBox2":10,
            "6489bed4a53c8c047c3dc361":10, 
            "shLootMedicalSuppliesSmallBox":10,
            "shLootLargeBox":5,
            "shStimulatorsMediumBox":5,
            "shrandomContainersBox3":5
        };     
                
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "62f109593b54472778797866",
            newName: "SH Random Large Container",
            newShortName: "Random Large Container",
            newDescription: "Enter the mystical vault where each container unlocks a cascade of random containers, brimming with possibilities waiting to be revealed. Embrace the gamble, where every twist brings a new surprise! By Sasha Himik. \nContainers inside: 3-20.\nPossible drop:\nLubricant Small Box - 12%;\nHousehold Goods Small Box - 12%;\nFood Small Box - 8%;\nBuilding Material Small Box - 8%;\nMedicine Small Box - 8%;\nTool Small Box - 7%;\nPumpkin Box - 6%;\nOther Small Box - 5%;\nBattery Small Box - 4%;\nElectronics Small Box - 4%;\nGrenade Box - 3%;\nFood Medium Box - 3%;\nMedicine Medium Box - 2.5%;\nJewelry Small Box - 2.5%;\nRandom Loot Small Box - 1.5%;\nSpecial Grenade Box - 1.5%;\nRandom Containers Box I - 1.5%;\nSkyfi Loot Box - 1%;\nFood Large Box - 1%;\nRandom Loot Medium Box - 1%;\nMedicine Large Box - 1%;\nInfo Small Box - 1%;\nStimulators Small Box - 1%;\nRandom Containers Box II - 1%;\nWeapon container - 1%;\nMedical Supplies Small Box - 1%;\nRandom Loot Large Box - 0.5%;\nStimulators Medium Box - 0.5%;\nRandom Containers Box III - 0.5%;",
            newCategory: CategoriesEnum.Barter,
            newPrice: 450000,
            newBackgroundColor: "yellow",
            newProps: {
                CanSellOnRagfair: false,
                Width:4,
                Height:3 
            }
        })
            .createItemOffer({
                itemId: this.itemId,
                itemPrice: 450000,
                itemCurrency: NewMoney.HRYVNIA,
                itemLoyalty: 1
            })
            .changePrefab(this.itemId, "lootboxes/loot3.bundle")
            .setRandomLootContainerLoot(this.itemId, 
                {"rewardCount": 1, "foundInRaid": true, "rewardTplPool": randomLootBoxItems}
            );
    }
}