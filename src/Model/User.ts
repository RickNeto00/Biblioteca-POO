export default class User{
    private login: string;
    private password: string;
    private userName: string;
    private userType: number;

    constructor(login: string, password: string, userName: string, userType: number){
        this.login = login;
        this.password = password;
        this.userName = userName;
        this.userType = userType;
    }

    //GETS

    public getLogin(): string{
        return this.login;
    }

    public getPassword(): string{
        return this.password;
    }
    
    public getUserName(): string{
        return this.userName;
    }

    public getUserType(): number{
        return this.userType;
    }

    //SETS

    public setLogin(login: string): void{
        this.login = login;
    }

    public setPassword(password: string): void{
        this.password = password;
    }

    public setUserName(userName: string): void{
        this.userName = userName;
    }

    public setUserType(userType: number): void{
        this.userType = userType;
    }
}