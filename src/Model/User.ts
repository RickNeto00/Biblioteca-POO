import { prisma } from "../../db";

export enum UserTypes{
    Common = "Common",
    Administrator = "Administrator"
}

export default class User{
    private id: number;
    private email: string;
    private password: string;
    private userName: string;
    private userType: string;


    constructor(id: number, email: string, password: string, userName: string, userType: string){
        this.id = id;
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.userType = userType;
    }

    //GETS

    public getId(): number{
        return this.id;
    }

    public getEmail(): string{
        return this.email;
    }

    public getPassword(): string{
        return this.password;
    }
    
    public getUserName(): string{
        return this.userName;
    }

    public getUserType(): string{
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