import PromptSync from "prompt-sync";
import { UserTypes } from "../../Model/User";
import UserAdmController from "../../Controller/UserAdmController";

export default async function createUserView() {
    try {
        const user = new UserAdmController();
        const prompt = PromptSync();
        let inputEmail: string;
        let inputPassword: string;
        let inputUserName: string;
    
        console.log("\n============== REGISTRATION ==============\n");
        inputEmail = prompt("Email: ");
    
        while (!inputEmail.includes("@")) {
            console.log("\nThe email must include a '@'.");
            inputEmail = prompt("Email: ");
        }
    
        inputPassword = prompt("Password: ");
        inputUserName = prompt("UserName: ");
    
        await user.createUser(inputEmail, inputPassword, inputUserName, UserTypes.Common);
    } catch (error) {
        
    }

}