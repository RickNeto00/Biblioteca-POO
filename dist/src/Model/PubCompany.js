"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PubCompany {
    constructor(name, foundationDate) {
        this.name = name;
        this.foundationDate = foundationDate;
    }
    //GETS
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
