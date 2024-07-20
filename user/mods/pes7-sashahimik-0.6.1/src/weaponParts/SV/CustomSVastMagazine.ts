import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../../Pes7Lib";

export class CustomSVastMagazine implements ICustomItem
{
    public itemId: string = "shCustomSVastMagazine";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;

        pes7Lib
            .addWeaponBasedOnFilter(this.itemId, "559ba5b34bdc2d1f1a8b4582")
            .createItem({
                newId: this.itemId,
                cloneId: "559ba5b34bdc2d1f1a8b4582",
                parentId: "5448bc234bdc2d3c308b4569",
                newName: "7.62x54R for SV-AST 50 rounds magazine",
                newShortName: "SV-AST 50",
                newDescription: "7.62x54R for SV-AST 50 rounds magazine, extended type of Magazine with micro wormholes technologies designed by Sasha Himik.",
                newCategory: CategoriesEnum.Magazines,
                newPrice: 20000,
                newBackgroundColor: "yellow"
            }).createItemOffer({
                itemId: this.itemId,
                itemPrice: 3000,
                itemCurrency: NewMoney.HRYVNIA,
                itemLoyalty: 1
            }).prepareMagazine(50, this.itemId, "559ba5b34bdc2d1f1a8b4582")
    }
}
