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
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const home_1 = __importDefault(require("../admin/home"));
const BookController_1 = __importDefault(require("../../Controller/BookController"));
const create_1 = __importDefault(require("./create"));
function bookHome() {
    return __awaiter(this, void 0, void 0, function* () {
        const prompt = (0, prompt_sync_1.default)();
        const bookController = new BookController_1.default();
        console.log("\n============== BOOK OPTIONS ==============\n");
        console.log("| 1 | -> Create a Book");
        console.log("| 2 | -> Edit a Book");
        console.log("| 3 | -> Find a Book");
        console.log("| 4 | -> Select all Books");
        console.log("| 5 | -> Return to Admin Page");
        console.log("| 0 | -> Exit\n");
        let choice = prompt("Choose an Option: ");
        switch (choice) {
            case "1":
                (0, create_1.default)();
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                yield bookController.selectBooks();
                bookHome();
                break;
            case "5":
                (0, home_1.default)();
                break;
            case "0":
                console.log("You choose Exit");
                break;
            default:
                console.log("Type a Valid Number.");
                bookHome();
                break;
        }
    });
}
exports.default = bookHome;
