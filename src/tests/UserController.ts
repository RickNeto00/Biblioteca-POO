/*import index from "../..";
import User, { UserTypes } from "../Model/User";
import ConnectionController from "../Controller/ConnectionController";

export default class UserController {

    private database = ConnectionController.getConnection();

    public async createUser(email: string, password: string, userName: string, userType: UserTypes) {
        try {
            const userByEmail = await this.database.findUserByEmailDb(email);
            
            if (userByEmail != undefined) {
                console.log("\nEmail already registered.");
                return index();
            }

            const userByUserName = await this.database.findUserByUserNameDb(userName);
            
            if (userByUserName != undefined) {
                console.log("\nUserName already registered.");
                return index();
            }

            const userDb = await this.database.createUserDb(email, password, userName, userType);
            const newUser = new User(userDb.id, email, password, userName, userType);
            console.log("User Created");
            return index();

        } catch {
            return console.log("Something went Wrong.");
        }
    }
}*/
