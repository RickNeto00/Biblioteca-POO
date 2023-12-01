import PromptSync from "prompt-sync";
import UserAdmController from "../../Controller/UserAdmController";
import CustomError from "../../Model/CustomError";

export default function loginUserView() {
    try {
        const checkUser = new UserAdmController();
        const prompt = PromptSync();
    
        console.log("\n============== LOGIN ==============\n");
        let login = prompt("Login (Email or Username): ");
        let inputPassword = prompt("Password: ");
    
        if (login.includes("@")) {
            checkUser.login(inputPassword, login, undefined);
        } else {
            checkUser.login(inputPassword, undefined, login);
        }
    } catch (e: any) {
        throw new CustomError("Error 500. ").getErrorMessage();
    }

}