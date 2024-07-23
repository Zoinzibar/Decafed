"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const betterStack_1 = require("./betterStack");
class BetterStack {
    logger;
    preSptLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        this.log("Loading items in memory...");
        container.register("BetterStackSize", betterStack_1.BetterStackSize);
    }
    postDBLoad(container) {
        container.resolve("BetterStackSize");
        this.log("Finished loading items in memory.");
    }
    log(message) {
        this.logger.logWithColor("[Better Stack Size] " + message, LogTextColor_1.LogTextColor.CYAN);
    }
}
exports.mod = new BetterStack();
//# sourceMappingURL=mod.js.map