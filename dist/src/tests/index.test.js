"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../Model/User"));
/*describe('testing login', () => {
  test('login function', () => {
    expect(new login()).toBe(loginUserView());
  });
});*/
describe('testing select users', () => {
    test('select function', () => {
        expect(new User_1.default(1, 'henrique@.com', '123', 'henrique', 'admin')).toBe('henrique@.com');
    });
});
/*describe('testing index file', () => {
  test('double function', () => {
    expect(double(5)).toBe(10);
  });

  test('concat function', () => {
    expect(concat('John', ' ', 'Wick')).toBe('John Wick');
  });
});*/ 
