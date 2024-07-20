import { Item } from "@spt/models/eft/common/tables/IItem";

export const createRullete = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const rullete: Item[] = [];

    rullete.push({
        "_id": id,
        "_tpl": "60db29ce99594040e04c4a27",
        "upd": {
            SpawnedInSession: true
        }
    });

    rullete.push({
        "_id": "351f2dd697f6d6e3d46d56ae",
        "_tpl": "shcylmc255",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    rullete.push({
        "_id": "7fd2e9980319c556aca4fe4e",
        "_tpl": "612368f58b401f4f51239b33",
        "parentId": id,
        "slotId": "mod_barrel"
    });

        
    rullete.push({
        "_id": "91c8b5b08ddce62e8e56a703",
        "_tpl": "612781056f3d944a17348d60",
        "parentId": id,
        "slotId": "mod_stock"
    });

    rullete.push({
        "_id": "ebd75f99881ebb6c573eab6a",
        "_tpl": "6123649463849f3d843da7c4",
        "parentId": id,
        "slotId": "mod_handguard"
    });

    rullete.push({
        "_id": "83481b48ea90a52edb2367fe",
        "_tpl": "619d36da53b4d42ee724fae4",
        "parentId": "7fd2e9980319c556aca4fe4e",
        "slotId": "mod_muzzle"
    });

    rullete.push({
        "_id": "e426e3f6902acd74f6953660",
        "_tpl": "5dfe14f30b92095fd441edaf",
        "parentId": "7fd2e9980319c556aca4fe4e",
        "slotId": "mod_mount"
    });

    rullete.push({
        "_id": "8b2cb70912dc335728ad55dc",
        "_tpl": "64785e7c19d732620e045e15",
        "parentId": "e426e3f6902acd74f6953660",
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

    return rullete;
}