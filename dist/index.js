"use strict";
// https://www.treinaweb.com.br/blog/classes-abstratas-vs-interfaces
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = exports.double = void 0;
const PromptSync = require("prompt-sync");
const create_1 = __importDefault(require("./src/View/user/create"));
const UserAdmController_1 = __importDefault(require("./src/Controller/UserAdmController"));
const login_1 = __importDefault(require("./src/View/user/login"));
const prompt = PromptSync();
const user = new UserAdmController_1.default();
let inputEmail = "";
let inputPassword = "";
console.log("============================= LIBRARY SYSTEM =============================\n");
console.log("| 1 | -> Register");
console.log("| 2 | -> Login");
console.log("| 3 | -> Create Book");
console.log("| 4 | -> Select All\n");
let inputChoice = prompt("Choose an Option: ");
switch (inputChoice) {
    case "1":
        (0, create_1.default)();
        break;
    case "2":
        (0, login_1.default)();
        break;
    case "3":
        console.log("\n============== CREATE A BOOK ==============\n");
        let inputBookTitle = prompt("Title: ");
        break;
    case "4":
        user.selectAll();
        break;
    default:
        console.log("Type a Valid Number.");
        break;
}
function double(x) {
    return x * 2;
}
exports.double = double;
function concat(...args) {
    return args.reduce((result, param) => result + param, '');
}
exports.concat = concat;
