import { Item } from "@spt/models/eft/common/tables/IItem";

export const createFullAutoSaiga = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const fullAutoSaiga: Item[] = [];

    fullAutoSaiga.push({
        "_id": id,
        "_tpl": "shCustomSaigaPart",
        "upd": {
            SpawnedInSession: true
        }
    });

    fullAutoSaiga.push({
        "_id": "8d76090c677de1362563ff84",
        "_tpl": "5c90c3622e221601da359851",
        "parentId": id,
        "slotId": "mod_mount_000"
    });

    fullAutoSaiga.push({
        "_id": "e32c84b34b57237ee122926e",
        "_tpl": "58272b392459774b4c7b3ccd",
        "parentId": id,
        "slotId": "mod_handguard"
    });

    fullAutoSaiga.push({
        "_id": "09982d798b5ccf75b60d312c",
        "_tpl": "59c0ec5b86f77435b128bfca",
        "parentId": id,
        "slotId": "mod_muzzle"
    });

    fullAutoSaiga.push({
        "_id": "d0695360b1b47a3f135c703e",
        "_tpl": "628a664bccaab13006640e47",
        "parentId": id,
        "slotId": "mod_pistol_grip"
    });

    fullAutoSaiga.push({
        "_id": "a5ba1838fdd262c4cab44972",
        "_tpl": "57a9b9ce2459770ee926038d",
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

    fullAutoSaiga.push({
        "_id": "ad57b4a1c6691480b3f8b1f6",
        "_tpl": "57616ca52459773c69055192",
        "parentId": id,
        "slotId": "mod_stock"
    });

    fullAutoSaiga.push({
        "_id": "a8ecb62cb85eb17088f286fd",
        "_tpl": "shSaiga12x76x100",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    fullAutoSaiga.push({
        "_id": "ba7f987242874ea2bb55c0b7",
        "_tpl": "6130ca3fd92c473c77020dbd",
        "parentId": id,
        "slotId": "mod_charge"
    });

    fullAutoSaiga.push({
        "_id": "e6185d7043bbd9a35e5c55f7",
        "_tpl": "5d6e68c4a4b9361b93413f79",
        "parentId": id,
        "slotId": "patron_in_weapon"
    });

    fullAutoSaiga.push({
        "_id": "a5f8f57ace38b8d7e8a62d3d",
        "_tpl": "57c69dd424597774c03b7bbc",
        "parentId": "8d76090c677de1362563ff84",
        "slotId": "mod_scope"
    });

    fullAutoSaiga.push({
        "_id": "1f3ea040f9cf5c3087230f44",
        "_tpl": "588226dd24597767ad33f789",
        "parentId": "e32c84b34b57237ee122926e",
        "slotId": "mod_foregrip"
    });

    fullAutoSaiga.push({
        "_id": "e6393208c6158ab0e2d7faa6",
        "_tpl": "5b3a337e5acfc4704b4a19a0",
        "parentId": "e32c84b34b57237ee122926e",
        "slotId": "mod_tactical_002",
        "upd": {
            "Light": {
                "IsActive": true,
                "SelectedMode": 0
            }
        }
    });

    fullAutoSaiga.push({
        "_id": "ef46d4b75c866d60ab4699ec",
        "_tpl": "5a0c59791526d8dba737bba7",
        "parentId": "ad57b4a1c6691480b3f8b1f6",
        "slotId": "mod_stock"
    });

    fullAutoSaiga.push({
        "_id": "72210f3de60cf914669ea20d",
        "_tpl": "5d6e68c4a4b9361b93413f79",
        "parentId": "a8ecb62cb85eb17088f286fd",
        "slotId": "cartridges",
        "location": 0,
        "upd": {
            "StackObjectsCount": 16
        }
    });

    fullAutoSaiga.push({
        "_id": "fe5e6fdd8bc86abf441cea5d",
        "_tpl": "5b3b99475acfc432ff4dcbee",
        "parentId": "a5f8f57ace38b8d7e8a62d3d",
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

    return fullAutoSaiga;
}