import Author from "./Author";
import PubCompany from "./PubCompany";

export enum BookTypes{
    Adventure = "Adventure",
    Action = "Action",
    Horror = "Horror",
    Literature = "Literature",
    
}

export default class Book{
    private title: string;
    private yearPub: number;
    private pubCompany: PubCompany;
    private author: Author;
    private bookType: BookTypes;

    constructor(title: string, yearPub: number, pubCompany: PubCompany, author: Author, bookType: BookTypes){
        this.title = title;
        this.yearPub = yearPub;
        this.pubCompany = pubCompany;
        this.author = author;
        this.bookType = bookType;
    }

    //GETS

    public getTitle(): string{
        return this.title;
    }

    public getYearPub(): number{
        return this.yearPub;
    }

    public getPubCompany(): PubCompany{
        return this.pubCompany;
    }

    public getAuthor(): Author{
        return this.author;
    }

    public getBookType(): BookTypes{
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