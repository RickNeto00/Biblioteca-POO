import ConnectionController from "./ConnectionController";

export default class PersonController {
    protected database = ConnectionController.getConnection();

    public say(): void {
        return console.log("I am a Person");
    }
}