import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";
import * as config from "../../../config/config.json";
import { ETH3 } from "../treasures/ethercoin";
import { TRC700000 } from "../treasures/terracoin";

export class BitCoinFlashDriveContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "UAH";
        const secureContainerParentID = "5448e5284bdc2dcb718b4567";

        const containerItemFleaPrice = 700000; // change
        const containerItemCategory = "5b5f6fa186f77409407a7eb7";
        const containerId = "shBitCoinFlashDriveContainer";
        const containerClone = "5ca20abf86f77418567a43f2";
        const containerLongName = "Bitcoin Flash Drive";
        const containerShortName = "Bitcoin Flash Drive";
        const containerDescription = "Bitcoin Flash Drive - your personal vault for your lovely bitcoins, other coins, flash drives, ssd, vpx, military flash drives and for graphics cards by Sasha Himik!";
        const containerPrefab = "containers/flash.bundle";
        const containerLL = 2;

        const containerProps = {
            BackgroundColor: "violet",
            RigLayoutName: "BitcoinFlash",
            spawnTypes: "None",
            spawnRarity: "Common",
            lootFilter: [],
            minCountSpawn: 0,
            maxCountSpawn: 0,
            ItemSound: "container_case",
            weaponErgonomicPenalty: 0,
            HideEntrails: true,
            CanSellOnRagfair: false,
            Width: 1,
            Height: 1
        }

        bbLib.createItem(containerId, containerClone, secureContainerParentID, containerLongName, containerShortName, containerDescription, containerItemCategory, containerItemFleaPrice, containerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(containerId, itemTrader, containerItemFleaPrice, itemTraderCurrency, containerLL, serverDatabaseTables);

        const filters = [
            {
                "ExcludedFilter": [
                    "5448bf274bdc2dfc2f8b456a"
                ],
                "Filter": [
                    "shrtx3060ti",
                    "57347ca924597744596b4e71",
                    "59faff1d86f7746c51718c9c",
                    "5c05300686f7746dce784e5d",
                    "590c392f86f77444754deb29",
                    "62a0a16d0b9d3c46de5b6e97",
                    "590c621186f774138d11ea29",
                    "shton1000",
                    "sheth3",
                    "shtrc700000"
                ]
            }
        ];

        if (config.Crypto.Enabled)
        {
            filters[0].Filter.push((new ETH3).itemId)
            filters[0].Filter.push((new TRC700000).itemId)
        }

        items[containerId]._props.Grids = [
            {
                "_id": "eff49ceb2271c316c801738a",
                "_name": "GridView (1)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "7b8e242178064fd87c12fcee",
                "_name": "GridView (2)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "41757e7c2dd341e1ce0f16f9",
                "_name": "GridView (3)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "5fb5317b3ebde4011f3365a1",
                "_name": "GridView (4)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "783c37cea938ae60782f529c",
                "_name": "GridView (5)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "731eca8ebb2ab333536bfd3e",
                "_name": "GridView (6)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "88efdfa0346cd18466c01781",
                "_name": "GridView (7)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "1d5cb7fd493ea66aa92dc971",
                "_name": "GridView (8)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "3166bb45ffa3edededc0c7c5",
                "_name": "GridView (9)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "d1d3c74d670064dec2d71001",
                "_name": "GridView (10)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "20c5ed3ae259a9f90d26c3b0",
                "_name": "GridView (11)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "9c54092f2dd5139ce4384f47",
                "_name": "GridView (12)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "7aa08f2497e15405e3b98e45",
                "_name": "GridView (13)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "2ba51a87e40a533eec223c29",
                "_name": "GridView (14)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "35af31e94e959d4d0dcfa0d8",
                "_name": "GridView (15)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "a24553897effc85f9c2463dd",
                "_name": "GridView (16)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "66bd2117ae04223ede7d4dc3",
                "_name": "GridView (17)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "48323f62f1e4e6c3850bb741",
                "_name": "GridView (18)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "b2dff6419805ddc749772142",
                "_name": "GridView (19)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "15f3e426e8b00ef6e67c4cbe",
                "_name": "GridView (20)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "b7aea754973f3a2af727423b",
                "_name": "GridView (21)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "f377cafa99b48b0905003137",
                "_name": "GridView (22)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "02749b9a92bbe12cb9325866",
                "_name": "GridView (23)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "0a2e93905a38c3ce90a088c2",
                "_name": "GridView (24)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "09489916dd5cdd0af076b008",
                "_name": "GridView (25)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "216e9b477e455f4956079e4b",
                "_name": "GridView (26)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 2,
                    "cellsV": 2,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "f552e201ba369c6d43ee8f8f",
                "_name": "GridView (27)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 2,
                    "cellsV": 2,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "4ed0d7067c21c0f94f84dcaf",
                "_name": "GridView (28)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 3,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "2ae6e72106b88c2dcf2195d2",
                "_name": "GridView (29)",
                "_parent": "BitcoinFlash",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 3,
                    "filters": filters,
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            }
        ];

        items[containerId]._props.Prefab.path = containerPrefab;
    }
}