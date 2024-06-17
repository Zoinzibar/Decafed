"use strict";

//const opticrework = require("./src/opticrework.js");

  
//Logger.info("Loading: Optics Rework");
//ModLoader.onLoad["ACOG4Life-OpticRework"] = opticrework.onLoadMod;
//const db = DatabaseServer.tables;
//const item = db.templates.items
	
let Logger;
let JsonUtil;	

class OpticRework {
    load(container) {
	    const ModLoader = container.resolve("InitialModLoader");  
	    Logger = container.resolve("WinstonLogger");
	    JsonUtil = container.resolve("JsonUtil");
	    Logger.info("Loading: Optic Rework");
    }
  
    delayedLoad(container){
	    const DB = container.resolve("DatabaseServer").getTables();
	    const item = DB.templates.items;
	    
	    let bravo4 = JsonUtil.clone(item["57adff4f24597737f373b6e6"]);
        bravo4._props.AimSensitivity[0] = [0.2025];
        item["57adff4f24597737f373b6e6"] = bravo4;

        let sb_pm_ii_1_8x24 = JsonUtil.clone(item["617151c1d92c473c770214ab"]);
        sb_pm_ii_1_8x24._props.AimSensitivity[0] = [
            0.14,
            0.62
        ];
        sb_pm_ii_1_8x24._props.Zooms[0] = [
            8,
            1
        ]
        sb_pm_ii_1_8x24._props.OpticCalibrationDistances = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        sb_pm_ii_1_8x24._props.CalibrationDistances[0] = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        item["617151c1d92c473c770214ab"] = sb_pm_ii_1_8x24;

        let vortex_hd_genii = JsonUtil.clone(item["618ba27d9008e4636a67f61d"]);
        vortex_hd_genii._props.OpticCalibrationDistances = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        vortex_hd_genii._props.CalibrationDistances[0] = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        item["618ba27d9008e4636a67f61d"] = vortex_hd_genii;

        let sb_pm_ii_3_12x50 = JsonUtil.clone(item["61714eec290d254f5e6b2ffc"]);
        sb_pm_ii_3_12x50._props.AimSensitivity[0] = [
            0.03,
            0.125
        ];
        sb_pm_ii_3_12x50._props.Zooms[0] = [
            12,
            3
        ]
        sb_pm_ii_3_12x50._props.OpticCalibrationDistances = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        sb_pm_ii_3_12x50._props.CalibrationDistances[0] = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        item["61714eec290d254f5e6b2ffc"] = sb_pm_ii_3_12x50;
        
        let hamrmk4 = JsonUtil.clone(item["544a3a774bdc2d3a388b4567"]);
        hamrmk4._props.AimSensitivity[0] = [0.2025];
        item["544a3a774bdc2d3a388b4567"] = hamrmk4;
        
        
        let ta01nsn = JsonUtil.clone(item["5c05293e0db83400232fff80"]);
        ta01nsn._props.AimSensitivity[0] = [0.2025];
        item["5c05293e0db83400232fff80"] = ta01nsn;
        
        let ta01nsntan = JsonUtil.clone(item["5c052a900db834001a66acbd"]);
        ta01nsntan._props.AimSensitivity[0] = [0.2025];
        item["5c052a900db834001a66acbd"] = ta01nsntan;
        
        let elcanspecterdr = JsonUtil.clone(item["57ac965c24597706be5f975c"]);
        elcanspecterdr._props.Slots[0]._props.filters[0].Filter = [
            "5a33b2c9c4a282000c5a9511",
            "58d2664f86f7747fec5834f6",
            "577d128124597739d65d0e56"
        ]
        elcanspecterdr._props.AimSensitivity[0] = [
            0.2025,
            0.7
        ]
        item["57ac965c24597706be5f975c"] = elcanspecterdr;

    //    Logger.log(item["57ac965c24597706be5f975c"]._props.AimSensitivity);
        
        let elcanspecterdrfde = JsonUtil.clone(item["57aca93d2459771f2c7e26db"]);
        elcanspecterdrfde._props.Slots[0]._props.filters[0].Filter = [
            "5a33b2c9c4a282000c5a9511",
            "58d2664f86f7747fec5834f6",
            "577d128124597739d65d0e56"
        ]
        elcanspecterdrfde._props.AimSensitivity[0] = [
            0.2025,
            0.7
        ]
        item["57aca93d2459771f2c7e26db"] = elcanspecterdrfde;
        
        let acogta11 = JsonUtil.clone(item["59db7e1086f77448be30ddf3"]);
        acogta11._props.AimSensitivity[0] = [0.2643];
        item["59db7e1086f77448be30ddf3"] = acogta11;
        
        let valdayps320 = JsonUtil.clone(item["5c0517910db83400232ffee5"]);
        valdayps320._props.AimSensitivity[0] = [
            0.1883,
            0.7
        ]
        item["5c0517910db83400232ffee5"] = valdayps320;
        
		let vss = JsonUtil.clone(item["57838ad32459774a17445cd2"]);
        vss._props.SightingRange = 25;
        vss._props.IronSightRange = 25;
        item["57838ad32459774a17445cd2"] = vss;

		let val = JsonUtil.clone(item["57c44b372459772d2b39b8ce"]);
        vss._props.SightingRange = 25;
        vss._props.IronSightRange = 25;
        item["57c44b372459772d2b39b8ce"] = val;

        let xps32 = JsonUtil.clone(item["584924ec24597768f12ae244"]);
        xps32._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        xps32._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["584924ec24597768f12ae244"] = xps32;
        
        let srs2 = JsonUtil.clone(item["5d2da1e948f035477b1ce2ba"]);
        srs2._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        srs2._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["5d2da1e948f035477b1ce2ba"] = srs2;
        
        let xps30 = JsonUtil.clone(item["58491f3324597764bc48fa02"]);
        xps30._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        xps30._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["58491f3324597764bc48fa02"] = xps30;
        
        let eotech553 = JsonUtil.clone(item["570fd6c2d2720bc6458b457f"]);
        eotech553._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        eotech553._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["570fd6c2d2720bc6458b457f"] = eotech553;
        
        let hs401g5 = JsonUtil.clone(item["5b30b0dc5acfc400153b7124"]);
        hs401g5._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        hs401g5._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["5b30b0dc5acfc400153b7124"] = hs401g5;
        
        let compm4 = JsonUtil.clone(item["5c7d55de2e221644f31bff68"]);
        compm4._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        compm4._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["5c7d55de2e221644f31bff68"] = compm4;
        
        let p90ring = JsonUtil.clone(item["5cebec38d7f00c00110a652a"]);
        p90ring._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        p90ring._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["5cebec38d7f00c00110a652a"] = p90ring;
        
        let hhs1tan = JsonUtil.clone(item["5c0a2cec0db834001b7ce47d"]);
        hhs1tan._props.AimSensitivity[0] = [
            0.2867,
            0.7
        ]
        hhs1tan._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        hhs1tan._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["5c0a2cec0db834001b7ce47d"] = hhs1tan;
        
        let exps3 = JsonUtil.clone(item["558022b54bdc2dac148b458d"]);
        exps3._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        exps3._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["558022b54bdc2dac148b458d"] = exps3;
        
        let hhs1 = JsonUtil.clone(item["5c07dd120db834001c39092d"]);
        hhs1._props.AimSensitivity[0] = [
            0.2867,
            0.7
        ]
        hhs1._props.OpticCalibrationDistances = [
            25,
			50,
			100,
			150,
			200
        ]
        hhs1._props.CalibrationDistances[0] = [
            25,
			50,
			100,
			150,
			200
        ]
        item["5c07dd120db834001c39092d"] = hhs1;
        
        let okp7dovetail = JsonUtil.clone(item["57486e672459770abd687134"]);
        okp7dovetail._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        okp7dovetail._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["57486e672459770abd687134"] = okp7dovetail;
        
        let valday1p78 = JsonUtil.clone(item["5c0505e00db834001b735073"]);
        valday1p78._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        valday1p78._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["5c0505e00db834001b735073"] = valday1p78;
        
        let aksionekp818 = JsonUtil.clone(item["591c4efa86f7741030027726"]);
        aksionekp818._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        aksionekp818._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["591c4efa86f7741030027726"] = aksionekp818;
        
        let aksionekp802 = JsonUtil.clone(item["5947db3f86f77447880cf76f"]);
        aksionekp802._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        aksionekp802._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["5947db3f86f77447880cf76f"] = aksionekp802;
        
        let walthermrs = JsonUtil.clone(item["570fd721d2720bc5458b4596"]);
        walthermrs._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        walthermrs._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["570fd721d2720bc5458b4596"] = walthermrs;
        
        let romeo8t = JsonUtil.clone(item["60a23797a37c940de7062d02"]);
        romeo8t._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        romeo8t._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["60a23797a37c940de7062d02"] = romeo8t;
        
        let valdaykrechet = JsonUtil.clone(item["609a63b6e2ff132951242d09"]);
        valdaykrechet._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        valdaykrechet._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["609a63b6e2ff132951242d09"] = valdaykrechet;
        
        let pilad142 = JsonUtil.clone(item["584984812459776a704a82a6"]);
        pilad142._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        pilad142._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["584984812459776a704a82a6"] = pilad142;
        
        let okp7 = JsonUtil.clone(item["570fd79bd2720bc7458b4583"]);
        okp7._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        okp7._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["570fd79bd2720bc7458b4583"] = okp7;
        
        let razoramguh1 = JsonUtil.clone(item["59f9d81586f7744c7506ee62"]);
        razoramguh1._props.OpticCalibrationDistances = [
            25,
            50,
            100,
            150,
            200
        ]
        razoramguh1._props.CalibrationDistances[0] = [
            25,
            50,
            100,
            150,
            200
        ]
        item["59f9d81586f7744c7506ee62"] = razoramguh1;
        
        let kmz1p69 = JsonUtil.clone(item["5d0a3e8cd7ad1a6f6a3d35bd"]);
        kmz1p69._props.AimSensitivity[0] = [
            0.2067,
            0.2067,
            0.08,
            0.08
        ]
        item["5d0a3e8cd7ad1a6f6a3d35bd"] = kmz1p69;
        
        let pu35 = JsonUtil.clone(item["5b3f7c1c5acfc40dc5296b1d"]);
        pu35._props.AimSensitivity[0] = [
            0.2629
        ]
        item["5b3f7c1c5acfc40dc5296b1d"] = pu35;
        
        let nightforceatacr = JsonUtil.clone(item["5aa66be6e5b5b0214e506e97"]);
        nightforceatacr._props.AimSensitivity[0] = [
            0.1014,
            0.0713
        ]
        nightforceatacr._props.Zooms[0] = [
            7,
            18
        ]
        nightforceatacr._props.OpticCalibrationDistances = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        nightforceatacr._props.CalibrationDistances[0] = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        item["5aa66be6e5b5b0214e506e97"] = nightforceatacr;
        
        let ncstaradop4 = JsonUtil.clone(item["5dfe6104585a0c3e995c7b82"]);
        ncstaradop4._props.AimSensitivity[0] = [
            0.22,
            0.0767
        ]
        item["5dfe6104585a0c3e995c7b82"] = ncstaradop4;
        
        let pso1m2 = JsonUtil.clone(item["5c82343a2e221644f31c0611"]);
        pso1m2._props.AimSensitivity[0] = [
            0.2025,
            0.2025
        ]
        item["5c82343a2e221644f31c0611"] = pso1m2;
        
        let pso1m21 = JsonUtil.clone(item["576fd4ec2459777f0b518431"]);
        pso1m21._props.AimSensitivity[0] = [
            0.2025,
            0.2025
        ]
        item["576fd4ec2459777f0b518431"] = pso1m21;
        
        let mark4lr = JsonUtil.clone(item["5a37cb10c4a282329a73b4e7"]);
        mark4lr._props.AimSensitivity[0] = [
            0.06
        ]
        mark4lr._props.Zooms[0] = [
            8
        ]
        mark4lr._props.OpticCalibrationDistances = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        mark4lr._props.CalibrationDistances[0] = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650
        ]
        item["5a37cb10c4a282329a73b4e7"] = mark4lr;
        
        let fullfieldtac30 = JsonUtil.clone(item["5b2388675acfc4771e1be0be"]);
        fullfieldtac30._props.AimSensitivity[0] = [
            0.7,
            0.15
        ]
        item["5b2388675acfc4771e1be0be"] = fullfieldtac30;
        
        let eotechvudu = JsonUtil.clone(item["5b3b99475acfc432ff4dcbee"]);
        eotechvudu._props.AimSensitivity[0] = [
            0.15,
            0.7
        ]
        item["5b3b99475acfc432ff4dcbee"] = eotechvudu;
        
        let pso1 = JsonUtil.clone(item["5c82342f2e221644f31c060e"]);
        pso1._props.AimSensitivity[0] = [
            0.2025,
            0.2025
        ]
        item["5c82342f2e221644f31c060e"] = pso1;
        
        let pilad4x32 = JsonUtil.clone(item["5dff772da3651922b360bf91"]);
        pilad4x32._props.AimSensitivity[0] = [
            0.2025
        ]
        item["5dff772da3651922b360bf91"] = pilad4x32;
        
        let marchtactical = JsonUtil.clone(item["57c5ac0824597754771e88a9"]);
        marchtactical._props.AimSensitivity[0] = [
            0.1093
        ]
        marchtactical._props.Zooms[0] = [
            8
        ]
        item["57c5ac0824597754771e88a9"] = marchtactical;
        
        let kmz1p59 = JsonUtil.clone(item["5d0a3a58d7ad1a669c15ca14"]);
        kmz1p59._props.AimSensitivity[0] = [
            0.2267,
            0.2267,
            0.08,
            0.08
        ]
        item["5d0a3a58d7ad1a669c15ca14"] = kmz1p59;
        
        let flirrs32 = JsonUtil.clone(item["5d1b5e94d7ad1a2b865a96b0"]);
        flirrs32._props.AimSensitivity[0] = [
            0.3511,
            0.0978
        ]
        flirrs32._props.OpticCalibrationDistances = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400
        ]
        flirrs32._props.CalibrationDistances[0] = [
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400
        ]
        item["5d1b5e94d7ad1a2b865a96b0"] = flirrs32;
       
        let hensoldtff4 = JsonUtil.clone(item["56ea70acd2720b844b8b4594"]);
        hensoldtff4._props.Zooms[0] = [
            4,
            12
        ]
  }
}

module.exports = { mod: new OpticRework };