import User, { UserTypes } from "../Model/User";
import iDatabase from "./iDatabase";

export abstract class absDatabase implements iDatabase {
    abstract createUser(email: string, password: string, userName: string, userType: UserTypes): any;
}