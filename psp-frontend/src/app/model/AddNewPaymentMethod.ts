export interface AddNewPaymentMethod{
    shopId:string|null;
    paymentMethodId:number;
    paymentApiClientId:string;
    paymentApiSecret:string;
}