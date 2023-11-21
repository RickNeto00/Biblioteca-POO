import ConnectionController from "./ConnectionController";

export default abstract class absUserController {

    protected database = ConnectionController.getConnection();

    abstract login(userName: string, password: string): any;
}