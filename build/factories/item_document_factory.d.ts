import { Invoice, Order } from "../models";
export default class ItemDocumentFactory {
    get invoice(): Invoice;
    get order(): Order;
}
