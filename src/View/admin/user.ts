import PromptSync from "prompt-sync";
import homeAdmin from "./home";
import UserAdmController from "../../Controller/UserAdmController";
import createUserViewAdmin from "./createUser";

export default async function homeUser() {
    const prompt = PromptSync();
    const user = new UserAdmController();
    console.log("\n============== USER OPTIONS ==============\n");
    console.log("| 1 | -> Create a User");
    console.log("| 2 | -> Edit a User");
    console.log("| 3 | -> Find a User");
    console.log("| 4 | -> Select all Users");
    console.log("| 5 | -> Return to Admin Page");
    console.log("| 0 | -> Exit\n");
    let choice = prompt("Choose an Option: ");

    switch (choice) {
        case "1":
            createUserViewAdmin();
            break;
        case "2":
            
            break;
        case "3":
            
            break;
        case "4":
            await user.selectAll();
            homeUser();
            break;
        case "5":
            homeAdmin();
            break;
        case "0":
            console.log("You choose Exit");
            break;               
        default:
            console.log("Type a Valid Number.");
            homeUser();
            break;
    }
}
