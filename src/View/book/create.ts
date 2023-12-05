import PromptSync from "prompt-sync";
import { UserTypes } from "../../Model/User";
import UserAdmController from "../../Controller/UserAdmController";
import BookController from "../../Controller/BookController";
import PubCompanyController from "../../Controller/PubCompanyController";
import { BookTypes } from "../../Model/Book";

export default async function createBook() {
    try {
        const book = new BookController();
        const pubCompany = new PubCompanyController().selectPubCompanies();
        const prompt = PromptSync();
        let title: string;
        let yearPub: number;
        let pubCompanyName: string;
        let authorName: string;
        let bookType: BookTypes;
    
        console.log("\n============== REGISTRATE A BOOK ==============\n");
        title = prompt("Title: ");
        yearPub = parseInt(prompt("Publication Year: "));
        pubCompanyName = prompt("Type the name of Publisher Company: ");
        authorName = prompt("Type the name of Author: ");
        console.log(BookTypes);

        //await book.createBook(title, yearPub, inputUserName, UserTypes.Common);
    } catch (error) {
        
    }

}