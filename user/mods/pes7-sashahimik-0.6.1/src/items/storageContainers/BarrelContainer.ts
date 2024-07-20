
import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class BarrelContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5795f317245977243854e041";

        const barrelContainerItemFleaPrice = 250000;
        const barrelContainerItemCategory = "5b5f6fa186f77409407a7eb7";
        const barrelContainerId = "shbarrelContainer";
        const barrelContainerClone = "5b7c710788a4506dec015957";
        const barrelContainerLongName = "Barrel Container";
        const barrelContainerShortName = "Barrel Container";
        const barrelContainerDescription = "Barrel Container for all your fuel, don't waste your space use Barrel Container instead! By Sasha Himik.";
        const barrelContainerPrefab = "containers/burrelcontainer.bundle";
        const barrelContainerLL = 1;

        const barrelContainerProps = {
            BackgroundColor: "violet",
            CanSellOnRagfair: false,
            weaponErgonomicPenalty: 0
        }

        bbLib.createItem(barrelContainerId, barrelContainerClone, secureContainerParentID, barrelContainerLongName, barrelContainerShortName, barrelContainerDescription, barrelContainerItemCategory, barrelContainerItemFleaPrice, barrelContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(barrelContainerId, itemTrader, barrelContainerItemFleaPrice, itemTraderCurrency, barrelContainerLL, serverDatabaseTables);

        items[barrelContainerId]._props.Height = 5;
        items[barrelContainerId]._props.Width = 3;

        items[barrelContainerId]._props.Grids[0]._props.filters[0] = {
            Filter: [
                "5d1b371186f774253763a656",
                "5d1b36a186f7742523398433"
            ],
            ExcludedFilter: []
        }

        items[barrelContainerId]._props.Grids[0]._props.cellsH = 2 * 3;
        items[barrelContainerId]._props.Grids[0]._props.cellsV = 3 * 4;

        items[barrelContainerId]._props.Prefab.path = barrelContainerPrefab;
    }
}