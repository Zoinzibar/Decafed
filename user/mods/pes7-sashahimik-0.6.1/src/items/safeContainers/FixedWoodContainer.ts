import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class FixedWoodContainer implements ICustomItem
{
    public static id: string = "fixedWoodContainer";
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5448bf274bdc2dfc2f8b456a";

        const hasPrice = false;
        const fixedWoodContainerItemCategory = "5b5f6fd286f774093f2ecf0d";
        const fixedWoodContainerClone = "59db794186f77448bc595262";
        const fixedWoodContainerLongName = "Fixed Wood Container 1x6";
        const fixedWoodContainerShortName = "Fixed Wood Container";
        const fixedWoodContainerDescription = "Thanks for fix me :)";
        const fixedWoodContainerPrefab = "containers/safe/fixedwoodcase.bundle";
        const fixedWoodContainerLL = 1;
   

        const fixedWoodContainerProps = {
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

        bbLib.createItem(FixedWoodContainer.id, fixedWoodContainerClone, secureContainerParentID, fixedWoodContainerLongName, fixedWoodContainerShortName, fixedWoodContainerDescription, fixedWoodContainerItemCategory, 0, fixedWoodContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(FixedWoodContainer.id, itemTrader, 0, itemTraderCurrency, fixedWoodContainerLL, serverDatabaseTables, hasPrice);

        items[FixedWoodContainer.id]._props.Grids[0]._props.cellsH = 6;
        items[FixedWoodContainer.id]._props.Grids[0]._props.cellsV = 1;

        items[FixedWoodContainer.id]._props.Prefab.path = fixedWoodContainerPrefab;
    }
}