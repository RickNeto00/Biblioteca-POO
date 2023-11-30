import Author from "./Author";
import PubCompany from "./PubCompany";

export enum BookTypes{
    Adventure = "Adventure",
    Action = "Action",
    Horror = "Horror",
    Literature = "Literature",
    
}

export default class Book{
    private id?: number;
    private title?: string;
    private yearPub?: number;
    private pubCompany?: PubCompany;
    private author?: Author;
    private bookType?: BookTypes;

    constructor(id: any, title: any, yearPub: any, pubCompany: any, author: any, bookType: any) {
        this.id = id;
        this.title = title;
        this.yearPub = yearPub;
        this.pubCompany = pubCompany;
        this.author = author;
        this.bookType = bookType;
    }

    //GETS

    public getId(): any{
        return this.id
    }

    public getTitle(): any{
        return this.title;
    }

    public getYearPub(): any{
        return this.yearPub;
    }

    public getPubCompany(): any{
        return this.pubCompany;
    }

    public getAuthor(): any{
        return this.author;
    }

    public getBookType(): any{
        return this.bookType;
    }

    //SETS

    public setTitle(title: string): void{
        this.title = title;
    }

    public setYearPub(yearPub: number): void{
        this.yearPub = yearPub;
    }

    public setPubCompany(pubCompany: PubCompany): void{
        this.pubCompany = pubCompany;
    }

    public setAuthor(author: Author): void{
        this.author = author;
    }

    public setBookType(bookType: BookTypes): void{
        this.bookType = bookType;
    }
}

