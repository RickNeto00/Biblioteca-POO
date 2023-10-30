import PromptSync = require("prompt-sync");
import createUserView from "./src/View/user/create";

const prompt = PromptSync();
let inputEmail: string = "";
let inputPassword: string = "";

console.log("============================= LIBRARY SYSTEM =============================\n");
console.log("| 1 | -> Register");
console.log("| 2 | -> Login\n");
console.log("| 3 | -> Create Book\n");

let inputChoice = prompt("Choose an Option: ");

switch (inputChoice) {
    case "1":
        try {
            createUserView();

        } catch (error) {
            console.log("Sorry, Try Again.");
        }
        
        break;

    case "2":
        console.log("\n============== LOGIN ==============\n");
        inputEmail = prompt("Email: ");
        inputPassword = prompt("Password: ");

        break;

    case "3":
        console.log("\n============== CREATE A BOOK ==============\n");
        let inputBookTitle = prompt("Title: ");

        break;

    default:
        console.log("Type a Valid Number.");
        
        break;
}