"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const NLE_1 = require("./NLE");
// local import
const config = __importStar(require("../config/config.json"));
class Mod {
    // This example will show you how to override and register your own components and use them
    // The container will by default register all AKI dependencies, but you can inject into it
    // you own custom implementations the server will then use.
    // In this example we will take the LauncherCallbacks class and override the ping() method
    // for our own custom method that will return "Lets dance" instead of "pong!"
    // Perform these actions before server fully loads
    preAkiLoad(container) {
        // get logger
        const logger = container.resolve("WinstonLogger");
        logger.info(`Revingly-NeverLoseEquipment: ${config.disableThisMod ? "Not active" : "Active"}`);
        // If the mod is disabled then dont override anything
        if (config.disableThisMod)
            return;
        container.register("NLE", NLE_1.NLE);
        container.register("InraidController", { useClass: NLE_1.NLE });
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map