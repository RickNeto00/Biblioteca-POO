import UserController from "./src/Controller/UserController";
import PromptSync = require("prompt-sync");
import { UserTypes } from "./src/Model/User";

const user = new UserController();
const prompt = PromptSync();
let inputEmail: string = "";
let inputPassword: string = "";
let inputUserName: string = "";
let inputUserType: string = "";

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
                user.createUser(inputEmail, inputPassword, inputUserName, UserTypes.Administrator);
            }

            if (inputUserType == "2") {
                user.createUser(inputEmail, inputPassword, inputUserName, UserTypes.Common);
            }
        } catch (error) {
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