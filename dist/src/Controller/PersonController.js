"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectionController_1 = __importDefault(require("./ConnectionController"));
class PersonController {
    constructor() {
        this.database = ConnectionController_1.default.getConnection();
    }
    say() {
        return console.log("I am a Person");
    }
}
exports.default = PersonController;
