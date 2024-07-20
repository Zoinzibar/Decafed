import type { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

import { BiggerBangLib } from "../BiggerBangLib";

import * as config from "../../config/config.json";

let logger: ILogger;

export class CustomInjectors 
{
    public createCustomInjectors(serverDatabaseTables: IDatabaseTables, jsonUtil: JsonUtil, container: DependencyContainer)
    {
        if (config.Injectors.Enabled) 
        {
            const buffs = serverDatabaseTables.globals.config.Health.Effects.Stimulator.Buffs;
            const itemTrader = "sashahimik";
            const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
            const injectorParentID = "5448f3a64bdc2d60728b456a";

            const bbLib = new BiggerBangLib(container);
            logger = container.resolve<ILogger>("WinstonLogger");

            const shMiniHimik = [
                {
                    "BuffType": "WeightLimit",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 900,
                    "Value": 0.7,
                    "AbsoluteValue": false,
                    "SkillName": ""
                },
                {
                    "BuffType": "HealthRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 900,
                    "Value": -0.2,
                    "AbsoluteValue": true,
                    "SkillName": ""
                }
            ]

            buffs["shMiniHimik"] = shMiniHimik;

            const shMiniHimikItemFleaPrice = 15000;
            const shMiniHimikItemCategory = "5b47574386f77428ca22b33a";
            const shMiniHimikId = "shMiniHimik";
            const shMiniHimikClone = "5ed51652f6c34d2cc26336a1";
            const shMiniHimikLongName = "SH Mini Himik Injector";
            const shMiniHimikShortName = "MIN HIMIK";
            const shMiniHimikDescription = "Mini Himik, will grant you little more power that you have";
            const shMiniHimikLL = 1;
            const shMiniHimiCount = 120;
            const shMiniHimiLimit = 3;

            const shMiniHimikProps = {
                BackgroundColor: "grey",
                StimulatorBuffs: "shMiniHimik"
            }

            bbLib.createItem(shMiniHimikId, shMiniHimikClone, injectorParentID, shMiniHimikLongName, shMiniHimikShortName, shMiniHimikDescription, shMiniHimikItemCategory, shMiniHimikItemFleaPrice, shMiniHimikProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shMiniHimikId, itemTrader, shMiniHimiCount, shMiniHimiLimit, shMiniHimikItemFleaPrice, itemTraderCurrency, shMiniHimikLL, serverDatabaseTables);

            const shMiddleHimik = [
                {
                    "BuffType": "WeightLimit",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1600,
                    "Value": 1.2,
                    "AbsoluteValue": false,
                    "SkillName": ""
                },
                {
                    "BuffType": "HealthRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1600,
                    "Value": -0.1,
                    "AbsoluteValue": true,
                    "SkillName": ""
                }
            ]

            buffs["shMiddleHimik"] = shMiddleHimik;

            const shMiddleHimikItemFleaPrice = 27000;
            const shMiddleHimikItemCategory = "5b47574386f77428ca22b33a";
            const shMiddleHimikId = "shMiddleHimik";
            const shMiddleHimikClone = "5ed51652f6c34d2cc26336a1";
            const shMiddleHimikLongName = "SH Middle Himik Injector";
            const shMiddleHimikShortName = "MID HIMIK";
            const shMiddleHimikDescription = "SH Middle Himik Injector, grant you more and more power for your looting :)";
            const shMiddleHimikLL = 2;
            const shMiddleHimikCount = 40;
            const shMiddleHimikLimit = 2;

            const shMiddleHimikProps = {
                BackgroundColor: "yellow",
                StimulatorBuffs: "shMiddleHimik"
            }

            bbLib.createItem(shMiddleHimikId, shMiddleHimikClone, injectorParentID, shMiddleHimikLongName, shMiddleHimikShortName, shMiddleHimikDescription, shMiddleHimikItemCategory, shMiddleHimikItemFleaPrice, shMiddleHimikProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shMiddleHimikId, itemTrader, shMiddleHimikCount, shMiddleHimikLimit, shMiddleHimikItemFleaPrice, itemTraderCurrency, shMiddleHimikLL, serverDatabaseTables);

            const shSeniorStim = [
                {
                    "BuffType": "WeightLimit",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 3200,
                    "Value": 3,
                    "AbsoluteValue": false,
                    "SkillName": ""
                },
                {
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 3200,
                    "Value": 2,
                    "AbsoluteValue": true,
                    "SkillName": ""
                }
            ]

            buffs["shSeniorStim"] = shSeniorStim;

            const shSeniorStimItemFleaPrice = 50000;
            const shSeniorStimItemCategory = "5b47574386f77428ca22b33a";
            const shSeniorStimId = "shSeniorStim";
            const shSeniorStimClone = "5ed51652f6c34d2cc26336a1";
            const shSeniorStimLongName = "SH Senior Himik Injector";
            const shSeniorStimShortName = "SEN HIMIK";
            const shSeniorStimDescription = "SH Senior Himik Injector, grant you more, more and more power for your sweet looting :)";
            const shSeniorStimLL = 2; // 3 tier in future
            const shSeniorStimCount = 3;
            const shSeniorStimLimit = 1;

            const shSeniorStimProps = {
                BackgroundColor: "orange",
                StimulatorBuffs: "shSeniorStim"
            }

            bbLib.createItem(shSeniorStimId, shSeniorStimClone, injectorParentID, shSeniorStimLongName, shSeniorStimShortName, shSeniorStimDescription, shSeniorStimItemCategory, shSeniorStimItemFleaPrice, shSeniorStimProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shSeniorStimId, itemTrader, shSeniorStimCount, shSeniorStimLimit, shSeniorStimItemFleaPrice, itemTraderCurrency, shSeniorStimLL, serverDatabaseTables);
        
            const shDivineStim = [
                {
                    "BuffType": "WeightLimit",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 5000,
                    "Value": 5,
                    "AbsoluteValue": false,
                    "SkillName": ""
                },
                {
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 5000,
                    "Value": 2.5,
                    "AbsoluteValue": true,
                    "SkillName": ""
                }
            ]

            buffs["shDivineStim"] = shDivineStim;

            const shDivineStimItemFleaPrice = 150000;
            const shDivineStimItemCategory = "5b47574386f77428ca22b33a";
            const shDivineStimId = "shDivineStim";
            const shDivineStimClone = "5ed51652f6c34d2cc26336a1";
            const shDivineStimLongName = "SH Divine Himik Injector";
            const shDivineStimShortName = "DIV HIMIK";
            const shDivineStimDescription = "SH Divine Himik Injector, GOD bless you with unlimited power for your sweetest loot, don't waste time!";
            const shDivineStimLL = 2; // 4 tier in future
            const shDivineStimCount = 2;
            const shDivineStimLimit = 1;

            const shDivineStimProps = {
                BackgroundColor: "red",
                StimulatorBuffs: "shDivineStim"
            }

            bbLib.createItem(shDivineStimId, shDivineStimClone, injectorParentID, shDivineStimLongName, shDivineStimShortName, shDivineStimDescription, shDivineStimItemCategory, shDivineStimItemFleaPrice, shDivineStimProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shDivineStimId, itemTrader, shDivineStimCount, shDivineStimLimit, shDivineStimItemFleaPrice, itemTraderCurrency, shDivineStimLL, serverDatabaseTables);
        
            const shUhilant = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "HealthRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 120,
                    "SkillName": "",
                    "Value": 12
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "RemoveAllBloodLosses",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 20,
                    "SkillName": "",
                    "Value": 0
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "WeightLimit",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 600,
                    "SkillName": "",
                    "Value": 2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 600,
                    "SkillName": "",
                    "Value": 0.5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "UnknownToxin",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 60,
                    "SkillName": "",
                    "Value": 0.1
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "Contusion",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 600,
                    "SkillName": "",
                    "Value": 0.9
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "Pain",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 600,
                    "SkillName": "",
                    "Value": 0.5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "BodyTemperature",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 600,
                    "SkillName": "",
                    "Value": 4
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HydrationRate",
                    "Chance": 1,
                    "Delay": 30,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": -2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 30,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": -2
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "QuantumTunnelling",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 120,
                    "SkillName": "",
                    "Value": 0
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HandsTremor",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 0
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HealthRate",
                    "Chance": 1,
                    "Delay": 200,
                    "Duration": 1200,
                    "SkillName": "",
                    "Value": -3
                }
            ]

            buffs["shUhilant"] = shUhilant;

            const shUhilantItemFleaPrice = 1000000;
            const shUhilantItemCategory = "5b47574386f77428ca22b33a";
            const shUhilantId = "shUhilant";
            const shUhilantClone = "5ed51652f6c34d2cc26336a1";
            const shUhilantLongName = "SH Uhilant";
            const shUhilantShortName = "Uhilant";
            const shUhilantDescription = "SH Uhilant Injector, last think that you should use in your life, it situation when you know - you will die and very soon. It will heal you, grant you last chance to survive, be what the cost.....";
            const shUhilantLL = 2; // 4 tier in future
            const shUhilantCount = 2;
            const shUhilantLimit = 1;

            const shUhilantProps = {
                BackgroundColor: "red",
                StimulatorBuffs: "shUhilant"
            }

            bbLib.createItem(shUhilantId, shUhilantClone, injectorParentID, shUhilantLongName, shUhilantShortName, shUhilantDescription, shUhilantItemCategory, shUhilantItemFleaPrice, shUhilantProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shUhilantId, itemTrader, shUhilantCount, shUhilantLimit, shUhilantItemFleaPrice, itemTraderCurrency, shUhilantLL, serverDatabaseTables);
        
            const shEnergyDrive = [
                {
                    "AbsoluteValue": false,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 15,
                    "Duration": 45,
                    "SkillName": "",
                    "Value": 3
                },   
                {
                    "AbsoluteValue": false,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 60,
                    "Duration": 540,
                    "SkillName": "",
                    "Value": 10
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "HydrationRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 55,
                    "SkillName": "",
                    "Value": -10
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "HydrationRate",
                    "Chance": 1,
                    "Delay": 60,
                    "Duration": 240,
                    "SkillName": "",
                    "Value": -3
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HydrationRate",
                    "Chance": 1,
                    "Delay":300,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": -1
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay":5,
                    "Duration": 55,
                    "SkillName": "",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay":60,
                    "Duration": 240,
                    "SkillName": "",
                    "Value": -3
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": -1
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "Pain",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 595,
                    "SkillName": "",
                    "Value": 0
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 595,
                    "SkillName": "Endurance",
                    "Value": 20
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HandsTremor",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 0
                }
            ]

            buffs["shEnergyDrive"] = shEnergyDrive;

            const shEnergyDriveItemFleaPrice = 50000;
            const shEnergyDriveItemCategory = "5b47574386f77428ca22b33a";
            const shEnergyDriveId = "shEnergyDrive";
            const shEnergyDriveClone = "5ed51652f6c34d2cc26336a1";
            const shEnergyDriveLongName = "SH Energy Drive - 1";
            const shEnergyDriveShortName = "ED-1";
            const shEnergyDriveDescription = "SH Energy Drive - 1 Injector, developed by Sasha Himik for extreme situations when you need stamina for fast travel";
            const shEnergyDriveLL = 1;
            const shEnergyDriveCount = 10;
            const shEnergyDriveLimit = 2;

            const shEnergyDriveProps = {
                BackgroundColor: "green",
                StimulatorBuffs: "shEnergyDrive"
            }

            bbLib.createItem(shEnergyDriveId, shEnergyDriveClone, injectorParentID, shEnergyDriveLongName, shEnergyDriveShortName, shEnergyDriveDescription, shEnergyDriveItemCategory, shEnergyDriveItemFleaPrice, shEnergyDriveProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shEnergyDriveId, itemTrader, shEnergyDriveCount, shEnergyDriveLimit, shEnergyDriveItemFleaPrice, itemTraderCurrency, shEnergyDriveLL, serverDatabaseTables);
        
            const shHeavy = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 600,
                    "SkillName": "LightVests",
                    "Value": 30
                },
        
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 600,
                    "SkillName": "HeavyVests",
                    "Value":30
                }
            ]

            buffs["shHeavy"] = shHeavy;

            const shHeavyItemFleaPrice = 30000;
            const shHeavyItemCategory = "5b47574386f77428ca22b33a";
            const shHeavyId = "shHeavy";
            const shHeavyClone = "5ed51652f6c34d2cc26336a1";
            const shHeavyLongName = "SH Heavy";
            const shHeavyShortName = "SH Heavy";
            const shHeavyDescription = "SH Heavy Injector, for weakly mans only";
            const shHeavyLL = 1;
            const shHeavyCount = 45;
            const shHeavyLimit = 5;

            const shHeavyProps = {
                BackgroundColor: "green",
                StimulatorBuffs: "shHeavy"
            }

            bbLib.createItem(shHeavyId, shHeavyClone, injectorParentID, shHeavyLongName, shHeavyShortName, shHeavyDescription, shHeavyItemCategory, shHeavyItemFleaPrice, shHeavyProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shHeavyId, itemTrader, shHeavyCount, shHeavyLimit, shHeavyItemFleaPrice, itemTraderCurrency, shHeavyLL, serverDatabaseTables);
        
            //In future make separate injectors
            const shShootingTime = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "Pistols",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "Revolvers",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "SMGs",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "AssaultRifles",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "Shotguns",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "SniperRifles",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "LMGs",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "HMGs",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "RocketLaunchers",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "Throwables",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "UnderbarrelLaunchers",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 295,
                    "SkillName": "DMRs",
                    "Value": 30
                }
            ]

            buffs["shShootingTime"] = shShootingTime;

            const shShootingTimeItemFleaPrice = 90000;
            const shShootingTimeItemCategory = "5b47574386f77428ca22b33a";
            const shShootingTimeId = "shShootingTime";
            const shShootingTimeClone = "5ed51652f6c34d2cc26336a1";
            const shShootingTimeLongName = "SH Shooting Time";
            const shShootingTimeShortName = "Shoot T";
            const shShootingTimeDescription = "SH Shooting Time Injector, elevates your shooting game to the next level. Created by Sasha Himik";
            const shShootingTimeLL = 2;
            const shShootingTimeCount = 30;
            const shShootingTimeLimit = 3;

            const shShootingTimeProps = {
                BackgroundColor: "orange",
                StimulatorBuffs: "shShootingTime"
            }

            bbLib.createItem(shShootingTimeId, shShootingTimeClone, injectorParentID, shShootingTimeLongName, shShootingTimeShortName, shShootingTimeDescription, shShootingTimeItemCategory, shShootingTimeItemFleaPrice, shShootingTimeProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shShootingTimeId, itemTrader, shShootingTimeCount, shShootingTimeLimit, shShootingTimeItemFleaPrice, itemTraderCurrency, shShootingTimeLL, serverDatabaseTables);
        
            const shFastestHandInWildTarkov = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 600,
                    "SkillName": "MagDrills",
                    "Value": 5
                }        
            ]

            buffs["shFastestHandInWildTarkov"] = shFastestHandInWildTarkov;

            const shFastestHandInWildTarkovItemFleaPrice = 15000;
            const shFastestHandInWildTarkovItemCategory = "5b47574386f77428ca22b33a";
            const shFastestHandInWildTarkovId = "shFastestHandInWildTarkov";
            const shFastestHandInWildTarkovClone = "5ed51652f6c34d2cc26336a1";
            const shFastestHandInWildTarkovLongName = "SH Fastest Hand - 1";
            const shFastestHandInWildTarkovShortName = "SH FH-1";
            const shFastestHandInWildTarkovDescription = "SH Fastest Hand - 1 Injector, enhances your reload speed to outlast your enemies and stay alive. Created by Sasha Himik";
            const shFastestHandInWildTarkovLL = 1;
            const shFastestHandInWildTarkovCount = 50;
            const shFastestHandInWildTarkovLimit = 3;

            const shFastestHandInWildTarkovProps = {
                BackgroundColor: "green",
                StimulatorBuffs: "shFastestHandInWildTarkov"
            }

            bbLib.createItem(shFastestHandInWildTarkovId, shFastestHandInWildTarkovClone, injectorParentID, shFastestHandInWildTarkovLongName, shFastestHandInWildTarkovShortName, shFastestHandInWildTarkovDescription, shFastestHandInWildTarkovItemCategory, shFastestHandInWildTarkovItemFleaPrice, shFastestHandInWildTarkovProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shFastestHandInWildTarkovId, itemTrader, shFastestHandInWildTarkovCount, shFastestHandInWildTarkovLimit, shFastestHandInWildTarkovItemFleaPrice, itemTraderCurrency, shFastestHandInWildTarkovLL, serverDatabaseTables);
        
            const shFastestHandInWildTarkov2 = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 600,
                    "SkillName": "MagDrills",
                    "Value": 10
                }        
            ]

            buffs["shFastestHandInWildTarkov2"] = shFastestHandInWildTarkov2;

            const shFastestHandInWildTarkov2ItemFleaPrice = 30000;
            const shFastestHandInWildTarkov2ItemCategory = "5b47574386f77428ca22b33a";
            const shFastestHandInWildTarkov2Id = "shFastestHandInWildTarkov2";
            const shFastestHandInWildTarkov2Clone = "5ed51652f6c34d2cc26336a1";
            const shFastestHandInWildTarkov2LongName = "SH Fastest Hand - 2";
            const shFastestHandInWildTarkov2ShortName = "SH FH-2";
            const shFastestHandInWildTarkov2Description = "SH Fastest Hand - 2 Injector, enhances your reload speed to outlast your enemies and stay alive. Created by Sasha Himik";
            const shFastestHandInWildTarkov2LL = 2;
            const shFastestHandInWildTarkov2Count = 30;
            const shFastestHandInWildTarkov2Limit = 2;

            const shFastestHandInWildTarkov2Props = {
                BackgroundColor: "yellow",
                StimulatorBuffs: "shFastestHandInWildTarkov2"
            }

            bbLib.createItem(shFastestHandInWildTarkov2Id, shFastestHandInWildTarkov2Clone, injectorParentID, shFastestHandInWildTarkov2LongName, shFastestHandInWildTarkov2ShortName, shFastestHandInWildTarkov2Description, shFastestHandInWildTarkov2ItemCategory, shFastestHandInWildTarkov2ItemFleaPrice, shFastestHandInWildTarkov2Props, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shFastestHandInWildTarkov2Id, itemTrader, shFastestHandInWildTarkov2Count, shFastestHandInWildTarkov2Limit, shFastestHandInWildTarkov2ItemFleaPrice, itemTraderCurrency, shFastestHandInWildTarkov2LL, serverDatabaseTables);
        
            const shFastestHandInWildTarkov3 = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 5,
                    "Duration": 600,
                    "SkillName": "MagDrills",
                    "Value": 15
                }        
            ]

            buffs["shFastestHandInWildTarkov3"] = shFastestHandInWildTarkov3;

            const shFastestHandInWildTarkov3ItemFleaPrice = 45000;
            const shFastestHandInWildTarkov3ItemCategory = "5b47574386f77428ca22b33a";
            const shFastestHandInWildTarkov3Id = "shFastestHandInWildTarkov3";
            const shFastestHandInWildTarkov3Clone = "5ed51652f6c34d2cc26336a1";
            const shFastestHandInWildTarkov3LongName = "SH Fastest Hand - 3";
            const shFastestHandInWildTarkov3ShortName = "SH FH-3";
            const shFastestHandInWildTarkov3Description = "SH Fastest Hand - 3 Injector, enhances your reload speed to outlast your enemies and stay alive. Created by Sasha Himik";
            const shFastestHandInWildTarkov3LL = 2; // up to 3 level
            const shFastestHandInWildTarkov3Count = 15;
            const shFastestHandInWildTarkov3Limit = 1;

            const shFastestHandInWildTarkov3Props = {
                BackgroundColor: "orange",
                StimulatorBuffs: "shFastestHandInWildTarkov3"
            }

            bbLib.createItem(shFastestHandInWildTarkov3Id, shFastestHandInWildTarkov3Clone, injectorParentID, shFastestHandInWildTarkov3LongName, shFastestHandInWildTarkov3ShortName, shFastestHandInWildTarkov3Description, shFastestHandInWildTarkov3ItemCategory, shFastestHandInWildTarkov3ItemFleaPrice, shFastestHandInWildTarkov3Props, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shFastestHandInWildTarkov3Id, itemTrader, shFastestHandInWildTarkov3Count, shFastestHandInWildTarkov3Limit, shFastestHandInWildTarkov3ItemFleaPrice, itemTraderCurrency, shFastestHandInWildTarkov3LL, serverDatabaseTables);
        
            const shSashaMedic = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 600,
                    "SkillName": "FieldMedicine",
                    "Value": 20
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 600,
                    "SkillName": "Surgery",
                    "Value": 20
                }       
            ]

            buffs["shSashaMedic"] = shSashaMedic;

            const shSashaMedicItemFleaPrice = 80000;
            const shSashaMedicItemCategory = "5b47574386f77428ca22b33a";
            const shSashaMedicId = "shSashaMedic";
            const shSashaMedicClone = "5ed51652f6c34d2cc26336a1";
            const shSashaMedicLongName = "SH Sasha Medic";
            const shSashaMedicShortName = "SH Medic";
            const shSashaMedicDescription = "SH Sasha Medic Injector, accelerate your efficiency in the field. Boosts your first aid speed, ensuring you stay ahead in critical moments. Created by Sasha Himik";
            const shSashaMedicLL = 2; // up to 3 level
            const shSashaMedicCount = 15;
            const shSashaMedicLimit = 1;

            const shSashaMedicProps = {
                BackgroundColor: "orange",
                StimulatorBuffs: "shSashaMedic"
            }

            bbLib.createItem(shSashaMedicId, shSashaMedicClone, injectorParentID, shSashaMedicLongName, shSashaMedicShortName, shSashaMedicDescription, shSashaMedicItemCategory, shSashaMedicItemFleaPrice, shSashaMedicProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shSashaMedicId, itemTrader, shSashaMedicCount, shSashaMedicLimit, shSashaMedicItemFleaPrice, itemTraderCurrency, shSashaMedicLL, serverDatabaseTables);
        
            const shSashaSalo = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "HydrationRate",
                    "Chance": 1,
                    "Delay":1,
                    "Duration": 60,
                    "SkillName": "",
                    "Value": -0.2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay":1,
                    "Duration": 60,
                    "SkillName": "",
                    "Value": 5
                },
            ]

            buffs["shSashaSalo"] = shSashaSalo;

            const shSashaSaloItemFleaPrice = 5300;
            const shSashaSaloItemCategory = "5b47574386f77428ca22b33a";
            const shSashaSaloId = "shSashaSalo";
            const shSashaSaloClone = "5ed51652f6c34d2cc26336a1";
            const shSashaSaloLongName = "SH Salo";
            const shSashaSaloShortName = "SH Salo";
            const shSashaSaloDescription = "SH Salo Injector, Created by Sasha Himik in bio-laboratories located somewhere on the East of Ukraine.";
            const shSashaSaloLL = 1;
            const shSashaSaloCount = 30;
            const shSashaSaloLimit = 1;
            const shSashaSaloItemTraderCurrency = 'UAH';

            const shSashaSaloProps = {
                BackgroundColor: "red",
                StimulatorBuffs: "shSashaSalo"
            }

            bbLib.createItem(shSashaSaloId, shSashaSaloClone, injectorParentID, shSashaSaloLongName, shSashaSaloShortName, shSashaSaloDescription, shSashaSaloItemCategory, shSashaSaloItemFleaPrice, shSashaSaloProps, serverDatabaseTables,jsonUtil);
            bbLib.createItemOfferLimited(shSashaSaloId, itemTrader, shSashaSaloCount, shSashaSaloLimit, shSashaSaloItemFleaPrice, shSashaSaloItemTraderCurrency, shSashaSaloLL, serverDatabaseTables);
        
        }
    }
}