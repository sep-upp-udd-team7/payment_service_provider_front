export interface Registration{
    name:string;
    mail:string;
    password:string;
    successUrl:string;
    cancelUrl:string;
    returnUrl:string;
    using2FA : boolean
}