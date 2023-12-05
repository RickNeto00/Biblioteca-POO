import Author from "../Model/Author";
import Operation from "../Model/Operation";
import PersonController from "./PersonController";

export default class AuthorController extends PersonController {

    private author: Operation<Author> = new Operation<Author>;

    public say(): void {
        super.say();
        console.log("I am a Author");
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

    public selectAuthors() {
        this.author.selectAll(new Author(undefined, undefined, undefined, undefined));
    }
}