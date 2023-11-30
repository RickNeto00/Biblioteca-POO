export default class PubCompany{
    private id: number;
    private name: string;
    private foundationDate: number;

    constructor(id: number, name: string, foundationDate: number){
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

    public getFoudationDate(): number{
        return this.foundationDate;
    }

    //SETS

    public setName(name: string): void{
        this.name = name;
    }

    public setFoundationDate(foundationDate: number): void{
        this.foundationDate = foundationDate;
    }
}