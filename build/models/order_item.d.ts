import BaseModel from './base_model';
import Indexable from '../interfaces/indexable';
import Sellable from '../interfaces/sellable';
export default class OrderItem extends BaseModel implements Indexable, Sellable {
    name: string;
    code: string;
    quantity: number;
    unitPriceWithVat: number;
    linePrice: number;
    linePriceWithVat: number;
    price: number;
    currency: string;
    vat: number;
    unit: string;
    index: number;
    constructor(data: OrderItem);
}
