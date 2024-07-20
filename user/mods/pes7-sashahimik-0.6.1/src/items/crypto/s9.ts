import { BiggerBangLib } from "../../BiggerBangLib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class S9Miner implements ICustomItem
{
    public main(mainProperties: MainProperties): void
    {
        const { serverDatabaseTables, container, jsonUtil} = mainProperties;
        const bbLib = new BiggerBangLib(container);

        const items = serverDatabaseTables.templates.items;

        const itemTrader = "sashahimik";
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        const secureContainerParentID = "5448e5284bdc2dcb718b4567";

        const ultraTechContainerItemFleaPrice = 2000000;
        const ultraTechContainerItemCategory = "5b47574386f77428ca22b2ef";
        const ultraTechContainerId = "shS9Miner";
        const ultraTechContainerClone = "5ca20abf86f77418567a43f2";
        const ultraTechContainerLongName = "S9 Miner";
        const ultraTechContainerShortName = "S9 Miner";
        const ultraTechContainerDescription = "S9 Miner unit for mining bitcoins and other crypto by Sasha Himik!";
        const ultraTechContainerPrefab = "items/s9.bundle";
        const ultraTechContainerLL = 1;

        const ultraTechContainerProps = {
            BackgroundColor: "violet",
            RigLayoutName: "s9rig",
            spawnTypes: "None",
            weaponErgonomicPenalty: 0,
            InsuranceDisabled: true,
            HideEntrails: true,
            IsAlwaysAvailableForInsurance: false,
            CanSellOnRagfair: false
        }

        bbLib.createItem(ultraTechContainerId, ultraTechContainerClone, secureContainerParentID, ultraTechContainerLongName, ultraTechContainerShortName, ultraTechContainerDescription, ultraTechContainerItemCategory, ultraTechContainerItemFleaPrice, ultraTechContainerProps, serverDatabaseTables,jsonUtil);
        bbLib.createItemOffer(ultraTechContainerId, itemTrader, ultraTechContainerItemFleaPrice, itemTraderCurrency, ultraTechContainerLL, serverDatabaseTables);

        items[ultraTechContainerId]._props.Grids = [
            {
                "_id": "60319d41cc2808b2b1e1c8aa",
                "_name": "GridView (1)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "5c052fb986f7746b2101e909"
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
                "_id": "bb0fdae74c3e357b88570e46",
                "_name": "GridView (2)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 2,
                    "cellsV": 3,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "5d1b36a186f7742523398433"
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
                "_id": "cb06394750dee1563e4c4129",
                "_name": "GridView (3)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "573477e124597737dd42e191"
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
                "_id": "e43aa10052a06a8768d470db",
                "_name": "GridView (4)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 2,
                    "cellsV": 2,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57347c2e24597744902c94a1"
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
                "_id": "cdc3dcfb24fc1aeca48c7620",
                "_name": "GridView (5)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "573477e124597737dd42e191"
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
                "_id": "511a9be1aec12affd50b5dcb",
                "_name": "GridView (6)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "573477e124597737dd42e191"
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
                "_id": "b87ed26c45960366182e0659",
                "_name": "GridView (7)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "573477e124597737dd42e191"
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
                "_id": "f879493e5bbf7f7caf44dac4",
                "_name": "GridView (8)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 3,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57347ca924597744596b4e71",
                                "shrtx3060ti"
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
                "_id": "dd6894c031d6deaed431997d",
                "_name": "GridView (9)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 3,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57347ca924597744596b4e71",
                                "shrtx3060ti"
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
                "_id": "6aa0dbfa861927dab7d726bd",
                "_name": "GridView (10)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 3,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "57347ca924597744596b4e71",
                                "shrtx3060ti"
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
                "_id": "666372030cb4f15bb9d17e28",
                "_name": "1x1 Slot",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "61bf7c024770ee6f9c6b8b53"
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
                "_id": "6663726c332ef27b5aa802f8",
                "_name": "1x1 Slot (1)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "5734779624597737e04bf329"
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
                "_id": "66637281ebdcc4e3147237c2",
                "_name": "1x1 Slot (2)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "5734779624597737e04bf329"
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
                "_id": "666372b87282c4ae7e869735",
                "_name": "1x1 Slot (3)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "5734779624597737e04bf329"
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
                "_id": "666372b87282c4ae7e869735",
                "_name": "1x1 Slot (4)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "5734779624597737e04bf329"
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
                "_id": "666372d42e5912db768b15a5",
                "_name": "1x1 Slot (5)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "5734779624597737e04bf329"
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
                "_id": "666372e8bd751601b3d0b084",
                "_name": "1x1 Slot (6)",
                "_parent": "s9rig",
                "_props": {
                    "cellsH": 1,
                    "cellsV": 1,
                    "filters": [
                        {
                            "ExcludedFilter": [
                                "5448bf274bdc2dfc2f8b456a"
                            ],
                            "Filter": [
                                "5734779624597737e04bf329"
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