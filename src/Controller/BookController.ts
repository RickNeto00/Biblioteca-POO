import Author from "../Model/Author";
import Book, { BookTypes } from "../Model/Book";
import Operation from "../Model/Operation";
import PubCompany from "../Model/PubCompany";
import ConnectionController from "./ConnectionController";
import { interfaceSelect } from "./interfaceSelect";

export default class BookController {
    private database = ConnectionController.getConnection();

    private book: Operation<Book> = new Operation<Book>;
    
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
    
    public selectBooks() {
        this.book.selectAll(new Book(undefined, undefined, undefined, undefined, undefined, undefined));
    }

}