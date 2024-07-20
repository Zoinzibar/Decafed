import { CustomSVastMagazine } from "../../weaponParts/SV/CustomSVastMagazine";
import { Item } from "@spt/models/eft/common/tables/IItem";
import { ISHCustomWeapon, Pes7Lib } from "src/Pes7Lib";
import { CustomSVastRoot } from "../../weaponParts/SV/CustomSVastRoot";

export class SVAST implements ISHCustomWeapon
{
    public createWeapon(id: string, pes7Lib: Pes7Lib): Item[]
    {
        const rowArray = [
            {
                "_id": "8a01037ead5f40cf23d68bb8",
                "_tpl": (new CustomSVastRoot()).itemId,
                "upd": {
                    "Repairable": {
                        "MaxDurability": 100,
                        "Durability": 100
                    },
                    "FireMode": {
                        "FireMode": "single"
                    }
                }
            },
            {
                "_id": "82237b5f8e2466dc1a63ee8f",
                "_tpl": (new CustomSVastMagazine()).itemId,
                "parentId": "8a01037ead5f40cf23d68bb8",
                "slotId": "mod_magazine"
            },
            {
                "_id": "a90e1297ee7485bb76e42686",
                "_tpl": "5d1b5e94d7ad1a2b865a96b0",
                "parentId": "8a01037ead5f40cf23d68bb8",
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
            },
            {
                "_id": "89c61e59c18ed0ba48db7aa6",
                "_tpl": "5c4eec9b2e2216398b5aaba2",
                "parentId": "8a01037ead5f40cf23d68bb8",
                "slotId": "mod_muzzle"
            },
            {
                "_id": "539d20a410eb2b701e510b00",
                "_tpl": "623b2e9d11c3296b440d1638",
                "parentId": "8a01037ead5f40cf23d68bb8",
                "slotId": "mod_stock",
                "upd": {
                    "Foldable": {
                        "Folded": false
                    }
                }
            },
            {
                "_id": "bfa694487bbc72703e7529c5",
                "_tpl": "5c4eecc32e221602b412b440",
                "parentId": "89c61e59c18ed0ba48db7aa6",
                "slotId": "mod_muzzle"
            },
            {
                "_id": "731ef2d50de5c79153a16f3e",
                "_tpl": "623c3c1f37b4b31470357737",
                "parentId": "539d20a410eb2b701e510b00",
                "slotId": "mod_handguard"
            },
            {
                "_id": "9c1c4f4816d7479f1d0c83dd",
                "_tpl": "619b69037b9de8162902673e",
                "parentId": "539d20a410eb2b701e510b00",
                "slotId": "mod_pistol_grip"
            },
            {
                "_id": "33dee40a93a327792835d214",
                "_tpl": "624c29ce09cd027dff2f8cd7",
                "parentId": "539d20a410eb2b701e510b00",
                "slotId": "mod_stock_000"
            },
            {
                "_id": "064625c4fb2aad167d44d96a",
                "_tpl": "5c4eecde2e221602b3140418",
                "parentId": "bfa694487bbc72703e7529c5",
                "slotId": "mod_tactical"
            },
            {
                "_id": "84193402ff312989bb657ea7",
                "_tpl": "623c2f652febb22c2777d8d7",
                "parentId": "731ef2d50de5c79153a16f3e",
                "slotId": "mod_mount_000"
            },
            {
                "_id": "cf257fe5b3b0415d3ffb7d6f",
                "_tpl": "59e0be5d86f7742d48765bd2",
                "parentId": "731ef2d50de5c79153a16f3e",
                "slotId": "mod_mount_001"
            },
            {
                "_id": "3ed9bea471d6037cd35cae3d",
                "_tpl": "644a3df63b0b6f03e101e065",
                "parentId": "84193402ff312989bb657ea7",
                "slotId": "mod_tactical",
                "upd": {
                    "Light": {
                        "IsActive": true,
                        "SelectedMode": 0
                    }
                }
            },
            {
                "_id": "b22d0795523b4db372ccc549",
                "_tpl": "560d657b4bdc2da74d8b4572",
                "parentId": "cf257fe5b3b0415d3ffb7d6f",
                "slotId": "mod_tactical",
                "upd": {
                    "Light": {
                        "IsActive": true,
                        "SelectedMode": 0
                    }
                }
            }
        ]
    
        return pes7Lib.weaponPreparer.prepareRowToWeapon(rowArray, id);
    }
}
