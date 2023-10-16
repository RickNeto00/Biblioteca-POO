import { prisma } from "../../db";

export default class Author{
    private id: number;
    private name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name;
        this.age = age;
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

    //SETS

    public setName(name: string): void{
        this.name = name;
    }

    public setAge(age: number): void{
        this.age = age;
    }
}