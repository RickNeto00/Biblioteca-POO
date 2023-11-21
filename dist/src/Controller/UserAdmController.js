"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as testUser from "../Model/User";
const User_1 = __importDefault(require("../Model/User"));
const absUserController_1 = __importDefault(require("./absUserController"));
class UserAdmController extends absUserController_1.default {
    login(password, email, userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (email) {
                    const loginByEmail = yield this.database.loginByEmailDb(email, password);
                    console.log(loginByEmail);
                    if (loginByEmail == undefined) {
                        return console.log("User not Found");
                    }
                    return console.log("User Found");
                }
                if (userName) {
                    const loginByUsername = yield this.database.loginByUsernameDb(userName, password);
                    console.log(loginByUsername);
                    if (loginByUsername == undefined) {
                        return console.log("User not Found");
                    }
                    return console.log("User Found");
                }
            }
            catch (error) {
                return console.log("Something went Wrong");
            }
        });
    }
    createUser(email, password, userName, userType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userByEmail = yield this.database.findUserByEmailDb(email);
                if (userByEmail != undefined) {
                    return console.log("\nEmail already registered.");
                }
                const userByUserName = yield this.database.findUserByUserNameDb(userName);
                if (userByUserName != undefined) {
                    return console.log("\nUserName already registered.");
                }
                const userDb = yield this.database.createUserDb(email, password, userName, userType);
                const newUser = new User_1.default(userDb.id, email, password, userName, userType);
                console.log(userDb);
                return console.log(newUser);
            }
            catch (_a) {
                return console.log("Something went Wrong.");
            }
        });
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    selectAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.database.selectUsersDb();
                let user = "";
                for (let i = 0; i < users.length; i++) {
                    user += "Username: " + users[i].email + " | User Type: " + users[i].userType + "\n";
                }
                return console.log(user);
            }
            catch (error) {
                return console.log({ message: "Something went Wrong" });
            }
            /*let user: string = "";
    
            for (let i = 0; i < users.length; i++) {
                user += users[i] + "\n";
            }
    
            return user;
    
            for (let i = 0; i < 5; i++) {
               const element = users[i];
               user += "Username: " + this.database.selectUsersDb() + " User Type: " + element.getEmail() + "\n";
            }
            console.log(user);
            
            return user;*/
        });
    }
}
exports.default = UserAdmController;
