"use strict";
// https://www.treinaweb.com.br/blog/classes-abstratas-vs-interfaces
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const create_1 = __importDefault(require("./src/View/user/create"));
const login_1 = __importDefault(require("./src/View/user/login"));
function index() {
    const prompt = PromptSync();
    console.log("============================= LIBRARY SYSTEM =============================\n");
    console.log("| 1 | -> Login");
    console.log("| 2 | -> Register");
    console.log("| 0 | -> Exit\n");
    let inputChoice = prompt("Choose an Option: ");
    switch (inputChoice) {
        case "1":
            (0, login_1.default)();
            break;
        case "2":
            (0, create_1.default)();
            break;
        case "0":
            console.log("\nYou choose exit.");
            break;
        default:
            console.log("\nType a Valid Number.\n");
            index();
            break;
    }
}
exports.default = index;
index();
