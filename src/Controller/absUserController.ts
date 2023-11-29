import Operation from "../Model/Operation";
import User from "../Model/User";
import ConnectionController from "./ConnectionController";

export default abstract class absUserController extends Operation<User> {

    abstract login(password: string, email?: string, userName?: string ): any;
}