import ConnectionController from "../Controller/ConnectionController";
import { interfaceSelect } from "../Controller/interfaceSelect";
import Author from "./Author";
import Book from "./Book";
import PubCompany from "./PubCompany";
import User from "./User";

export default class Operation<T> implements interfaceSelect<T> {

    protected database = ConnectionController.getConnection();

    async selectAll(obj: T) {

        if (obj instanceof User) {
            const users = await this.database.selectUsersDb();
            let user: string = "";            
                
            for (let i = 0; i < users.length; i++) {
                user += "Username: " + users[i].email + " | User Type: " + users[i].userType + "\n";
            }
            return console.log(user);
        }

        if (obj instanceof Book) {
            const books = await this.database.selectBooksDb();
            let book: string = "";            
                
            for (let i = 0; i < books.length; i++) {
                book += "Title: " + books[i].title + " | Book Type: " + books[i].bookType + "\n";
            }
            return console.log(book);
        }

        if (obj instanceof Author) {
            const authors = await this.database.selectAuthorsDb();
            let author: string = "";            
                
            for (let i = 0; i < authors.length; i++) {
                author += "Name: " + authors[i].name + " | Age: " + authors[i].age + "\n";
            }
            return console.log(author);
        }

        if (obj instanceof PubCompany) {
            const pubCompanies = await this.database.selectAuthorsDb();
            let pubCompany: string = "";            
                
            for (let i = 0; i < pubCompanies.length; i++) {
                pubCompany += i + " -> Name: " + pubCompanies[i].name + " | Foundation Year: " + pubCompanies[i].age + "\n";
            }
            return console.log(pubCompany);
        }
    }
}