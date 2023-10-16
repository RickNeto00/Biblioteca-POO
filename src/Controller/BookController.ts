import Author from "../Model/Author";
import Book, { BookTypes } from "../Model/Book";
import PubCompany from "../Model/PubCompany";
import ConnectionController from "./ConnectionController";

export default class BookController {
    private database = ConnectionController.getConnection();

    public async createBook(title: string, yearPub: number, pubCompany: PubCompany, author: Author, bookType: BookTypes) {
        try {

            const bookByTitle = this.db.findBookByTitleDb(title);

            if (bookByTitle != undefined) {
                return console.log("Book already exists.");
            }
            
            await this.db.createBookDb(title, yearPub, pubCompany.getId(), author.getId(), bookType)

            const newBook = new Book(title, yearPub, pubCompany, author, bookType);
            return newBook;

        } catch {
            
        }
    }
}