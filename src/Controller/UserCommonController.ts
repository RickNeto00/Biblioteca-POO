import absUserController from "./absUserController";

export default class UserCommonController extends absUserController {
    
    login(login: string, password: string) {
        if (this.database.loginByUsernameDb(login, password) == null) {
            return false;
        }
        if (this.database.loginByEmailDb(login, password) == null) {
            return false;
        }c    

    }

}