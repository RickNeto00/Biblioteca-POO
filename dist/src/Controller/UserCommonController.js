"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const User_1 = __importStar(require("../Model/User"));
const homeCommon_1 = __importDefault(require("../View/user/homeCommon"));
const login_1 = __importDefault(require("../View/user/login"));
const absUserController_1 = __importDefault(require("./absUserController"));
class UserCommonController extends absUserController_1.default {
    login(password, email, userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (email) {
                    const loginByEmail = yield this.database.loginByEmailDb(email, password);
                    if (loginByEmail == undefined) {
                        console.log("User not Found");
                        return (0, login_1.default)();
                    }
                    console.log("User Found");
                    return (0, homeCommon_1.default)();
                }
                if (userName) {
                    const loginByUsername = yield this.database.loginByUsernameDb(userName, password);
                    if (loginByUsername == undefined) {
                        console.log("User not Found");
                        return (0, login_1.default)();
                    }
                    console.log("User Found");
                    return (0, homeCommon_1.default)();
                }
            }
            catch (error) {
                return console.log("Something went Wrong");
            }
        });
    }
    createUser(email, password, userName, userType = User_1.UserTypes.Common) {
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
}
exports.default = UserCommonController;
