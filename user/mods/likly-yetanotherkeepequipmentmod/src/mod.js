"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keep_1 = require("./keep");
class Mod {
    config = require("../config/config");
    preSptLoad(container) {
        if (this.config.active) {
            container.register("KeepEquipment", keep_1.KeepEquipment);
            container.register("InraidController", { useToken: "KeepEquipment" });
        }
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map