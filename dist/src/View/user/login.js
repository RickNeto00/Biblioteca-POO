"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const UserAdmController_1 = __importDefault(require("../../Controller/UserAdmController"));
const CustomError_1 = __importDefault(require("../../Model/CustomError"));
function loginUserView() {
    try {
        const checkUser = new UserAdmController_1.default();
        const prompt = (0, prompt_sync_1.default)();
        console.log("\n============== LOGIN ==============\n");
        let login = prompt("Login (Email or Username): ");
        let inputPassword = prompt("Password: ");
        if (login.includes("@")) {
            checkUser.login(inputPassword, login, undefined);
        }
        else {
            checkUser.login(inputPassword, undefined, login);
        }
    }
    catch (e) {
        throw new CustomError_1.default("Error 500. ").getErrorMessage();
    }
}
exports.default = loginUserView;
