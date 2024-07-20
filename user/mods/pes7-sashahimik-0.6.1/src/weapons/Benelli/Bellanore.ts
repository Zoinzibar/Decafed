import { Item } from "@spt/models/eft/common/tables/IItem";

export const createBellanore = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const bellanore: Item[] = [];

    bellanore.push({
        "_id": id,
        "_tpl": "6259b864ebedf17603599e88",
        "upd": {
            SpawnedInSession: true
        }
    });

    bellanore.push({
        "_id": "2e82f064253bdfa393308450",
        "_tpl": "6259c2c1d714855d182bad85",
        "parentId": id,
        "slotId": "mod_barrel"
    });

    bellanore.push({
        "_id": "a73a7d23680108ccff42ae87",
        "_tpl": "6259c4347d6aab70bc23a190",
        "parentId": id,
        "slotId": "mod_handguard"
    });

        
    bellanore.push({
        "_id": "abba529f39a35ce181b9c4fc",
        "_tpl": "shBenelli25Ultra",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    bellanore.push({
        "_id": "d672563b438efd6df1f065f0",
        "_tpl": "625eb0faa6e3a82193267ad9",
        "parentId": id,
        "slotId": "mod_stock"
    });

    bellanore.push({
        "_id": "28ad0458b9b074a7d528589b",
        "_tpl": "625ed7c64d9b6612df732146",
        "parentId": id,
        "slotId": "mod_mount"
    });

    bellanore.push({
        "_id": "fbf3df60b21cc1025db84b6e",
        "_tpl": "625ebcef6f53af4aa66b44dc",
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

    bellanore.push({
        "_id": "d106301bca0572fade69a0b5",
        "_tpl": "625ec45bb14d7326ac20f572",
        "parentId": id,
        "slotId": "mod_charge"
    });

    
    bellanore.push({
        "_id": "e4f730e4e77cc49775189453",
        "_tpl": "5c0111ab0db834001966914d",
        "parentId": "2e82f064253bdfa393308450",
        "slotId": "mod_muzzle"
    });

    bellanore.push({
        "_id": "ca6b2167e1796f89d4ddada2",
        "_tpl": "6478641c19d732620e045e17",
        "parentId": "28ad0458b9b074a7d528589b",
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

    bellanore.push({
        "_id": "0a11359980884167daf67d97",
        "_tpl": "59fb137a86f7740adb646af1",
        "parentId": "e4f730e4e77cc49775189453",
        "slotId": "mod_muzzle"
    });

    return bellanore;
}