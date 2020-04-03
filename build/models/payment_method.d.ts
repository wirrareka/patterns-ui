import BaseModel from './base_model';
export default class PaymentMethod extends BaseModel {
    code: string;
    title: string;
    constructor(data: any);
    static get card(): PaymentMethod;
    static get cash(): PaymentMethod;
    static get cashOnDelivery(): PaymentMethod;
    static get bankTransfer(): PaymentMethod;
    static get paypal(): PaymentMethod;
    static get all(): PaymentMethod[];
}
