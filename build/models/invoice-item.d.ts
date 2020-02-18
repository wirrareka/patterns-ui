import BaseModel from './base_model';
export default class InvoiceItem extends BaseModel {
    invoice_id: string;
    index: number;
    item_id: string;
    item_name: string;
    item_description: string;
    unit_id: string;
    unit_code: string;
    unit_price: number;
    line_price: number;
    quantity: number;
    vat: number;
    vat_price: number;
    price_with_vat: number;
    note: string;
    constructor(data: any);
    recalculate(): void;
}
