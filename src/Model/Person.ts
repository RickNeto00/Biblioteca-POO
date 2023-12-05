export default class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    //GETS

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