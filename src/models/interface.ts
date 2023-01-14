export interface Ilogin {
    email: string,
    password: string
}

export interface Isignup {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string,
}

export interface home{
    firstName: string,
    lastName: string,
    country:string,
    language:string,
    email: string,
}