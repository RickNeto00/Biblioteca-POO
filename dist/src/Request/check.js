"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.isEmail = void 0;
function isEmail(_email) {
    const check = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    return check.test(_email);
}
exports.isEmail = isEmail;
function isString(_value) {
    if ((_value instanceof String || typeof _value === 'string')) {
        return true;
    }
    else {
        return false;
    }
}
exports.isString = isString;
