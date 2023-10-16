import { prisma } from "../../db";
import { BookTypes } from "../Model/Book";
import { UserTypes } from "../Model/User";

export default class Database {

    //USER

    public async createUserDb(email: string, password: string, userName: string, userType: UserTypes) {
        const user = await prisma.user.create({
            data: {
                email: email,
                password: password,
                userName: userName,
                userType: userType
            }
        });

        return user;
    }

    public async findUserByEmailDb(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        return user;
    }

    public async findUserByUserNameDb(userName: string) {
        const user = await prisma.user.findUnique({
            where: {
                userName: userName
            }
        });
        return user;
    }

    public async findUserByLoginDb(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
                password: password
            }
        })
        return user;
    }

    public async selectUsersDb() {
        const users = await prisma.user.findMany();
        return users;
    }

    //AUTHOR

    public async createAuthorDb(name: string, age: number) {
        const author = await prisma.author.create({
            data: {
                name: name,
                age: age,
            }
        });
        return author;
    }

    public async findAuthorByNameDb(name: string) {
        const author = await prisma.author.findFirst({
            where: {
                name: name
            }
        });
        return author;
    }

    //PUBCOMPANY

    public async createPubCompanyDb(name: string, foundationDate: string) {
        const pubCompany = await prisma.pubCompany.create({
            data: {
                name: name,
                foundationDate: foundationDate,
            }
        });
        return pubCompany;
    }

    public async findPubCompanyByNameDb(title: string) {
        const book = prisma.book.findUnique({
            where: {
                title: title
            }
        });
        return book;
    }

    //BOOK

    public async createBookDb(title: string, yearPub: number, pubCompanyId: number, authorId: number, bookType: BookTypes) {
        const book = await prisma.book.create({
            data: {
                title: title,
                yearPub: yearPub,
                pubCompanyId : pubCompanyId,
                authorId: authorId,
                bookType: bookType
            }
        });
        return book;
    }

    public async findBookByTitleDb(title: string) {
        const book = prisma.book.findUnique({
            where: {
                title: title
            }
        });
        return book;
    }

    public async selectBooksDb() {
        const books = await prisma.book.findMany();
        return books;
    }
}