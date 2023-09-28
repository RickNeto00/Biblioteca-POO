export default class PubCompany{
    private name: string;
    private foundationDate: Date;

    constructor(name: string, foundationDate: Date){
        this.name = name;
        this.foundationDate = foundationDate;
    }

    //GETS

    public getName(): string{
        return this.name;
    }

    public getFoudationDate(): Date{
        return this.foundationDate;
    }

    //SETS

    public setName(name: string): void{
        this.name = name;
    }

    public setFoundationDate(foundationDate: Date): void{
        this.foundationDate = foundationDate;
    }
}