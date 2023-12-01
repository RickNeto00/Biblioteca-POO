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
const Book_1 = __importDefault(require("../Model/Book"));
const Operation_1 = __importDefault(require("../Model/Operation"));
const ConnectionController_1 = __importDefault(require("./ConnectionController"));
class BookController {
    constructor() {
        this.database = ConnectionController_1.default.getConnection();
        this.book = new Operation_1.default;
    }
    createBook(title, yearPub, pubCompany, author, bookType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookByTitle = this.database.findBookByTitleDb(title);
                if (bookByTitle != undefined) {
                    return console.log("Book already exists.");
                }
                const bookDb = yield this.database.createBookDb(title, yearPub, pubCompany.getId(), author.getId(), bookType);
                const newBook = new Book_1.default(bookDb.id, title, yearPub, pubCompany, author, bookType);
                return newBook;
            }
            catch (_a) {
                return console.log("Something went Wrong");
            }
        });
    }
    selectBooks() {
        this.book.selectAll(new Book_1.default(undefined, undefined, undefined, undefined, undefined, undefined));
    }
}
exports.default = BookController;
