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
const ConnectionController_1 = __importDefault(require("../Controller/ConnectionController"));
const Book_1 = __importDefault(require("./Book"));
const User_1 = __importDefault(require("./User"));
class Operation {
    constructor() {
        this.database = ConnectionController_1.default.getConnection();
    }
    selectAll(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            if (obj instanceof User_1.default) {
                const users = yield this.database.selectUsersDb();
                let user = "";
                for (let i = 0; i < users.length; i++) {
                    user += "Username: " + users[i].email + " | User Type: " + users[i].userType + "\n";
                }
                return console.log(user);
            }
            if (obj instanceof Book_1.default) {
                const books = yield this.database.selectBooksDb();
                let book = "";
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
        });
    }
}
exports.default = Operation;
