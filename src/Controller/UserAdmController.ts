import User, { UserTypes } from "../Model/User";
import absUserController from "./absUserController";

export default class UserAdmController extends absUserController {
    
    async login(login: string, password: string) {
        const loginByUsername = await this.database.loginByUsernameDb(login, password);
        const loginByEmail = await this.database.loginByEmailDb(login, password);

        if (loginByUsername && loginByEmail == null){
            return "User not Found.";
        }

        return "User logged";
    }

    public async createUser(email: string, password: string, userName: string, userType: UserTypes) {
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
            return console.log(newUser);
            

        } catch {
            return console.log("Something went Wrong.");
        }
    }

}