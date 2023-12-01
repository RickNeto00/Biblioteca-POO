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
const create_1 = __importDefault(require("../View/pubCompany/create"));
const home_1 = __importDefault(require("../View/pubCompany/home"));
const ConnectionController_1 = __importDefault(require("./ConnectionController"));
class PubCompanyController {
    constructor() {
        this.database = ConnectionController_1.default.getConnection();
    }
    createPubCompany(name, foundationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pubCompanyByName = yield this.database.findPubCompanyByNameDb(name);
                if (pubCompanyByName != undefined) {
                    console.log("Publisher Company already exists.");
                    return (0, create_1.default)();
                    return "Nao deu certo";
                }
                yield this.database.createPubCompanyDb(name, foundationDate);
                console.log("Publisher Company created with success!");
                return (0, home_1.default)();
                return "Teste deu certo";
            }
            catch (_a) {
                return console.log("Something went Wrong");
            }
        });
    }
}
exports.default = PubCompanyController;
