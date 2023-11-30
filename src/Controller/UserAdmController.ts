import User, { UserTypes } from "../Model/User";
import homeAdmin from "../View/admin/home";
import homeUser from "../View/user/user";
import loginUserView from "../View/user/login";
import absUserController from "./absUserController";
import { interfaceSelect } from "./interfaceSelect";

export default class UserAdmController extends absUserController /*implements interfaceSelect*/ {
    
    async login(password: string, email?: string, userName?: string) {
        try {
            if (email) {
                const loginByEmail = await this.database.loginByEmailDb(email, password);

                if (loginByEmail == undefined) {
                    console.log("User not Found");
                    return loginUserView();
                }

                console.log("User Found");
                return homeAdmin();
            }

            if (userName) {
                const loginByUsername = await this.database.loginByUsernameDb(userName, password);                

                if (loginByUsername == undefined) {
                    console.log("User not Found");
                    return loginUserView();
                }

                console.log("User Found");
                return homeAdmin();
            }

        } catch (error) {
            return console.log("Something went Wrong");
        }
    }

    public async createUser(email: string, password: string, userName: string, userType: UserTypes) {
        try {
            const userByEmail = await this.database.findUserByEmailDb(email);
            
            if (userByEmail != undefined) {
                console.log("\nEmail already registered.");
                return homeUser();
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