import { Item } from "@spt/models/eft/common/tables/IItem";

export const createCustomRPK = (id: string): Item[] =>
{
    const customRPK: Item[] = [];

    customRPK.push({
        "_id": id,
        "_tpl": "64637076203536ad5600c990", 
        "upd": {
            SpawnedInSession: true
        }
    });

    customRPK.push({
        "_id": "9a76c3726e96845abd4094ba",
        "_tpl": "648ae3e356c6310a830fc291",
        "parentId": id,
        "slotId": "mod_pistolgrip"
    });

    customRPK.push({
        "_id": "5b2467014a24512e9eaf90ba",
        "_tpl": "shRPK500Magazine",
        "parentId": id,
        "slotId": "mod_magazine"
    });

        
    customRPK.push({
        "_id": "d64e98110c77b5dacfc96829",
        "_tpl": "6492e3a97df7d749100e29ee",
        "parentId": id,
        "slotId": "mod_stock"
    });

    customRPK.push({
        "_id": "9347982f2e17da9a35c037c4",
        "_tpl": "64639a9aab86f8fd4300146c",
        "parentId": id,
        "slotId": "mod_barrel"
    });

    customRPK.push({
        "_id": "4eca95d9638335c921b568b9",
        "_tpl": "6491c6f6ef312a876705191b",
        "parentId": id,
        "slotId": "mod_handguard"
    }
    );

    customRPK.push({
        "_id": "50284cf2195deda2a50c2100",
        "_tpl": "6492fb8253acae0af00a29b6",
        "parentId": id,
        "slotId": "mod_sight_rear",
        "upd": {
            "Sight": {
                "ScopesCurrentCalibPointIndexes": [
                    0
                ],
                "ScopesSelectedModes": [
                    0
                ],
                "SelectedScope": 0
            }
        }
    });

    customRPK.push({
        "_id": "6df69493334281fd4dc4ad68",
        "_tpl": "6113cc78d3a39d50044c065a",
        "parentId": "9a76c3726e96845abd4094ba",
        "slotId": "mod_pistolgrip_000"
    });

    customRPK.push({
        "_id": "a51f56e2b22f710f7735438b",
        "_tpl": "6492c8bba6e68e06fb0bae87",
        "parentId": "4eca95d9638335c921b568b9",
        "slotId": "mod_mount"
    });

    customRPK.push({
        "_id": "1b9d7b72ec96140ec1b16ef4",
        "_tpl": "57fd23e32459772d0805bcf1",
        "parentId": "4eca95d9638335c921b568b9",
        "slotId": "mod_tactical_001",
        "upd": {
            "Light": {
                "IsActive": true,
                "SelectedMode": 0
            }
        }
    });

    customRPK.push({
        "_id": "5ef1d0e45a8d968e00170b6c",
        "_tpl": "5c1cd46f2e22164bef5cfedb",
        "parentId": "4eca95d9638335c921b568b9",
        "slotId": "mod_foregrip"
    });

    customRPK.push({
        "_id": "c6f0d6429e3f4e87be49ce0d",
        "_tpl": "59f9d81586f7744c7506ee62",
        "parentId": "a51f56e2b22f710f7735438b",
        "slotId": "mod_scope",
        "upd": {
            "Sight": {
                "ScopesCurrentCalibPointIndexes": [
                    0
                ],
                "ScopesSelectedModes": [
                    0
                ],
                "SelectedScope": 0
            }
        }
    });

    return customRPK;
}