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
                    return homeCommonUser();
                }
                if (userName) {
                    const loginByUsername = yield this.database.loginByUsernameDb(userName, password);
                    if (loginByUsername == undefined) {
                        console.log("User not Found");
                        return (0, login_1.default)();
                    }
                    console.log("User Found");
                    return homeCommonUser();
                }
            }
            catch (error) {
                return console.log("Something went Wrong");
            }
        });
    }
}
exports.default = UserCommonController;
