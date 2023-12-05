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
const Operation_1 = __importDefault(require("../Model/Operation"));
const PubCompany_1 = __importDefault(require("../Model/PubCompany"));
const ConnectionController_1 = __importDefault(require("./ConnectionController"));
class PubCompanyController {
    constructor() {
        this.database = ConnectionController_1.default.getConnection();
        this.pubCompany = new Operation_1.default;
    }
    createPubCompany(name, foundationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pubCompanyByName = yield this.database.findPubCompanyByNameDb(name);
                if (pubCompanyByName != undefined) {
                    console.log("Publisher Company already exists.");
                    //return createPubCompanyView();
                    return "Nao deu certo";
                }
                yield this.database.createPubCompanyDb(name, foundationDate);
                console.log("Publisher Company created with success!");
                //return homePubCompany();
                return "Teste deu certo";
            }
            catch (_a) {
                return console.log("Something went Wrong");
            }
        });
    }
    selectPubCompanies() {
        this.pubCompany.selectAll(new PubCompany_1.default(undefined, undefined, undefined));
    }
}
exports.default = PubCompanyController;
