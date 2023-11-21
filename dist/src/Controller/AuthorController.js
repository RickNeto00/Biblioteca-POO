"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("../Model/Author"));
const ConnectionController_1 = __importDefault(require("./ConnectionController"));
class AuthorController {
    constructor() {
        this.database = ConnectionController_1.default.getConnection();
    }
    selectAll() {
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
    createAuthor(name, age) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authorDb = yield this.database.createAuthorDb(name, age);
                const newAuthor = new Author_1.default(authorDb.id, name, age, authorDb.publicId);
                return newAuthor;
            }
            catch (_a) {
                return console.log("Something went Wrong");
            }
        });
    }
}
exports.default = AuthorController;
