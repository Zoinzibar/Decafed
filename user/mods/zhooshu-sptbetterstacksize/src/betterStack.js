"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetterStackSize = void 0;
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const DatabaseService_1 = require("C:/snapshot/project/obj/services/DatabaseService");
const ILogger_1 = require("C:/snapshot/project/obj/models/spt/utils/ILogger");
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
let BetterStackSize = class BetterStackSize {
    db;
    logger;
    barterConfig = require("../config/barter.json");
    clothingConfig = require("../config/clothing.json");
    medicalConfig = require("../config/medicals.json");
    partsnmodsConfig = require("../config/partsnmods.json");
    provisionsConfig = require("../config/provisions.json");
    keycardsConfig = require("../config/keycards.json");
    othersConfig = require("../config/others.json");
    items;
    constructor(db, logger) {
        this.db = db;
        this.logger = logger;
        this.items = db.getTables().templates.items;
        this.log("Changing the stack sizes...");
        this.changeSettings(this.clothingConfig);
        this.changeSettings(this.provisionsConfig);
        this.changeSettings(this.medicalConfig, true);
        this.changeSettings(this.barterConfig);
        this.changeParentSettings(this.partsnmodsConfig);
        this.changeParentSettings(this.keycardsConfig);
        this.changeSettings(this.othersConfig);
        this.log("Finished changing the stack sizes.");
    }
    changeSettings(data, isMedical = false) {
        if (!this.isActive(data))
            return;
        Object.keys(data.List).forEach((itemInfoKey) => {
            const itemInfo = data.List[itemInfoKey];
            this.forEachItem(itemInfo._id, false, isMedical, itemInfo._props.StackMaxSize, data.StackMult);
        });
    }
    changeParentSettings(data) {
        if (!this.isActive(data))
            return;
        Object.keys(data.ParentList).forEach((parentInfoKey) => {
            const parentInfo = data.ParentList[parentInfoKey];
            this.forEachItem(parentInfo._id, true, false, parentInfo.StackMaxSize, data.StackMult);
        });
    }
    forEachItem(id, isParent = false, isMedical = false, stackMaxSize, stackMult) {
        const item = this.items[id];
        if (!item._props ||
            (isParent && item._parent != id) ||
            item._id != id ||
            item._props.StackMaxSize === undefined ||
            (isMedical && item._props.MaxHpResource === undefined) ||
            (isMedical && item._props.MaxHpResource > 0))
            return;
        item._props.StackMaxSize = stackMaxSize * stackMult;
        item._props.StackMinRandom = 1;
    }
    isActive(data) {
        return !!data && !!data.Active;
    }
    log(message) {
        this.logger.logWithColor("[Better Stack Size] " + message, LogTextColor_1.LogTextColor.CYAN);
    }
};
exports.BetterStackSize = BetterStackSize;
exports.BetterStackSize = BetterStackSize = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("DatabaseService")),
    __param(1, (0, tsyringe_1.inject)("WinstonLogger")),
    __metadata("design:paramtypes", [typeof (_a = typeof DatabaseService_1.DatabaseService !== "undefined" && DatabaseService_1.DatabaseService) === "function" ? _a : Object, typeof (_b = typeof ILogger_1.ILogger !== "undefined" && ILogger_1.ILogger) === "function" ? _b : Object])
], BetterStackSize);
//# sourceMappingURL=betterStack.js.map