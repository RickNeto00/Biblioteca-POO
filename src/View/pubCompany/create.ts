import PromptSync from "prompt-sync";
import PubCompanyController from "../../Controller/PubCompanyController";

export default async function createPubCompany() {
    try {
        const pubCompany = new PubCompanyController();
        const prompt = PromptSync();
        let name: string;
        let foundationDate: string;
    
        console.log("\n============== CREATE ==============\n");
        name = prompt("Name of Publisher Company: ");
        foundationDate = prompt("Foundation Year: ");

        console.log(typeof foundationDate);

        parseInt(foundationDate);

        console.log(typeof foundationDate);

        //await pubCompany.createPubCompany(name, foundationDate)
    
    } catch (error) {
        
    }

}