import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class UltraTechContainer implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5448e5284bdc2dcb718b4567";

        const ultraTechContainerItemFleaPrice = 999999;
        const ultraTechContainerItemCategory = "5b5f6fa186f77409407a7eb7";
        const ultraTechContainerId = "ultraTechContainer";
        const ultraTechContainerClone = "5ca20abf86f77418567a43f2";
        const ultraTechContainerLongName = "Ultra Tech Container";
        const ultraTechContainerShortName = "Ultra Tech Container";
        const ultraTechContainerDescription = "Ultra Tech Container, completely unique container from Sasha Himik!";
        const ultraTechContainerPrefab = "containers/ultratech.bundle";
        const ultraTechContainerLL = 1;

        const ultraTechContainerProps = {
            BackgroundColor: "violet",
            RigLayoutName: "ultratech",
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

        bbLib.createItem(ultraTechContainerId, ultraTechContainerClone, secureContainerParentID, ultraTechContainerLongName, ultraTechContainerShortName, ultraTechContainerDescription, ultraTechContainerItemCategory, ultraTechContainerItemFleaPrice, ultraTechContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(ultraTechContainerId, itemTrader, ultraTechContainerItemFleaPrice, itemTraderCurrency, ultraTechContainerLL, serverDatabaseTables);

        items[ultraTechContainerId]._props.Grids = [
            {
                "_id": "078def0818159ef089acd52f",
                "_name": "GridView (1)",
                "_parent": "ultratech",
                "_props": {
                    "cellsH": 10,
                    "cellsV": 7,
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
                "_id": "b71dc4762d2095080427f1b9",
                "_name": "GridView (2)",
                "_parent": "ultratech",
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
                "_id": "d1e1c36be0c2edc6e7644b39",
                "_name": "GridView (3)",
                "_parent": "ultratech",
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
                "_id": "8b5ba19c41c02a0da5ef1034",
                "_name": "GridView (4)",
                "_parent": "ultratech",
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
                "_id": "227a13c1b127336071030609",
                "_name": "GridView (5)",
                "_parent": "ultratech",
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
                "_id": "f42ceb146b3b08e6685c9e35",
                "_name": "GridView (6)",
                "_parent": "ultratech",
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
                "_id": "39a6ff5733ee6105f49266fc",
                "_name": "GridView (7)",
                "_parent": "ultratech",
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
                "_id": "57e2035ed9981307c77b79c8",
                "_name": "GridView (8)",
                "_parent": "ultratech",
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
                "_id": "91f5be3cc17e567e8f4f859c",
                "_name": "GridView (9)",
                "_parent": "ultratech",
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
                "_id": "b6ac11ec96225bca3af6e761",
                "_name": "GridView (10)",
                "_parent": "ultratech",
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
                "_id": "6dc05404713a5c5f36caadd8",
                "_name": "GridView (11)",
                "_parent": "ultratech",
                "_props": {
                    "cellsH": 5,
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
                "_id": "aae993bfe72af70c1c4c982b",
                "_name": "GridView (12)",
                "_parent": "ultratech",
                "_props": {
                    "cellsH": 2,
                    "cellsV": 2,
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

        items[ultraTechContainerId]._props.Prefab.path = ultraTechContainerPrefab;
    }
}