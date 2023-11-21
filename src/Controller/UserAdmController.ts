//import * as testUser from "../Model/User";
import User, { UserTypes } from "../Model/User";
import absUserController from "./absUserController";
import { interfaceSelect } from "./interfaceSelect";

export default class UserAdmController extends absUserController implements interfaceSelect {
    
    async login(password: string, email: string | null, userName: string | null) {
        try {
            if (email) {
                const loginByEmail = await this.database.loginByEmailDb(email, password);

                console.log(loginByEmail);

                if (loginByEmail == undefined) {
                    return console.log("User not Found");
                }

                return console.log("User Found");
            }

            if (userName) {
                const loginByUsername = await this.database.loginByUsernameDb(userName, password);

                console.log(loginByUsername);
                

                if (loginByUsername == undefined) {
                    return console.log("User not Found");
                }

                return console.log("User Found");
            }
        } catch (error) {
            return console.log("Something went Wrong");
        }
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
            console.log(userDb);
            
            return console.log(newUser);
            

        } catch {
            return console.log("Something went Wrong.");
        }
    }

    public async select() {

    }

    async selectAll() {
        try {
            const users = await this.database.selectUsersDb();
            let user: string = "";            
            
            for (let i = 0; i < users.length; i++) {
                user += "Username: " + users[i].email + " | User Type: " + users[i].userType + "\n";
            }

            return console.log(user);

        } catch (error) {
            return console.log({ message: "Something went Wrong" });
        }

        /*let user: string = "";

        for (let i = 0; i < users.length; i++) {
            user += users[i] + "\n";
        }

        return user;        

        for (let i = 0; i < 5; i++) {
           const element = users[i];
           user += "Username: " + this.database.selectUsersDb() + " User Type: " + element.getEmail() + "\n";
        }
        console.log(user);
        
        return user;*/
    }

}