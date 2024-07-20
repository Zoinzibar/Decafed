import { CategoriesEnum, NewMoney } from "../../Pes7Lib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class MPPVSH implements ICustomItem
{
    itemId: string = "shmppvsh";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "5df8a42886f77412640e2e75",
            parentId: "5448e5284bdc2dcb718b4567",
            newName: "MPPV-SH",
            newShortName: "MPPV-SH",
            newDescription: "Multi-Purpose Patrol Vest - SH is designed for those patrolling situations where armor is not needed. A lightweight rig with a lot of pouches. Modified by Sasha Himik.",
            newCategory: CategoriesEnum.TacticalRigs,
            newPrice: 65000,
            newBackgroundColor: "default",
            newRigLayoutName: "mpvv"
        }).setGridsArray(this.itemId, [
            {
                "_id": "c4a7a56556a52301744577ce",
                "_name": "GridView (1)",
                "_parent": "mpvv",
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
                "_id": "50f6518f6d05525be19a2c1a",
                "_name": "GridView (2)",
                "_parent": "mpvv",
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
                "_id": "9bbc9d4206958e6e7980c5f1",
                "_name": "GridView (3)",
                "_parent": "mpvv",
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
                "_id": "e1d19d3f1eab8872ce7314b5",
                "_name": "GridView (4)",
                "_parent": "mpvv",
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
                "_id": "d8667394deb1f058fd9fac41",
                "_name": "GridView (5)",
                "_parent": "mpvv",
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
                "_id": "6f272c9ebd3c6a366eeb18f6",
                "_name": "GridView (6)",
                "_parent": "mpvv",
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
                "_id": "5ffdb56a3343c2cf1e4c3a10",
                "_name": "GridView (7)",
                "_parent": "mpvv",
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
                "_id": "4235593151e5db133544bdf4",
                "_name": "GridView (8)",
                "_parent": "mpvv",
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
                "_id": "1e8bfd2a7a7a83a18ff7f37d",
                "_name": "GridView (9)",
                "_parent": "mpvv",
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
                "_id": "790b2b33d3777ff1b967ac8d",
                "_name": "GridView (10)",
                "_parent": "mpvv",
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
                "_id": "fb8b017fc86a6bfbd17183c8",
                "_name": "GridView (11)",
                "_parent": "mpvv",
                "_props": {
                    "cellsH": 2,
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
                "_id": "539154c60fb6b64c961143f0",
                "_name": "GridView (12)",
                "_parent": "mpvv",
                "_props": {
                    "cellsH": 3,
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
                "_id": "527857658b19eb2ea2416e56",
                "_name": "GridView (13)",
                "_parent": "mpvv",
                "_props": {
                    "cellsH": 2,
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
        ]).createItemOffer({
            itemId: this.itemId,
            itemPrice: 65000,
            itemCurrency: NewMoney.ROUBLES,
            itemLoyalty: 1
        });
    }
}