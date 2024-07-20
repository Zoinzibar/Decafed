import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../../Pes7Lib";

export class CustomSVastRoot implements ICustomItem
{
    public itemId: string = "shCustomSVastRoot";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;

        pes7Lib
            .addWeaponBasedOnFilter(this.itemId, "55801eed4bdc2d89578b4588")
            .createItem({
                newId: this.itemId,
                cloneId: "55801eed4bdc2d89578b4588",
                parentId: "5447b6254bdc2dc3278b4568",
                newName: "SV-AST",
                newShortName: "SV-AST",
                newDescription: "SV-AST - Ukraine modification of Russian SV-98, designed by Sasha Himik.",
                newCategory: CategoriesEnum.BoltActionRifles,
                newPrice: 33000,
                newBackgroundColor: "red",
                newProps: {
                    weapFireType: [
                        "single",
                        "fullauto"
                    ],
                    SingleFireRate: 550,
                    bFirerate: 700
                }
            }).createItemOffer({
                itemId: this.itemId,
                itemPrice: 11000,
                itemCurrency: NewMoney.HRYVNIA,
                itemLoyalty: 1
            })
    }
}
