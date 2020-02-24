import { TimeStamped, Notable, Shipable, VatSummarizable } from '../interfaces';
import BaseModel from './base_model';
import Contact from './contact';
import DocumentItem from './document_item';
export default class ItemDocument extends BaseModel implements Notable, Shipable, TimeStamped {
    code: string;
    note: string;
    state: string;
    items: DocumentItem[];
    vendor: Contact;
    customer: Contact;
    currency: string;
    paymentMethod: string;
    total: number;
    totalWithVat: number;
    shippingDate: Date;
    deliveryDate: Date;
    shippingPrice: number;
    shippingPriceWithVat: number;
    shippingService: string;
    shippingReference: string;
    weight: number;
    constructor(data: any);
    get itemsTotal(): number;
    get itemsTotalWithVat(): number;
    recalculate(): void;
    newItem(): DocumentItem;
    get vats(): VatSummarizable[];
}
