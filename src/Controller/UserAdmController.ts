import absUserController from "./absUserController";
import Select from "./interfaceSelect";

export default class UserAdmController extends absUserController {
    
    async login(login: string, password: string) {
        const loginByUsername = await this.database.loginByUsernameDb(login, password);
        const loginByEmail = await this.database.loginByEmailDb(login, password);

        if (loginByUsername && loginByEmail == null){
            return "User not Found.";
        }

        return "User logged";
    }

    public async select() {
        const users = await this.database.selectUsersDb();
    }

}