"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypes = void 0;
var UserTypes;
(function (UserTypes) {
    UserTypes["Common"] = "Common";
    UserTypes["Administrator"] = "Administrator";
})(UserTypes || (exports.UserTypes = UserTypes = {}));
class User {
    constructor(email, password, userName, userType) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.userType = userType;
    }
    //GETS
    getEmail() {
        return this.email;
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
    setEmail(email) {
        this.email = email;
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
