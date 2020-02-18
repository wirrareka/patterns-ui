import BaseModel from "./base_model";
export default class Contact extends BaseModel {
    name: string;
    street: string;
    street2: string;
    zip: string;
    city: string;
    country: string;
    email: string;
    phone: string;
    site: string;
    business_id: string;
    vat_id: string;
    vat_payer_id: string;
    isActive: boolean;
    note: string;
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(data: any);
}
