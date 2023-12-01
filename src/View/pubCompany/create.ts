import PromptSync from "prompt-sync";
import PubCompanyController from "../../Controller/PubCompanyController";

export default async function createPubCompanyView() {
    try {
        const pubCompany = new PubCompanyController();
        const prompt = PromptSync();
        let name: string;
        let foundationDate: string;
    
        console.log("\n============== CREATE ==============\n");
        name = prompt("Name of Publisher Company: ");
        foundationDate = prompt("Foundation Year: ");

        await pubCompany.createPubCompany(name, parseInt(foundationDate))
    
    } catch (error) {
        
    }

}