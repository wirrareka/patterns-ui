import Contactable from './contactable';
import Indexable from './indexable';
import Sellable from './sellable';
import TimeStamped from './timestamped';
import Notable from './notable';
import Shipable from './shipable';
export default interface ItemDocumentable extends Notable, Shipable, TimeStamped {
    code: string;
    state: string;
    items: (Sellable & Indexable)[];
    total: number;
    totalWithVat: number;
    vendor: Contactable;
    customer: Contactable;
    itemsTotal: number;
    itemsTotalWithVat: number;
    recalculate(): void;
}
