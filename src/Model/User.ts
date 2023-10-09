import { prisma } from "../../db";

export enum UserTypes{
    Common = "Common",
    Administrator = "Administrator"
}

export default class User{
    private email: string;
    private password: string;
    private userName: string;
    private userType: UserTypes;

    constructor(email: string, password: string, userName: string, userType: UserTypes){
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.userType = userType;
    }

    //GETS

    public getEmail(): string{
        return this.email;
    }

    public getPassword(): string{
        return this.password;
    }
    
    public getUserName(): string{
        return this.userName;
    }

    public getUserType(): UserTypes{
        return this.userType;
    }

    //SETS

    public setEmail(email: string): void{
        this.email = email;
    }

    public setPassword(password: string): void{
        this.password = password;
    }

    public setUserName(userName: string): void{
        this.userName = userName;
    }

    public setUserType(userType: UserTypes): void{
        this.userType = userType;
    }
}