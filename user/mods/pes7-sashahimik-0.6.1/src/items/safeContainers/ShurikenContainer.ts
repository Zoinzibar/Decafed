import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class ShurikenContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5448e5284bdc2dcb718b4567";

        const ninjacontaineruItemFleaPrice = 15000000;//15000000
        const ninjacontaineruItemCategory = "5b5f6fd286f774093f2ecf0d";
        const ninjacontaineruId = "ninjacontaineru";
        const ninjacontaineruClone = "5ca20abf86f77418567a43f2";
        const ninjacontaineruLongName = "Ninja Containeru";
        const ninjacontaineruShortName = "Ninja Containeru";
        const ninjacontaineruDescription = "Anime ninja, naruto containeru! Only here on Kaviy Sasha Himik!";
        const ninjacontaineruPrefab = "containers/safe/naruto-shuriken.bundle";
        const ninjacontaineruLL = 1;

        const ninjacontaineruProps = {
            BackgroundColor: "violet",
            RigLayoutName: "shurikenon",
            CantRemoveFromSlotsDuringRaid: [
                "SecuredContainer"
            ],
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

        bbLib.createItem(ninjacontaineruId, ninjacontaineruClone, secureContainerParentID, ninjacontaineruLongName, ninjacontaineruShortName, ninjacontaineruDescription, ninjacontaineruItemCategory, ninjacontaineruItemFleaPrice, ninjacontaineruProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(ninjacontaineruId, itemTrader, ninjacontaineruItemFleaPrice, itemTraderCurrency, ninjacontaineruLL, serverDatabaseTables);

        items[ninjacontaineruId]._props.Grids = [
            {
                "_id": "98aeba3482acc1614a79f943",
                "_name": "GridView (1)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 4,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "048986b322d7f508223a5ee1",
                "_name": "GridView (2)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "dfc8bf7cd294baa8fbe6bdeb",
                "_name": "GridView (3)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "fa231d52772196b194f61199",
                "_name": "GridView (4)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "095274a27a4d1f3dfdc7214c",
                "_name": "GridView (5)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 3,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "df548873c051511e5457d9e1",
                "_name": "GridView (6)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "d3c54b2110fa478efc54925d",
                "_name": "GridView (7)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 3,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "d70195534695e916c937eec0",
                "_name": "GridView (8)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "0c90b46971d40091326f9867",
                "_name": "GridView (9)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            },
            {
                "_id": "23dc62dc9f7e986716d0ad10",
                "_name": "GridView (10)",
                "_parent": "shurikenon",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "54009119af1c881c07000029"
                            ]
                        }
                    ],
                    "isSortingTable": false,
                    "maxCount": 0,
                    "maxWeight": 0,
                    "minCount": 0
                },
                "_proto": "55d329c24bdc2d892f8b4567"
            }
        ];

        items[ninjacontaineruId]._props.Prefab.path = ninjacontaineruPrefab;
    }
}