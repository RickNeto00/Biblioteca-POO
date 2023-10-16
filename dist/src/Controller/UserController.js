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
const User_1 = __importDefault(require("../Model/User"));
const Database_1 = __importDefault(require("../dao/Database"));
class UserController {
    constructor() {
        this.db = new Database_1.default();
    }
    createUser(email, password, userName, userType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userByEmail = yield this.db.findUserByEmailDb(email);
                if (userByEmail != undefined) {
                    return console.log("\nEmail already registered.");
                }
                const userByUserName = yield this.db.findUserByUserNameDb(userName);
                if (userByUserName != undefined) {
                    return console.log("\nUserName already registered.");
                }
                const user = yield this.db.createUserDb(email, password, userName, userType);
                //return console.log("\nUser Created.");
                const newUser = new User_1.default(email, password, userName, userType);
                return console.log(newUser);
            }
            catch (error) {
                return console.log("Server Error.");
            }
        });
    }
}
exports.default = UserController;
