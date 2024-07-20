import { Item } from "@spt/models/eft/common/tables/IItem";

export const createCustomVss = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const assVal: Item[] = [];

    assVal.push({
        "_id": id,
        "_tpl": "57c44b372459772d2b39b8ce",
        "upd": {
            SpawnedInSession: true
        }
    });

    assVal.push({
        "_id": "2f4b18bb69be168efe98e416",
        "_tpl": "57838c962459774a1651ec63",
        "parentId": id,
        "slotId": "mod_muzzle"
    });

    assVal.push({
        "_id": "d797a67102a19dd3a2e71088",
        "_tpl": "578395402459774a256959b5",
        "parentId": id,
        "slotId": "mod_reciever"
    });

        
    assVal.push({
        "_id": "10aac090425472fddab3c3d5",
        "_tpl": "shVal90Magazine",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    assVal.push({
        "_id": "db410bce02057753625c2151",
        "_tpl": "5a69a2ed8dc32e000d46d1f1",
        "parentId": id,
        "slotId": "mod_pistol_grip"
    });

    assVal.push({
        "_id": "0a738cc73eb192b7671ab21b",
        "_tpl": "5648ac824bdc2ded0b8b457d",
        "parentId": id,
        "slotId": "mod_charge"
    });

    assVal.push({
        "_id": "9cbfc4e7ed5e11f51bc22e48",
        "_tpl": "5dff8db859400025ea5150d4",
        "parentId": id,
        "slotId": "mod_mount_000"
    });

    assVal.push({
        "_id": "3e680d7a6536be1036c0b96f",
        "_tpl": "59eb7ebe86f7740b373438ce",
        "parentId": "2f4b18bb69be168efe98e416",
        "slotId": "mod_mount_000"
    });

    assVal.push({
        "_id": "00bc654c01a08ac3ce8dccf5",
        "_tpl": "6529370c405a5f51dd023db8",
        "parentId": "db410bce02057753625c2151",
        "slotId": "mod_stock_000"
    });

    assVal.push({
        "_id": "c106116ffc3aebef9fa1be64",
        "_tpl": "5c07dd120db834001c39092d",
        "parentId": "9cbfc4e7ed5e11f51bc22e48",
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

    assVal.push({
        "_id": "056c3c168a1113629d566d81",
        "_tpl": "544909bb4bdc2d6f028b4577",
        "parentId": "3e680d7a6536be1036c0b96f",
        "slotId": "mod_tactical_000",
        "upd": {
            "Light": {
                "IsActive": true,
                "SelectedMode": 0
            }
        }
    });

    assVal.push({
        "_id": "dde96c5d6ac0979d998f6b76",
        "_tpl": "5c1cd46f2e22164bef5cfedb",
        "parentId": "3e680d7a6536be1036c0b96f",
        "slotId": "mod_foregrip"
    });

    return assVal;
}