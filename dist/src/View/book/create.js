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
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const BookController_1 = __importDefault(require("../../Controller/BookController"));
const PubCompanyController_1 = __importDefault(require("../../Controller/PubCompanyController"));
const Book_1 = require("../../Model/Book");
function createBook() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = new BookController_1.default();
            const pubCompany = new PubCompanyController_1.default().selectPubCompanies();
            const prompt = (0, prompt_sync_1.default)();
            let title;
            let yearPub;
            let pubCompanyName;
            let authorName;
            let bookType;
            console.log("\n============== REGISTRATE A BOOK ==============\n");
            title = prompt("Title: ");
            yearPub = parseInt(prompt("Publication Year: "));
            pubCompanyName = prompt("Type the name of Publisher Company: ");
            authorName = prompt("Type the name of Author: ");
            console.log(Book_1.BookTypes);
            //await book.createBook(title, yearPub, inputUserName, UserTypes.Common);
        }
        catch (error) {
        }
    });
}
exports.default = createBook;
