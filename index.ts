import Author from "./src/Model/Author";
import Book, { BookTypes } from "./src/Model/Book";
import pubCompany from "./src/Model/PubCompany";
import PromptSync = require("prompt-sync");

let dataDeFundacao: Date = new Date("2020-03-03");
let editora: pubCompany = new pubCompany("Editora X", dataDeFundacao);
let autor: Author = new Author("Henrique", 21);
let book: Book = new Book("Livro Teste", 2023, editora, autor, BookTypes.Adventure);

console.log(book);
let prompt = PromptSync();

let choice = prompt("Digite: ");
console.log(choice);