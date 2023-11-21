import absUserController from "./absUserController";

export default class UserCommonController extends absUserController {
    
    async login(login: string, password: string) {
        const loginByUsername = await this.database.loginByUsernameDb(login, password);
        const loginByEmail = await this.database.loginByEmailDb(login, password);

        if (loginByUsername && loginByEmail == null){
            return "User not Found.";
        }

        return "User logged";
    }

}