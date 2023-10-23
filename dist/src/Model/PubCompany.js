"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PubCompany {
    constructor(id, name, foundationDate) {
        this.id = id;
        this.name = name;
        this.foundationDate = foundationDate;
    }
    //GETS
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getFoudationDate() {
        return this.foundationDate;
    }
    //SETS
    setName(name) {
        this.name = name;
    }
    setFoundationDate(foundationDate) {
        this.foundationDate = foundationDate;
    }
}
exports.default = PubCompany;
