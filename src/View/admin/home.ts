import PromptSync from "prompt-sync";
import homeUser from "../user/user";
import index from "../../..";
import BookController from "../../Controller/BookController";
import homePubCompany from "../pubCompany/home";

export default function home() {
    const prompt = PromptSync();
    const book = new BookController();

    console.log("\n============================= ADMIN PAGE =============================\n");
    console.log("| 1 | -> User");
    console.log("| 2 | -> Book");
    console.log("| 3 | -> Author");
    console.log("| 4 | -> Publisher Company");
    console.log("| 5 | -> Logout");
    console.log("| 0 | -> Exit\n");

    let choice = prompt("Choose an Option: ");

    switch (choice) {
        case "1":
            homeUser();
            break;
        case "2":
            book.selectBooks();
            break;
        case "3":
            
            break;
        case "4":
            homePubCompany();
            break;
        case "5":
            index();
            break;
        case "5":
            console.log("You choose exit.");
            break;                    
        default:
            console.log("Type a Valid Number.");
            home();
            break;
    }
}

