"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Author {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //GETS
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
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
