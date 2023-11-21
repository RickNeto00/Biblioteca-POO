"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectionController_1 = __importDefault(require("./ConnectionController"));
class absUserController {
    constructor() {
        this.database = ConnectionController_1.default.getConnection();
    }
}
exports.default = absUserController;
