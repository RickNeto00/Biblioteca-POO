import PromptSync from "prompt-sync";
import home from "../admin/home";
import BookController from "../../Controller/BookController";
import createBook from "./create";

export default async function bookHome() {
    const prompt = PromptSync();
    const bookController = new BookController();
    console.log("\n============== BOOK OPTIONS ==============\n");
    console.log("| 1 | -> Create a Book");
    console.log("| 2 | -> Edit a Book");
    console.log("| 3 | -> Find a Book");
    console.log("| 4 | -> Select all Books");
    console.log("| 5 | -> Return to Admin Page");
    console.log("| 0 | -> Exit\n");
    let choice = prompt("Choose an Option: ");

    switch (choice) {
        case "1":
            createBook();
            break;
        case "2":
            
            break;
        case "3":
            
            break;
        case "4":
            await bookController.selectBooks();
            bookHome();
            break;
        case "5":
            home();
            break;
        case "0":
            console.log("You choose Exit");
            break;               
        default:
            console.log("Type a Valid Number.");
            bookHome();
            break;
    }
}
