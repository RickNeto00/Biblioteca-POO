import ConnectionController from "./ConnectionController";

export default class PubCompanyController {
    private database = ConnectionController.getConnection();
}