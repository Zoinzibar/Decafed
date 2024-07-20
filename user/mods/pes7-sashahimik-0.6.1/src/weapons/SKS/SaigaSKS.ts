import { Item } from "@spt/models/eft/common/tables/IItem";

export const createFullAutoSaigaSKS = (id: string): Item[] =>
{
    // Create an array ready to hold weapon + all mods
    const fullAutoSKS: Item[] = [];

    fullAutoSKS.push({
        "_id": id,
        "_tpl": "shCustomSaigaSKSPart",
        "upd": {
            SpawnedInSession: true
        }
    });

    fullAutoSKS.push({
        "_id": "6658f418d0681e7a3d823b68",//0bacac3ad5f2c13f6f40fcdc
        "_tpl": "574dad8024597745964bf05c",
        "parentId": id,
        "slotId": "mod_stock"
    });

    fullAutoSKS.push({
        "_id": "6658f41bb535d10401650f83",//5019049bcecec280774ef104
        "_tpl": "634f02331f9f536910079b51",
        "parentId": id,
        "slotId": "mod_barrel"
    });

        
    fullAutoSKS.push({
        "_id": "6658f41e0c8dd277811d20cb",//8a94350fe00550d50992c041
        "_tpl": "shSaigaSKS12x76x100",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    fullAutoSKS.push({
        "_id": "6658f423118150453b8b4d29",//b5118425ca9edf79db49156b
        "_tpl": "634f05ca517ccc8a960fc748",
        "parentId": id,
        "slotId": "mod_reciever"
    });

    fullAutoSKS.push({
        "_id": "6658f42aa5a1b7b60a2c627a",//d209c4c66c5f3d65783b1997
        "_tpl": "5d6e6911a4b9361bd5780d52",
        "parentId": id,
        "slotId": "patron_in_weapon"
    });

    fullAutoSKS.push({
        "_id": "6658f44d583b8f88a91737f2",//d2ae3c4cbf655bc5a967cb47
        "_tpl": "634f04d82e5def262d0b30c6",
        "parentId": "6658f41bb535d10401650f83",
        "slotId": "mod_mount_000"
    });

    fullAutoSKS.push({
        "_id": "6658f4d6e90de5a4947eac68",//a5567bd68df1c06d83fdec2e
        "_tpl": "593d1fa786f7746da62d61ac",
        "parentId": "6658f41bb535d10401650f83",
        "slotId": "mod_mount_001"
    });


    fullAutoSKS.push({
        "_id": "6658f4f3373141bf05273a06",//9d7c5f088331f9c6196f04d6
        "_tpl": "584984812459776a704a82a6",
        "parentId": "6658f4d6e90de5a4947eac68",
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
        "_id": "6658f4fcf8d4935382c28078",//285b3ce4f00940ebd0b82c60
        "_tpl": "634f08a21f9f536910079b5a",
        "parentId": "6658f508827065ab4da61eaa",
        "slotId": "mod_mount_000"
    });

    fullAutoSKS.push({
        "_id": "6658f508827065ab4da61eaa",//e919dabd5a91e4a6cfa7f231
        "_tpl": "634f02d7517ccc8a960fc744",
        "parentId": "6658f44d583b8f88a91737f2",
        "slotId": "mod_gas_block"
    });

    return fullAutoSKS;
}