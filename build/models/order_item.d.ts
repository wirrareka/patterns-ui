import BaseModel from './base_model';
import Indexable from '../interfaces/indexable';
import Sellable from '../interfaces/sellable';
import bigDecimal from 'js-big-decimal';
export default class OrderItem extends BaseModel implements Indexable, Sellable {
    name: string;
    code: string;
    quantity: number;
    unitPriceWithVat: bigDecimal;
    linePrice: bigDecimal;
    linePriceWithVat: bigDecimal;
    price: bigDecimal;
    currency: string;
    vat: number;
    unit: string;
    index: number;
    custom1: string;
    custom2: string;
    custom3: string;
    constructor(data: any);
}
