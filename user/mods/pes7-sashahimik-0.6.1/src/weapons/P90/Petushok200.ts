import { Item } from "@spt/models/eft/common/tables/IItem";

export const createPetushok200 = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const assVal: Item[] = [];

    assVal.push({
        "_id": id,
        "_tpl": "5cc82d76e24e8d00134b4b83",
        "upd": {
            SpawnedInSession: true
        }
    });

    assVal.push({
        "_id": "fccf93c78003fc4cf8df512a",
        "_tpl": "shP90M200",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    assVal.push({
        "_id": "327bd730bd710f1ddbec46b8",
        "_tpl": "5cebec10d7f00c065703d185",
        "parentId": id,
        "slotId": "mod_stock"
    });

        
    assVal.push({
        "_id": "56e73760b3e853dbd435d8e2",
        "_tpl": "5cc700ede4a949033c734315",
        "parentId": id,
        "slotId": "mod_reciever"
    });

    assVal.push({
        "_id": "19096acad116fd594b760311",
        "_tpl": "5cc701d7e4a94900100ac4e7",
        "parentId": id,
        "slotId": "mod_barrel"
    });

    assVal.push({
        "_id": "adfbfa230d66dd9d51d4a3da",
        "_tpl": "5cc6ea85e4a949000e1ea3c3",
        "parentId": id,
        "slotId": "mod_charge"
    });

    assVal.push({
        "_id": "056e1568d388e9b213629ec5",
        "_tpl": "5cc700d4e4a949000f0f0f28",
        "parentId": "327bd730bd710f1ddbec46b8",
        "slotId": "mod_stock_000"
    });

    assVal.push({
        "_id": "37ec02e31ab1f74691533922",
        "_tpl": "5cc7012ae4a949001252b43e",
        "parentId": "56e73760b3e853dbd435d8e2",
        "slotId": "mod_mount_000"
    });

    assVal.push({
        "_id": "410f0b2e2fb1a557826c91f6",
        "_tpl": "5cc7012ae4a949001252b43e",
        "parentId": "56e73760b3e853dbd435d8e2",
        "slotId": "mod_mount_001"
    });

    assVal.push({
        
        "_id": "535e3ee51418f1dd1d9405c6",
        "_tpl": "584924ec24597768f12ae244",
        "parentId": "56e73760b3e853dbd435d8e2",
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
        "_id": "28d1658abedb48c29b3e5ed3",
        "_tpl": "57fd23e32459772d0805bcf1",
        "parentId": "37ec02e31ab1f74691533922",
        "slotId": "mod_tactical",
        "upd": {
            "Light": {
                "IsActive": true,
                "SelectedMode": 0
            }
        }
    });

    return assVal;
}