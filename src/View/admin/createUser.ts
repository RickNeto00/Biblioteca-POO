import PromptSync from "prompt-sync";
import { UserTypes } from "../../Model/User";
import UserAdmController from "../../Controller/UserAdmController";

export default function createUserViewAdmin() {
    const user = new UserAdmController();
    const prompt = PromptSync();
    let inputEmail: string;
    let inputPassword: string;
    let inputUserName: string;
    let inputUserType: string;

    console.log("\n============== REGISTRATION ==============\n");
    inputEmail = prompt("Email: ");
    inputPassword = prompt("Password: ");
    inputUserName = prompt("UserName: ");
    console.log("Type ( 1 ) to Admin User.\nType ( 2 ) to Common User.");
    inputUserType = prompt("Choose: ");

    if (inputUserType == "1") {
        user.createUser(inputEmail, inputPassword, inputUserName, UserTypes.Administrator);
    }

    if (inputUserType == "2") {
        user.createUser(inputEmail, inputPassword, inputUserName, UserTypes.Common);
    } else {
        console.log("Type a valid number.");
    }
}