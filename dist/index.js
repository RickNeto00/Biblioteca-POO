"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("./src/Model/Author"));
const Book_1 = __importStar(require("./src/Model/Book"));
const PubCompany_1 = __importDefault(require("./src/Model/PubCompany"));
const PromptSync = require("prompt-sync");
let dataDeFundacao = new Date("2020-03-03");
let editora = new PubCompany_1.default("Editora X", dataDeFundacao);
let autor = new Author_1.default("Henrique", 21);
let book = new Book_1.default("Livro Teste", 2023, editora, autor, Book_1.BookTypes.Adventure);
console.log(book);
let prompt = PromptSync();
let choice = prompt("Digite: ");
console.log(choice);
