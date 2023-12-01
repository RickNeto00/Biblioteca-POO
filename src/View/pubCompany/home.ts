import PromptSync from "prompt-sync";
import homeAdmin from "../admin/home";
import UserAdmController from "../../Controller/UserAdmController";
import createPubCompanyView from "./create";

export default async function homePubCompany() {
    const prompt = PromptSync();
    const user = new UserAdmController();
    console.log("\n============== PUBLISHER COMPANY OPTIONS ==============\n");
    console.log("| 1 | -> Create a Publisher Company");
    console.log("| 2 | -> Edit a Publisher Company");
    console.log("| 3 | -> Find a Publisher Company");
    console.log("| 4 | -> Select all Companies");
    console.log("| 5 | -> Return to Admin Page");
    console.log("| 0 | -> Exit\n");
    let choice = prompt("Choose an Option: ");

    switch (choice) {
        case "1":
            createPubCompanyView();
            break;
        case "2":
            
            break;
        case "3":
            
            break;
        case "4":
            await user.selectAll();
            homePubCompany();
            break;
        case "5":
            homeAdmin();
            break;
        case "0":
            console.log("You choose Exit");
            break;               
        default:
            console.log("Type a Valid Number.");
            homePubCompany();
            break;
    }
}
