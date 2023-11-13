"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../dao/Database"));
class ConnectionController {
    constructor() {
    }
    static getConnection() {
        return this.db;
    }
}
ConnectionController.db = new Database_1.default;
exports.default = ConnectionController;
