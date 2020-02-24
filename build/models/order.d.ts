import Orderable from '../interfaces/orderable';
import ItemDocument from './item_document';
import Return from './return';
export default class Order extends ItemDocument implements Orderable {
    returns: Return[];
    returnCosts: number;
    constructor(data: any);
    get itemsTotal(): number;
    get itemsTotalWithVat(): number;
    recalculate(): void;
}
