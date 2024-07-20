import { Item } from "@spt/models/eft/common/tables/IItem";

export const createDedPaz = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const dedToz: Item[] = [];

    dedToz.push({
        "_id": id,
        "_tpl": "5a38e6bac4a2826c6e06d79b",
        "upd": {
            SpawnedInSession: true
        }
    });

    dedToz.push({
        "_id": "7dcbc735e18393c69ae4e06f",
        "_tpl": "shToz15Magazine",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    dedToz.push({
        "_id": "12c4c460df2b363cc99abc87",
        "_tpl": "5c99f3592e221644fc633070",
        "parentId": id,
        "slotId": "mod_stock"
    });

        
    dedToz.push({
        "_id": "810b4ec7a41b33ec1ab4735d",
        "_tpl": "5c6162682e22160010261a2b",
        "parentId": id,
        "slotId": "mod_mount_000"
    });

    dedToz.push({
        "_id": "3c7f98159601f7059b63f5bd",
        "_tpl": "5bbde409d4351e003562b036",
        "parentId": "12c4c460df2b363cc99abc87",
        "slotId": "mod_stock"
    });

    dedToz.push({
        "_id": "b6b305111e853fd12b8b702a",
        "_tpl": "5c61627a2e22160012542c55",
        "parentId": "810b4ec7a41b33ec1ab4735d",
        "slotId": "mod_mount_000"
    });

    dedToz.push({
        "_id": "a7073f9b201649dd2780c059",
        "_tpl": "6478641c19d732620e045e17",
        "parentId": "b6b305111e853fd12b8b702a",
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

    return dedToz;
}