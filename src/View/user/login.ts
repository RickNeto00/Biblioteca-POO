import PromptSync from "prompt-sync";
import UserAdmController from "../../Controller/UserAdmController";

export default function loginUserView() {
    const checkUser = new UserAdmController();
    const prompt = PromptSync();
    let login: string;
    let inputPassword: string;

    console.log("\n============== LOGIN ==============\n");
    login = prompt("Login: ");
    inputPassword = prompt("Password: ");

    if (login.includes("@")) {
        checkUser.login(inputPassword, login, null);
    } else {
        checkUser.login(inputPassword, null, login)
    }
}