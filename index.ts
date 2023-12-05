// https://www.treinaweb.com.br/blog/classes-abstratas-vs-interfaces

import PromptSync = require("prompt-sync");
import createUserView from "./src/View/user/create";
import loginUserView from "./src/View/user/login";

export default function index() {
    const prompt = PromptSync();
    
    console.log("============================= LIBRARY SYSTEM =============================\n");
    console.log("| 1 | -> Login");
    console.log("| 2 | -> Register");
    console.log("| 0 | -> Exit\n");
    
    let inputChoice = prompt("Choose an Option: ");
    
    switch (inputChoice) {
        case "1":
            loginUserView();
            break;
    
        case "2":
            createUserView();
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

index();
