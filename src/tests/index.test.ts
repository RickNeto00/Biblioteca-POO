import loginUserView from '../View/user/login';
import { double, concat } from '../index';

import selectAll from '../Controller/UserAdmController'
import getEmail, { UserTypes } from '../Model/User';

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
    expect(double(5)).toBe(10);
  });

  test('concat function', () => {
    expect(concat('John', ' ', 'Wick')).toBe('John Wick');
  });
});