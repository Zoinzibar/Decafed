import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class LongContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5448bf274bdc2dfc2f8b456a";

        const longContainerItemFleaPrice = 3000000;
        const longContainerItemCategory = "5b5f6fd286f774093f2ecf0d";
        const longContainerId = "longContainer";
        const longContainerClone = "59db794186f77448bc595262";
        const longContainerLongName = "Long Container 2x7";
        const longContainerShortName = "Long Container";
        const longContainerDescription = "Somebody took regular box, made several smashes by Tagillas Hummer and rotated it 360+180, so that is technology how it was created :)";
        const longContainerPrefab = "containers/safe/longcase.bundle";
        const longContainerLL = 1;

        const longContainerProps = {
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

        bbLib.createItem(longContainerId, longContainerClone, secureContainerParentID, longContainerLongName, longContainerShortName, longContainerDescription, longContainerItemCategory, longContainerItemFleaPrice, longContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(longContainerId, itemTrader, longContainerItemFleaPrice, itemTraderCurrency, longContainerLL, serverDatabaseTables);

        items[longContainerId]._props.Grids[0]._props.cellsH = 2;
        items[longContainerId]._props.Grids[0]._props.cellsV = 7;

        items[longContainerId]._props.Prefab.path = longContainerPrefab;
    }
}