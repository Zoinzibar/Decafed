import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class AssContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5448bf274bdc2dfc2f8b456a";

        const assHoleContainerItemFleaPrice = 100000000;
        const assHoleContainerItemCategory = "5b5f6fd286f774093f2ecf0d";
        const assHoleContainerId = "AssHoleContainer";
        const assHoleContainerClone = "59db794186f77448bc595262";
        const assHoleContainerLongName = "Ass Hole Container 6x9";
        const assHoleContainerShortName = "Ass Hole";
        const assHoleContainerDescription = "Big ass hole container 6x9 made from your ass after several games on Tarkov Online.";
        const assHoleContainerPrefab = "containers/safe/assholesafecontainerv2.bundle";
        const assHoleContainerLL = 1;

        const assHoleContainerProps = {
            BackgroundColor: "violet",
            isSecured: true,
            spawnTypes: "None",
            spawnRarity: "Common",
            lootFilter: [],
            minCountSpawn: 0,
            maxCountSpawn: 0,
            ItemSound: "container_case",
            weaponErgonomicPenalty: 0,
            InsuranceDisabled: true,
            HideEntrails: true,
            IsAlwaysAvailableForInsurance: false,
            CanSellOnRagfair: false
        }

        bbLib.createItem(assHoleContainerId, assHoleContainerClone, secureContainerParentID, assHoleContainerLongName, assHoleContainerShortName, assHoleContainerDescription, assHoleContainerItemCategory, assHoleContainerItemFleaPrice, assHoleContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(assHoleContainerId, itemTrader, assHoleContainerItemFleaPrice, itemTraderCurrency, assHoleContainerLL, serverDatabaseTables);

        items[assHoleContainerId]._props.Grids[0]._props.cellsH = 6;
        items[assHoleContainerId]._props.Grids[0]._props.cellsV = 9;

        items[assHoleContainerId]._props.Prefab.path = assHoleContainerPrefab;
    }
}