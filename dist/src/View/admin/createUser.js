"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const User_1 = require("../../Model/User");
const UserAdmController_1 = __importDefault(require("../../Controller/UserAdmController"));
function createUserViewAdmin() {
    const user = new UserAdmController_1.default();
    const prompt = (0, prompt_sync_1.default)();
    let inputEmail;
    let inputPassword;
    let inputUserName;
    let inputUserType;
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
    else {
        console.log("Type a valid number.");
    }
}
exports.default = createUserViewAdmin;
