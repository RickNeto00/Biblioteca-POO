import PubCompany from "../Model/PubCompany";
import createPubCompanyView from "../View/pubCompany/create";
import homePubCompany from "../View/pubCompany/home";
import ConnectionController from "./ConnectionController";

export default class PubCompanyController {
    private database = ConnectionController.getConnection();

    public async createPubCompany(name: string, foundationDate: number) {
        try {
            const pubCompanyByName = await this.database.findPubCompanyByNameDb(name);            

            if (pubCompanyByName != undefined) {
                console.log("Publisher Company already exists.");
                return createPubCompanyView();
                return "Nao deu certo";
            }

            await this.database.createPubCompanyDb(name, foundationDate);
            console.log("Publisher Company created with success!");
            return homePubCompany();
            return "Teste deu certo";
            
        } catch {
            return console.log("Something went Wrong");
        }
    }
}