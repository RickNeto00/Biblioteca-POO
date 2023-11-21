import ConnectionController from "./ConnectionController";

export default abstract class absUserController {

    protected database = ConnectionController.getConnection();

    abstract login(password: string, email: string | null, userName: string | null): any;
}