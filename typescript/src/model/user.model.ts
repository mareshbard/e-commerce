export enum role {
    ADMIN = "admin", 
    CUSTOMER = "customer"
}

export class User {
    constructor(public id: number, public username: string, public email: string, public role: role) {}
}