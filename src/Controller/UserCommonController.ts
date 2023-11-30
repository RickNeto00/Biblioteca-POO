import User, { UserTypes } from "../Model/User";
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

    public async createUser(email: string, password: string, userName: string, userType = UserTypes.Common) {
        try {
            const userByEmail = await this.database.findUserByEmailDb(email);
            
            if (userByEmail != undefined) {
                return console.log("\nEmail already registered.");
            }

            const userByUserName = await this.database.findUserByUserNameDb(userName);
            
            if (userByUserName != undefined) {
                return console.log("\nUserName already registered.");
            }

            const userDb = await this.database.createUserDb(email, password, userName, userType);
            const newUser = new User(userDb.id, email, password, userName, userType);
            console.log(userDb);
            
            return console.log(newUser);
            

        } catch {
            return console.log("Something went Wrong.");
        }
    }

}