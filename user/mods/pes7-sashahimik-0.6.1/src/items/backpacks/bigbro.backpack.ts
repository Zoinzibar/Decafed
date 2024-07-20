import { CategoriesEnum, NewMoney } from "../../Pes7Lib";
import { ICustomItem, MainProperties } from "src/Pes7Lib";

export class BigBroBackPack implements ICustomItem
{
    itemId: string = "shbigbrobackpack";
    public main(mainProperties: MainProperties): void
    {
        const {pes7Lib} = mainProperties;
        pes7Lib.createItem({
            newId: this.itemId,
            cloneId: "5df8a42886f77412640e2e75",
            parentId: "5448e5284bdc2dcb718b4567",
            newName: "Big Bro BackPack",
            newShortName: "Big Bro",
            newDescription: "Big Bro BackPack, made by Sasha Himik for sick in the head looters, who wanna loot whole world with love. You such love it so you can't drop it or give it to somebody :)",
            newCategory: CategoriesEnum.Backpacks,
            newPrice: 115000,
            newBackgroundColor: "violet",
            newRigLayoutName: "bigbrobackpack",
            newProps: {
                Width: 5,
                Height: 7,
                IsLockedafterEquip: true,
                IsUngivable: true,
                IsUnremovable: true
            }
        }).changePrefab(this.itemId, "assets/content/items/equipment/backpack_f4terminator/item_equipment_backpack_f4terminator.bundle")
            .setGridsArray(this.itemId, [
                {
                    "_id": "ac9e65e92907849ad8045e3c",
                    "_name": "GridView (1)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "cdd10f574f7623f8463f605f",
                    "_name": "GridView (2)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "97a649405e90e70333652177",
                    "_name": "GridView (3)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "6df9cf8e12ab262e293acb28",
                    "_name": "GridView (4)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "990e34ff7c71f4a6a9bfd8a5",
                    "_name": "GridView (5)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "7450507e49b607d38c57ecd1",
                    "_name": "GridView (6)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "7960de583a6a60e5407daaba",
                    "_name": "GridView (7)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "48a08cf311cf5c9a709927c7",
                    "_name": "GridView (8)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "9ee4e9a88096f5049ccdd089",
                    "_name": "GridView (9)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "f72303c1cd908072fbc67638",
                    "_name": "GridView (10)",
                    "_parent": "bigbrobackpack",
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
                    "_id": "e868dbcf8ed64ce1d2403ec7",
                    "_name": "GridView (11)",
                    "_parent": "bigbrobackpack",
                    "_props": {
                        "cellsH": 6,
                        "cellsV": 9,
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