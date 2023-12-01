"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message) {
        super(message);
    }
    getErrorMessage() {
        return this.message + 'Something Went Wrong. Try Again.';
    }
}
exports.default = CustomError;
