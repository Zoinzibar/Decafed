import { CategoriesEnum, ICustomItem, MainProperties, NewMoney } from "../../Pes7Lib";

enum innerItems {
    "RFID"= "5c052fb986f7746b2101e909", 
    "METALFUEL"= "5d1b36a186f7742523398433",
    "CPU" = "573477e124597737dd42e191",
    "POWERUNIT"= "57347c2e24597744902c94a1",
    "GRAPHICCARD"= "57347ca924597744596b4e71",
    "RTX3060"= "shrtx3060ti",
    "MAGNETICTYPECASSETE"= "61bf7c024770ee6f9c6b8b53",
    "CPUFAN"= "5734779624597737e04bf329"
}

export class S19Miner implements ICustomItem
{
    itemId: string = "shS19Miner";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;

        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "5ca20abf86f77418567a43f2",
            parentId: "5448e5284bdc2dcb718b4567",
            newName: "S19 Miner",
            newShortName: "S19 Miner",
            newDescription: "S19 Miner is advanced unit for mining bitcoins and other crypto by Sasha Himik!",
            newCategory: CategoriesEnum.Electronics,
            newPrice: 5000000,
            newBackgroundColor: "violet",
            newRigLayoutName: "s19",
            newProps: {
                spawnTypes: "None",
                weaponErgonomicPenalty: 0,
                InsuranceDisabled: true,
                HideEntrails: true,
                IsAlwaysAvailableForInsurance: false,
                CanSellOnRagfair: false
            }
        })
            .setGridsArray(this.itemId, [
                {
                    "_id": "3cd1c4bbd6d211c4d3be9bf4",
                    "_name": "GridView (1)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.RFID
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
                    "_id": "acfd6a85cd91e209e4b625cb",
                    "_name": "GridView (2)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 2,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.METALFUEL
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
                    "_id": "32078f9653ddc5b5b494e6a3",
                    "_name": "GridView (3)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPU
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
                    "_id": "a06d86b7420ce334e218fcaf",
                    "_name": "GridView (4)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 2,
                        "cellsV": 2,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.POWERUNIT
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
                    "_id": "c8e13a79b528c27207319933",
                    "_name": "GridView (5)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPU
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
                    "_id": "bb741698e7495a6ddda7c0bc",
                    "_name": "GridView (6)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPU
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
                    "_id": "cdcefcea046b6065dba2143f",
                    "_name": "GridView (7)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPU
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
                    "_id": "7cbc735640ad074a4d5f7b6f",
                    "_name": "GridView (8)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.GRAPHICCARD,
                                    innerItems.RTX3060
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
                    "_id": "1cecd2273835967d212f4dea",
                    "_name": "GridView (9)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.GRAPHICCARD,
                                    innerItems.RTX3060
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
                    "_id": "71dec7766100b7d1914140de",
                    "_name": "GridView (10)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.GRAPHICCARD,
                                    innerItems.RTX3060
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
                    "_id": "ade276b640451fa4674ba256",
                    "_name": "GridView (11)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.MAGNETICTYPECASSETE
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
                    "_id": "7852419bce163b273f2f6631",
                    "_name": "GridView (12)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "353e9e83b85307c5b4e04224",
                    "_name": "GridView (13)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "c52a652c313894b6ca55ae35",
                    "_name": "GridView (14)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "a44685f7b4c3851cdb0c5a92",
                    "_name": "GridView (15)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "514701b6ad7c111bbafe27cf",
                    "_name": "GridView (16)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "82639f6ca9199c05b1252392",
                    "_name": "GridView (17)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "ba462b3fc988cd08a866c454",
                    "_name": "GridView (18)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 2,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.METALFUEL
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
                    "_id": "272b6c70cdf10ea45f582dd6",
                    "_name": "GridView (19)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 2,
                        "cellsV": 2,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.POWERUNIT
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
                    "_id": "5d92ec0f41c7db8bfafb751c",
                    "_name": "GridView (20)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.RFID
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
                    "_id": "b3d6211f709c11958d037274",
                    "_name": "GridView (21)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.GRAPHICCARD,
                                    innerItems.RTX3060
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
                    "_id": "63880314eeeea68780f7d062",
                    "_name": "GridView (22)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.GRAPHICCARD,
                                    innerItems.RTX3060
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
                    "_id": "5f97bee39ec2728bd94e454e",
                    "_name": "GridView (23)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.GRAPHICCARD,
                                    innerItems.RTX3060
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
                    "_id": "31b240e996d666333f243a96",
                    "_name": "GridView (24)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 3,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.GRAPHICCARD,
                                    innerItems.RTX3060
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
                    "_id": "31ef473e01785e96dae2382e",
                    "_name": "GridView (25)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.MAGNETICTYPECASSETE
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
                    "_id": "8122df01f5a1722db63689ed",
                    "_name": "GridView (26)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "e46b4198e5420cca303b7e8f",
                    "_name": "GridView (27)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "c004e5f4c9e3f78d145a0f33",
                    "_name": "GridView (28)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "7210b559bc91c6cc022178ea",
                    "_name": "GridView (29)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "038069f594373598edbce232",
                    "_name": "GridView (30)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "8b05c03e9a38a888a14822b8",
                    "_name": "GridView (31)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "3631a12a1d33b8b4b15e8d34",
                    "_name": "GridView (32)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
                    "_id": "fa47ea88692367f476c95254",
                    "_name": "GridView (33)",
                    "_parent": "s19",
                    "_props": {
                        "cellsH": 1,
                        "cellsV": 1,
                        "filters": [
                            {
                                "ExcludedFilter": [
                                    "5448bf274bdc2dfc2f8b456a"
                                ],
                                "Filter": [
                                    innerItems.CPUFAN
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
            ])
            .createItemOffer({
                itemId: this.itemId,
                itemPrice: 5000000,
                itemCurrency: NewMoney.ROUBLES,
                itemLoyalty: 2
            }).changePrefab(this.itemId, "items/s19.bundle");
    }
}