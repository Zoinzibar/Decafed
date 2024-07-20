
import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class AmmoBoxContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5795f317245977243854e041";

        const ammoBoxContainerItemFleaPrice = 500000;
        const ammoBoxContainerItemCategory = "5b5f6fa186f77409407a7eb7";
        const ammoBoxContainerId = "shammoBoxContainer";
        const ammoBoxContainerClone = "5b7c710788a4506dec015957";
        const ammoBoxContainerLongName = "Ammo Box Container";
        const ammoBoxContainerShortName = "Ammo Box Container";
        const ammoBoxContainerDescription = "Ammo Box Container for your ammo, keep in safe place, without kids! By Sasha Himik.";
        const ammoBoxContainerPrefab = "containers/ammoboxcontainer.bundle";
        const ammoBoxContainerLL = 1;

        const ammoBoxContainerProps = {
            BackgroundColor: "violet",
            CanSellOnRagfair: false,
            weaponErgonomicPenalty: 0
        }

        bbLib.createItem(ammoBoxContainerId, ammoBoxContainerClone, secureContainerParentID, ammoBoxContainerLongName, ammoBoxContainerShortName, ammoBoxContainerDescription, ammoBoxContainerItemCategory, ammoBoxContainerItemFleaPrice, ammoBoxContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(ammoBoxContainerId, itemTrader, ammoBoxContainerItemFleaPrice, itemTraderCurrency, ammoBoxContainerLL, serverDatabaseTables);

        items[ammoBoxContainerId]._props.Height = 2;
        items[ammoBoxContainerId]._props.Width = 2;

        items[ammoBoxContainerId]._props.Grids[0]._props.filters[0] = {
            Filter: [
                "5485a8684bdc2da71d8b4567",
                "543be5cb4bdc2deb348b4568"
            ],
            ExcludedFilter: []
        }

        items[ammoBoxContainerId]._props.Grids[0]._props.cellsH = 12;
        items[ammoBoxContainerId]._props.Grids[0]._props.cellsV = 15;

        items[ammoBoxContainerId]._props.Prefab.path = ammoBoxContainerPrefab;
    }
}