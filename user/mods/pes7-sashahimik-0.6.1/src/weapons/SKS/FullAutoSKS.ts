import { Item } from "@spt/models/eft/common/tables/IItem";

export const createFullAutoSKS = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const fullAutoSKS: Item[] = [];

    fullAutoSKS.push({
        "_id": id,
        "_tpl": "shCustomSKSPart",
        "upd": {
            SpawnedInSession: true
        }
    });

    fullAutoSKS.push({
        "_id": "0bacac3ad5f2c13f6f40fcdc",
        "_tpl": "574dad8024597745964bf05c",
        "parentId": id,
        "slotId": "mod_stock"
    });

    fullAutoSKS.push({
        "_id": "5019049bcecec280774ef104",
        "_tpl": "634f02331f9f536910079b51",
        "parentId": id,
        "slotId": "mod_barrel"
    });

        
    fullAutoSKS.push({
        "_id": "8a94350fe00550d50992c041",
        "_tpl": "shSKSM100",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    fullAutoSKS.push({
        "_id": "b5118425ca9edf79db49156b",
        "_tpl": "634f05ca517ccc8a960fc748",
        "parentId": id,
        "slotId": "mod_reciever"
    });

    fullAutoSKS.push({
        "_id": "d209c4c66c5f3d65783b1997",
        "_tpl": "59e4d3d286f774176a36250a",
        "parentId": id,
        "slotId": "patron_in_weapon"
    });

    fullAutoSKS.push({
        "_id": "d2ae3c4cbf655bc5a967cb47",
        "_tpl": "634f04d82e5def262d0b30c6",
        "parentId": "5019049bcecec280774ef104",
        "slotId": "mod_mount_000"
    });

    fullAutoSKS.push({
        "_id": "a5567bd68df1c06d83fdec2e",
        "_tpl": "593d1fa786f7746da62d61ac",
        "parentId": "5019049bcecec280774ef104",
        "slotId": "mod_mount_001"
    });

    fullAutoSKS.push({
        "_id": "8cddbfa7e6ad9c8e529b5b4e",
        "_tpl": "59e4d3d286f774176a36250a",
        "parentId": "8a94350fe00550d50992c041",
        "slotId": "cartridges",
        "location": 0,
        "upd": {
            "StackObjectsCount": 10
        }
    });

    fullAutoSKS.push({
        "_id": "9d7c5f088331f9c6196f04d6",
        "_tpl": "584984812459776a704a82a6",
        "parentId": "a5567bd68df1c06d83fdec2e",
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

    fullAutoSKS.push({
        "_id": "285b3ce4f00940ebd0b82c60",
        "_tpl": "634f08a21f9f536910079b5a",
        "parentId": "e919dabd5a91e4a6cfa7f231",
        "slotId": "mod_mount_000"
    });

    fullAutoSKS.push({
        "_id": "e919dabd5a91e4a6cfa7f231",
        "_tpl": "634f02d7517ccc8a960fc744",
        "parentId": "d2ae3c4cbf655bc5a967cb47",
        "slotId": "mod_gas_block"
    });

    return fullAutoSKS;
}