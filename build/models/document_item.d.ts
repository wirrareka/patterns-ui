import BaseModel from './base_model';
import { Indexable, Sellable } from '../interfaces';
export default class DocumentItem extends BaseModel implements Indexable, Sellable {
    index: number;
    document_id: string;
    name: string;
    code: string;
    quantity: number;
    unitPriceWithVat: number;
    linePrice: number;
    linePriceWithVat: number;
    price: number;
    currency: number;
    vat: number;
    unit: string;
    constructor(_data: any);
    get vatPrice(): number;
    recalculate(): void;
}
