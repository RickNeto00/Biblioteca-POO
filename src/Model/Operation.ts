import ConnectionController from "../Controller/ConnectionController";
import { interfaceSelect } from "../Controller/interfaceSelect";
import Book from "./Book";
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

        /*switch (obj) {
            case User:
                const users = await this.database.selectUsersDb();
                let user: string = "";            
                    
                for (let i = 0; i < users.length; i++) {
                    user += "Username: " + users[i].email + " | User Type: " + users[i].userType + "\n";
                }
                return console.log(user);

            case Book:
                const books = await this.database.selectBooksDb();
                let book: string = "";            
                    
                for (let i = 0; i < books.length; i++) {
                    book += "Title: " + books[i].title + " | Book Type: " + books[i].bookType + "\n";
                }
                return console.log(book);
        }*/
    }
}