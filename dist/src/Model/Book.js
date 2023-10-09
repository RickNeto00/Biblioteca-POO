"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTypes = void 0;
var BookTypes;
(function (BookTypes) {
    BookTypes["Adventure"] = "Adventure";
    BookTypes["Action"] = "Action";
    BookTypes["Horror"] = "Horror";
    BookTypes["Literature"] = "Literature";
})(BookTypes || (exports.BookTypes = BookTypes = {}));
class Book {
    constructor(title, yearPub, pubCompany, author, bookType) {
        this.title = title;
        this.yearPub = yearPub;
        this.pubCompany = pubCompany;
        this.author = author;
        this.bookType = bookType;
    }
    //GETS
    getTitle() {
        return this.title;
    }
    getYearPub() {
        return this.yearPub;
    }
    getPubCompany() {
        return this.pubCompany;
    }
    getAuthor() {
        return this.author;
    }
    getBookType() {
        return this.bookType;
    }
    //SETS
    setTitle(title) {
        this.title = title;
    }
    setYearPub(yearPub) {
        this.yearPub = yearPub;
    }
    setPubCompany(pubCompany) {
        this.pubCompany = pubCompany;
    }
    setAuthor(author) {
        this.author = author;
    }
    setBookType(bookType) {
        this.bookType = bookType;
    }
}
exports.default = Book;
