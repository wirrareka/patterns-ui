import BaseModel from './base_model';
import bigDecimal from 'js-big-decimal';
export default class InvoiceItem extends BaseModel {
    invoice_id: string;
    index: number;
    item_id: string;
    item_name: string;
    item_description: string;
    unit_id: string;
    unit_code: string;
    unit_price: bigDecimal;
    line_price: bigDecimal;
    quantity: number;
    vat: number;
    vat_price: bigDecimal;
    price_with_vat: bigDecimal;
    note: string;
    constructor(data: any);
    recalculate(): void;
}
