import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class BrokenWoodContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);
        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5448bf274bdc2dfc2f8b456a";

        const brokenWoodContainerItemFleaPrice = 50000;
        const brokenWoodContainerItemCategory = "5b5f6fd286f774093f2ecf0d";
        const brokenWoodContainerId = "brokenWoodContainer";
        const brokenWoodContainerClone = "59db794186f77448bc595262";
        const brokenWoodContainerLongName = "Broken Wood Container 1x2";
        const brokenWoodContainerShortName = "Broken Wood Container";
        const brokenWoodContainerDescription = "Sorry, I am broken :(";
        const brokenWoodContainerPrefab = "containers/safe/brokenwoodcase.bundle";
        const brokenWoodContainerLL = 1;

        const brokenWoodContainerProps = {
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

        bbLib.createItem(brokenWoodContainerId, brokenWoodContainerClone, secureContainerParentID, brokenWoodContainerLongName, brokenWoodContainerShortName, brokenWoodContainerDescription, brokenWoodContainerItemCategory, brokenWoodContainerItemFleaPrice, brokenWoodContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(brokenWoodContainerId, itemTrader, brokenWoodContainerItemFleaPrice, itemTraderCurrency, brokenWoodContainerLL, serverDatabaseTables);

        items[brokenWoodContainerId]._props.Grids[0]._props.cellsH = 2;
        items[brokenWoodContainerId]._props.Grids[0]._props.cellsV = 1;

        items[brokenWoodContainerId]._props.Prefab.path = brokenWoodContainerPrefab;
    }
}