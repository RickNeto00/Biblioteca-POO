import { UserTypes } from "../Model/User"

export default interface iDatabase {
    createUser(email: string, password: string, userName: string, userType: UserTypes): any;
}