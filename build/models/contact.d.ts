import BaseModel from './base_model';
import { Contactable, Nameable } from '../interfaces';
export default class Contact extends BaseModel implements Contactable, Nameable {
    name: string;
    street: string;
    street2: string;
    zip: string;
    city: string;
    country: string;
    email: string;
    phone: string;
    site: string;
    isActive: boolean;
    note: string;
    firstName: string;
    lastName: string;
    businessId: string;
    vatId: string;
    vatPayerId: string;
    constructor(_data: any);
    getName(): string;
    get fullName(): string;
}
