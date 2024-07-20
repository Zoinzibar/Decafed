import { NewMoney } from "./../../Pes7Lib";
import { ICryptoCoin, ICustomItem, MainProperties } from "src/Pes7Lib";

export class TON1000 implements ICustomItem, ICryptoCoin
{
    itemId: string = "shton1000";
    count: number = 1000;
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "59faff1d86f7746c51718c9c",
            parentId: "57864a3d24597754843f8721",
            newName: "1000 TON",
            newShortName: "1000 TON",
            newDescription: "1000 physical TON coins by Sasha Himik.",
            newCategory: "5b47574386f77428ca22b2f1",
            newPrice: 680860,
            newBackgroundColor: "yellow"
        }).createItemOffer({
            itemId: this.itemId,
            itemPrice: 680860,
            itemCurrency: NewMoney.ROUBLES,
            itemLoyalty: 1
        }).changePrefab(this.itemId, "items/toncoin.bundle");
    }
}