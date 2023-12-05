"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Author extends Person_1.default {
    constructor(id, name, age, publicId) {
        super(name, age);
        this.id = id;
        this.publicId = publicId;
    }
    //GETS
    getId() {
        return this.id;
    }
    getPublicId() {
        return this.publicId;
    }
}
exports.default = Author;
