import BaseModel from './base_model';
import Contact from './contact';
import Currency from './currency';
import InvoiceItem from './invoice-item';
export default class Invoice extends BaseModel {
    code: string;
    company: Contact;
    customer: Contact;
    currency: Currency;
    price: number;
    price_with_vat: number;
    dueAt: Date;
    note: string;
    items: InvoiceItem[];
    paymentMethod: string;
    constructor(data: any);
    recalculate(): void;
    get vats(): {
        vat: string;
        base: any;
        price: any;
    }[];
}
