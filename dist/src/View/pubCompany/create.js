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
const PubCompanyController_1 = __importDefault(require("../../Controller/PubCompanyController"));
function createPubCompany() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pubCompany = new PubCompanyController_1.default();
            const prompt = (0, prompt_sync_1.default)();
            let name;
            let foundationDate;
            console.log("\n============== CREATE ==============\n");
            name = prompt("Name of Publisher Company: ");
            foundationDate = prompt("Foundation Year: ");
            console.log(typeof foundationDate);
            parseInt(foundationDate);
            console.log(typeof foundationDate);
            //await pubCompany.createPubCompany(name, foundationDate)
        }
        catch (error) {
        }
    });
}
exports.default = createPubCompany;
