"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
/*describe('testing login', () => {
  test('login function', () => {
    expect(new login()).toBe(loginUserView());
  });
});*/
/*describe('testing select users', () => {
  test('select function', () => {
    expect(new getEmail(1, 'henrique@.com', '123', 'henrique', 'Common')).toBe('henrique@.com');
  });
});*/
describe('testing index file', () => {
    test('double function', () => {
        expect((0, index_1.double)(5)).toBe(10);
    });
    test('concat function', () => {
        expect((0, index_1.concat)('John', ' ', 'Wick')).toBe('John Wick');
    });
});
