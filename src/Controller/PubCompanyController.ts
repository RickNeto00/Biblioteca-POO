import PubCompany from "../Model/PubCompany";
import ConnectionController from "./ConnectionController";

export default class PubCompanyController {
    private database = ConnectionController.getConnection();

    public async createPubCompany(name: string, foundationDate: number) {
        try {
            const pubCompanyByName = this.database.findPubCompanyByNameDb(name);

            if (pubCompanyByName != undefined) {
                return console.log("Publication Company already exists.");
            }

            const pubCompanyDb = await this.database.createPubCompanyDb(name, foundationDate);
            const newPubCompany = new PubCompany(pubCompanyDb.id, name, foundationDate);
            return newPubCompany;
            
        } catch {
            return console.log("Something went Wrong");
        }
    }
}