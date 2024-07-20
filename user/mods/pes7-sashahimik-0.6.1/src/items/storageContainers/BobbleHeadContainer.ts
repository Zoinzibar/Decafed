import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class BobbleHeadContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "UAH";
        const secureContainerParentID = "5448e5284bdc2dcb718b4567";

        const bobbleHeadContainerItemFleaPrice = 500000;
        const bobbleHeadContainerItemCategory = "5b5f6fa186f77409407a7eb7";
        const bobbleHeadContainerId = "bobbleHeadContainer";
        const bobbleHeadContainerClone = "5ca20abf86f77418567a43f2";
        const bobbleHeadContainerLongName = "Bobble Head Container";
        const bobbleHeadContainerShortName = "Bobble Head Container";
        const bobbleHeadContainerDescription = "Bobble Head Container, for your lovely bobbleheads, collect all them by Sasha Himik!";
        const bobbleHeadContainerPrefab = "containers/orangecontainer.bundle";
        const bobbleHeadContainerLL = 1;

        const bobbleHeadContainerProps = {
            BackgroundColor: "violet",
            RigLayoutName: "Bobblehead",
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
            TagColor: 0,
            TagName: "",
            InsuranceDisabled: true,
            HideEntrails: true,
            IsAlwaysAvailableForInsurance: false,
            CanSellOnRagfair: false
        }

        bbLib.createItem(bobbleHeadContainerId, bobbleHeadContainerClone, secureContainerParentID, bobbleHeadContainerLongName, bobbleHeadContainerShortName, bobbleHeadContainerDescription, bobbleHeadContainerItemCategory, bobbleHeadContainerItemFleaPrice, bobbleHeadContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(bobbleHeadContainerId, itemTrader, bobbleHeadContainerItemFleaPrice, itemTraderCurrency, bobbleHeadContainerLL, serverDatabaseTables);

        items[bobbleHeadContainerId]._props.Grids = [
            {
                "_id": "4723fd7892ef524123546457",
                "_name": "GridView (1)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 10,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "d5a0ab06fec992e9d394ce21",
                "_name": "GridView (2)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "98cf1b2a1465bd4f23d332f4",
                "_name": "GridView (3)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "29dc8c51d7dcab48e6bbb55c",
                "_name": "GridView (4)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "aac7a53f2da231ed790ed473",
                "_name": "GridView (5)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "89b8d05e6e89f09de8baa984",
                "_name": "GridView (6)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "5f3179594934a5a730bcc023",
                "_name": "GridView (7)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "683d60ce83565c67919d300b",
                "_name": "GridView (8)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "1bc44e5e805e17657a2b8e45",
                "_name": "GridView (9)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "5361717eeac946457dbedec0",
                "_name": "GridView (10)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "1a74d0fced2e6761cf8f8342",
                "_name": "GridView (11)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "db44d483c93064dce58346b3",
                "_name": "GridView (12)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "facaeab95873f064f8809291",
                "_name": "GridView (13)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "d17c4aabcdd0dac427dcb4af",
                "_name": "GridView (14)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "c4584e7b100e70b22b9669a8",
                "_name": "GridView (15)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "1811c818affaf13ab9e30a9a",
                "_name": "GridView (16)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "93968318b04476e07e8b25c0",
                "_name": "GridView (17)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "38641b01b70662a95b320a59",
                "_name": "GridView (18)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "cecb05f968a4c9f089302105",
                "_name": "GridView (19)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "4af3904b9a4b4c1084d08463",
                "_name": "GridView (20)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "6e9d88785c07d8303585c9bd",
                "_name": "GridView (21)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "9eb7eb5af69c5ffddf664cc0",
                "_name": "GridView (22)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "772eb9bd3219e72bd9605eef",
                "_name": "GridView (23)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "2d8ccea3345fb9743e691d4a",
                "_name": "GridView (24)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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
                "_id": "801e1001665252c15742228c",
                "_name": "GridView (25)",
                "_parent": "Bobblehead",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57864a3d24597754843f8721"
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

        items[bobbleHeadContainerId]._props.Prefab.path = bobbleHeadContainerPrefab;
    }
}