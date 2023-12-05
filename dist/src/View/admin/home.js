"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const user_1 = __importDefault(require("../user/user"));
const __1 = __importDefault(require("../../.."));
const BookController_1 = __importDefault(require("../../Controller/BookController"));
const home_1 = __importDefault(require("../pubCompany/home"));
const AuthorController_1 = __importDefault(require("../../Controller/AuthorController"));
const home_2 = __importDefault(require("../book/home"));
function home() {
    const prompt = (0, prompt_sync_1.default)();
    const book = new BookController_1.default();
    console.log("\n============================= ADMIN PAGE =============================\n");
    console.log("| 1 | -> User");
    console.log("| 2 | -> Book");
    console.log("| 3 | -> Author");
    console.log("| 4 | -> Publisher Company");
    console.log("| 5 | -> Logout");
    console.log("| 0 | -> Exit\n");
    let choice = prompt("Choose an Option: ");
    switch (choice) {
        case "1":
            (0, user_1.default)();
            break;
        case "2":
            (0, home_2.default)();
            break;
        case "3":
            let author = new AuthorController_1.default();
            author.say();
            author.selectAuthors();
            break;
        case "4":
            (0, home_1.default)();
            break;
        case "5":
            (0, __1.default)();
            break;
        case "0":
            console.log("You choose exit.");
            break;
        default:
            console.log("Type a Valid Number.");
            home();
            break;
    }
}
exports.default = home;
