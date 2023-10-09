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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db");
class Database {
    //USER
    createUserDb(email, password, userName, userType) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prisma.user.create({
                data: {
                    email: email,
                    password: password,
                    userName: userName,
                    userType: userType
                }
            });
            return user;
        });
    }
    findUserByEmailDb(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prisma.user.findUnique({
                where: {
                    email: email
                }
            });
            return user;
        });
    }
    findUserByUserNameDb(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prisma.user.findUnique({
                where: {
                    userName: userName
                }
            });
            return user;
        });
    }
    findUserByLoginDb(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prisma.user.findUnique({
                where: {
                    email: email,
                    password: password
                }
            });
            return user;
        });
    }
    selectUsersDb() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield db_1.prisma.user.findMany();
            return users;
        });
    }
    //AUTHOR
    createAuthorDb(name, age) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield db_1.prisma.author.create({
                data: {
                    name: name,
                    age: age,
                }
            });
            return author;
        });
    }
    findAuthorByNameDb(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield db_1.prisma.author.findUnique({
                where: {
                    name: name
                }
            });
            return author;
        });
    }
    //PUBCOMPANY
    createPubCompanyDb(name, foundationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const pubCompany = yield db_1.prisma.pubCompany.create({
                data: {
                    name: name,
                    foundationDate: foundationDate,
                }
            });
            return pubCompany;
        });
    }
    findPubCompanyByNameDb(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = db_1.prisma.book.findUnique({
                where: {
                    title: title
                }
            });
            return book;
        });
    }
    //BOOK
    createBookDb(title, yearPub, pubCompanyId, authorId, bookType) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield db_1.prisma.book.create({
                data: {
                    title: title,
                    yearPub: yearPub,
                    pubCompanyId: pubCompanyId,
                    authorId: authorId,
                    bookType: bookType
                }
            });
            return book;
        });
    }
    findBookByTitleDb(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = db_1.prisma.book.findUnique({
                where: {
                    title: title
                }
            });
            return book;
        });
    }
    selectBooksDb() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield db_1.prisma.book.findMany();
            return books;
        });
    }
}
exports.default = Database;
