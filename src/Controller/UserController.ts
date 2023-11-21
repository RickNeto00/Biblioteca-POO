import User, { UserTypes } from "../Model/User";
import ConnectionController from "./ConnectionController";

export default class UserController {

    private database = ConnectionController.getConnection();

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
            return console.log(userDb);
            

        } catch {
            return console.log("Something went Wrong.");
        }
    }
}
