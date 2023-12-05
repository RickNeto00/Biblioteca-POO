import Person from "./Person";

export default class Author extends Person {
    private id: number;
    private publicId: string;

    constructor(id: any, name: any, age: any, publicId: any) {
        super(name, age);
        this.id = id;
        this.publicId = publicId;
    }

    //GETS

    public getId(): number {
        return this.id;
    }

    public getPublicId(): string {
        return this.publicId;
    }
}