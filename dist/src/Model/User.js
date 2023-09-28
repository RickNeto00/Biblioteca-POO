"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(login, password, userName, userType) {
        this.login = login;
        this.password = password;
        this.userName = userName;
        this.userType = userType;
    }
    //GETS
    getLogin() {
        return this.login;
    }
    getPassword() {
        return this.password;
    }
    getUserName() {
        return this.userName;
    }
    getUserType() {
        return this.userType;
    }
    //SETS
    setLogin(login) {
        this.login = login;
    }
    setPassword(password) {
        this.password = password;
    }
    setUserName(userName) {
        this.userName = userName;
    }
    setUserType(userType) {
        this.userType = userType;
    }
}
exports.default = User;
