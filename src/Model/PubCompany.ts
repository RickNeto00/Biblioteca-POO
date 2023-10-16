import { prisma } from "../../db";

export default class PubCompany{
    private id: number;
    private name: string;
    private foundationDate: string;

    constructor(id: number, name: string, foundationDate: string){
        this.id = id;
        this.name = name;
        this.foundationDate = foundationDate;
    }

    //GETS

    public getId(): number {
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getFoudationDate(): string{
        return this.foundationDate;
    }

    //SETS

    public setName(name: string): void{
        this.name = name;
    }

    public setFoundationDate(foundationDate: string): void{
        this.foundationDate = foundationDate;
    }
}