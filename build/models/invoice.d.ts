import ItemDocument from './item_document';
import { Invoicable } from '../interfaces';
export default class Invoice extends ItemDocument implements Invoicable {
    dueDate: Date;
    paymentMethod: string;
    constructor(_data: any);
}
