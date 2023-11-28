"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = exports.double = void 0;
function double(x) {
    return x * 2;
}
exports.double = double;
function concat(...args) {
    return args.reduce((result, param) => result + param, '');
}
exports.concat = concat;
