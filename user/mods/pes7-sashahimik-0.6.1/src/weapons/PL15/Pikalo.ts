import { Item } from "@spt/models/eft/common/tables/IItem";

export const createPikalo = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const pikalo: Item[] = [];

    pikalo.push({
        "_id": id,
        "_tpl": "shCustomPikalo",
        "upd": {
            SpawnedInSession: true
        }
    });

    pikalo.push({
        "_id": "9847a6de4bb4b607280a6b9e",
        "_tpl": "602a95fe4e02ce1eaa358729",
        "parentId": id,
        "slotId": "mod_barrel"
    });

    pikalo.push({
        "_id": "6ebc709abbb20b6a092d180f",
        "_tpl": "60228924961b8d75ee233c32",
        "parentId": id,
        "slotId": "mod_reciever"
    });

        
    pikalo.push({
        "_id": "c56751477aa9a8d3c076ca4b",
        "_tpl": "shPL15_45Mag",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    pikalo.push({
        "_id": "c7cfeb3b707e7ecaae7653ea",
        "_tpl": "5a7b4900e899ef197b331a2a",
        "parentId": id,
        "slotId": "mod_tactical"
    });

    pikalo.push({
        "_id": "57dfc7164ba1c7d07a338be2",
        "_tpl": "5a33a8ebc4a282000c5a950d",
        "parentId": "9847a6de4bb4b607280a6b9e",
        "slotId": "mod_muzzle"
    });

    pikalo.push({
        "_id": "f1250758149d040b1cfa6ff6",
        "_tpl": "602293f023506e50807090cb",
        "parentId": "6ebc709abbb20b6a092d180f",
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

    pikalo.push({
        "_id": "3f287eec12666d803d4e9c5b",
        "_tpl": "57ae0171245977343c27bfcf",
        "parentId": "c7cfeb3b707e7ecaae7653ea",
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

    pikalo.push({
        "_id": "22b3a2f14757ea61b8a7e131",
        "_tpl": "560d657b4bdc2da74d8b4572",
        "parentId": "c7cfeb3b707e7ecaae7653ea",
        "slotId": "mod_tactical",
        "upd": {
            "Light": {
                "IsActive": true,
                "SelectedMode": 0
            }
        }
    });

    return pikalo;
}