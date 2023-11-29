import loginUserView from "../View/user/login";
import absUserController from "./absUserController";

export default class UserCommonController extends absUserController {
    
    async login(password: string, email?: string, userName?: string) {
        try {
            if (email) {
                const loginByEmail = await this.database.loginByEmailDb(email, password);

                if (loginByEmail == undefined) {
                    console.log("User not Found");
                    return loginUserView();
                }

                console.log("User Found");
                return homeCommonUser();
            }

            if (userName) {
                const loginByUsername = await this.database.loginByUsernameDb(userName, password);                

                if (loginByUsername == undefined) {
                    console.log("User not Found");
                    return loginUserView();
                }

                console.log("User Found");
                return homeCommonUser();
            }

        } catch (error) {
            return console.log("Something went Wrong");
        }
    }

}