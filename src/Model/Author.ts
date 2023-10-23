export default class Author{
    private id: number;
    private name: string;
    private age: number;
    private publicId: string;

    constructor(id: number, name: string, age: number, publicId: string) {
        this.id = id
        this.name = name;
        this.age = age;
        this.publicId = publicId;
    }

    //GETS

    public getId(): number {
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getAge(): number{
        return this.age;
    }

    public getPublicId(): string {
        return this.publicId;
    }

    //SETS

    public setName(name: string): void{
        this.name = name;
    }

    public setAge(age: number): void{
        this.age = age;
    }
}