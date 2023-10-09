import User, { UserTypes } from "../Model/User";
import Database from "../dao/Database";

export default class UserController {

    private db = new Database();

    public async createUser(email: string, password: string, userName: string, userType: UserTypes) {
        try {
            const userByEmail = await this.db.findUserByEmailDb(email);
            
            if (userByEmail != undefined) {
                return console.log("\nEmail already registered.");
            }

            const userByUserName = await this.db.findUserByUserNameDb(userName);
            
            if (userByUserName != undefined) {
                return console.log("\nUserName already registered.");
            }

            const user = await this.db.createUserDb(email, password, userName, userType);
            return console.log("\nUser Created.");

            //return new User(email, password, userName, userType);

        } catch (error) {
            return console.log("Server Error.");
        }
    }
}
