"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Author {
    constructor(id, name, age, publicId) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.publicId = publicId;
    }
    //GETS
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getPublicId() {
        return this.publicId;
    }
    //SETS
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
exports.default = Author;
