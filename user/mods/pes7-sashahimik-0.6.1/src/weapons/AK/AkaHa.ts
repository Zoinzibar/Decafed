import { Item } from "@spt/models/eft/common/tables/IItem";

export const createAkaHa = (id: string): Item[] =>
{
    const akaHa: Item[] = [];

    akaHa.push({
        "_id": id,
        "_tpl": "5ac66d9b5acfc4001633997a",
        "upd": {
            SpawnedInSession: true
        }
    });

    akaHa.push({
        "_id": "c44cf8dd2298af907c0deefa",
        "_tpl": "59ccfdba86f7747f2109a587",
        "parentId": id,
        "slotId": "mod_gas_block"
    });

    akaHa.push({
        "_id": "3a1dc63ef13d76474b3ccadb",
        "_tpl": "57ffb0e42459777d047111c5",
        "parentId": id,
        "slotId": "mod_muzzle"
    });

        
    akaHa.push({
        "_id": "2d6854df79be64e188b2dbae",
        "_tpl": "5e2192a498a36665e8337386",
        "parentId": id,
        "slotId": "mod_pistol_grip"
    });

    akaHa.push({
        "_id": "d87ca20c5f7064bfc5b7b14d",
        "_tpl": "5d2c770c48f0354b4a07c100",
        "parentId": id,
        "slotId": "mod_reciever"
    });

    akaHa.push({
        "_id": "9bdda81daae4e0d7e6c4e1a2",
        "_tpl": "5bf3f59f0db834001a6fa060",
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

    akaHa.push({
        "_id": "a7a4ff3de2cf21c58b11e45c",
        "_tpl": "5ac78eaf5acfc4001926317a",
        "parentId": id,
        "slotId": "mod_stock"
    }
    );

    akaHa.push({
        "_id": "2e8f9615bbcdb9b7e3de1616",
        "_tpl": "shBL31_5x45x39_90Magazine",
        "parentId": id,
        "slotId": "mod_magazine"
    });

    akaHa.push({
        "_id": "b799d85a627044857c1de44f",
        "_tpl": "6130ca3fd92c473c77020dbd",
        "parentId": id,
        "slotId": "mod_charge"
    });

    akaHa.push({
        "_id": "8bd255b97c57957082f549f2",
        "_tpl": "5649a2464bdc2d91118b45a8",
        "parentId": "c44cf8dd2298af907c0deefa",
        "slotId": "mod_scope"
    });

    akaHa.push({
        "_id": "84797724356381da4ece223c",
        "_tpl": "5a7b483fe899ef0016170d15",
        "parentId": "c44cf8dd2298af907c0deefa",
        "slotId": "mod_tactical_000",
        "upd": {
            "Light": {
                "IsActive": true,
                "SelectedMode": 0
            }
        }
    });

    akaHa.push({
        "_id": "9cf75f4f00496491d4b165f2",
        "_tpl": "57ac965c24597706be5f975c",
        "parentId": "d87ca20c5f7064bfc5b7b14d",
        "slotId": "mod_scope",
        "upd": {
            "Sight": {
                "ScopesCurrentCalibPointIndexes": [
                    0,
                    0
                ],
                "ScopesSelectedModes": [
                    0,
                    0
                ],
                "SelectedScope": 0
            }
        }
    });

    akaHa.push({
        "_id": "85c343fd0afb1f2448785143",
        "_tpl": "59ecc3dd86f7746dc827481c",
        "parentId": "a7a4ff3de2cf21c58b11e45c",
        "slotId": "mod_stock"
    });

    akaHa.push({
        "_id": "d98bccd05b08da33dca8473c",
        "_tpl": "57ae0171245977343c27bfcf",
        "parentId": "8bd255b97c57957082f549f2",
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

    return akaHa;
}