// https://www.treinaweb.com.br/blog/classes-abstratas-vs-interfaces

import PromptSync = require("prompt-sync");
import createUserView from "./src/View/user/create";
import UserAdmController from "./src/Controller/UserAdmController";
import loginUserView from "./src/View/user/login";

const prompt = PromptSync();
const user = new UserAdmController();

console.log("============================= LIBRARY SYSTEM =============================\n");
console.log("| 1 | -> Register");
console.log("| 2 | -> Login");
console.log("| 3 | -> Create Book");
console.log("| 4 | -> Select All\n");

let inputChoice = prompt("Choose an Option: ");

switch (inputChoice) {
    case "1":
        createUserView();
        break;

    case "2":
        loginUserView();
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