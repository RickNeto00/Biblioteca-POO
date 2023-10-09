"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("./src/Controller/UserController"));
const PromptSync = require("prompt-sync");
const User_1 = require("./src/Model/User");
const user = new UserController_1.default();
const prompt = PromptSync();
let inputEmail = "";
let inputPassword = "";
let inputUserName = "";
let inputUserType = "";
console.log("============================= LIBRARY SYSTEM =============================\n");
console.log("| 1 | -> Register");
console.log("| 2 | -> Login\n");
let inputChoice = prompt("Choose an Option: ");
switch (inputChoice) {
    case "1":
        try {
            console.log("\n============== REGISTRATION ==============\n");
            inputEmail = prompt("Email: ");
            inputPassword = prompt("Password: ");
            inputUserName = prompt("UserName: ");
            console.log("Type ( 1 ) to Admin User.\nType ( 2 ) to Common User.");
            inputUserType = prompt("Choose: ");
            if (inputUserType == "1") {
                user.createUser(inputEmail, inputPassword, inputUserName, User_1.UserTypes.Administrator);
            }
            if (inputUserType == "2") {
                user.createUser(inputEmail, inputPassword, inputUserName, User_1.UserTypes.Common);
            }
        }
        catch (error) {
            console.log("Sorry, Try Again.");
        }
        break;
    case "2":
        console.log("\n============== LOGIN ==============\n");
        inputEmail = prompt("Email: ");
        inputPassword = prompt("Password: ");
        break;
    default:
        console.log("Type a Valid Number.");
        break;
}
