import Author from "../Model/Author";
import Book, { BookTypes } from "../Model/Book";
import PubCompany from "../Model/PubCompany";
import ConnectionController from "./ConnectionController";
import { interfaceSelect } from "./interfaceSelect";

export default class BookController implements interfaceSelect {
    private database = ConnectionController.getConnection();
    
    selectAll(): string { 
        /*let book: string = "";
        let books: Book[] = [];

        for (let i = 0; i < books.length; i++) {
           const element = books[i];
           book = book + "Title: " + element.getTitle + " Author: " + element.getAuthor + " Book type: " + element.getBookType + "\n";
        }

        return book;*/
        const books = this.database.selectBooksDb();
        return books;

    }
    
    public async createBook(title: string, yearPub: number, pubCompany: PubCompany, author: Author, bookType: BookTypes) {
        try {

            const bookByTitle = this.database.findBookByTitleDb(title);

            if (bookByTitle != undefined) {
                return console.log("Book already exists.");
            }
            
            const bookDb = await this.database.createBookDb(title, yearPub, pubCompany.getId(), author.getId(), bookType);
            const newBook = new Book(bookDb.id, title, yearPub, pubCompany, author, bookType);
            return newBook;

        } catch {
            return console.log("Something went Wrong");
        }
    }
}