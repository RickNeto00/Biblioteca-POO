import Author from "../Model/Author";
import ConnectionController from "./ConnectionController";

export default class AuthorController {
    private database = ConnectionController.getConnection();

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