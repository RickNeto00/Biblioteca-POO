import Author from "../Model/Author";
import ConnectionController from "./ConnectionController";
import { interfaceSelect } from "./interfaceSelect";

export default class AuthorController implements interfaceSelect {
    private database = ConnectionController.getConnection();

    selectAll(): Promise<{}[]> {
        /*let author: string = "";
        let authors: Author[] = [];

        for (let i = 0; i < authors.length; i++) {
           const element = authors[i];
           author = author + "Name: " + element.getName + " Age: " + element.getAge + "\n";
        }

        return author;*/
        const authors = this.database.selectAuthorsDb();
        return authors;
    }

    public async createAuthor(name: string, age: number) {
        try {
            const authorDb = await this.database.createAuthorDb(name, age);
            const newAuthor = new Author(authorDb.id, name, age, authorDb.publicId);
            return newAuthor;
            
        } catch {
            return console.log("Something went Wrong");
        }
    }
}