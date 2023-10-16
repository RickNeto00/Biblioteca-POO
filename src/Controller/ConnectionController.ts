import Database from "../dao/Database";

export default class ConnectionController {
    private static db = new Database;
    
    private constructor() {
    }

    public static getConnection(): Database {
        return this.db;
    }
}