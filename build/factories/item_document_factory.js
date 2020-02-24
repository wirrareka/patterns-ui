import { Invoice, Order } from "../models";
import PatternApp from '../pattern_app';
var ItemDocumentFactory = /** @class */ (function () {
    function ItemDocumentFactory() {
    }
    Object.defineProperty(ItemDocumentFactory.prototype, "invoice", {
        get: function () {
            return new Invoice({
                vendor: PatternApp.settings.company
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDocumentFactory.prototype, "order", {
        get: function () {
            return new Order({
                vendor: PatternApp.settings.company
            });
        },
        enumerable: true,
        configurable: true
    });
    return ItemDocumentFactory;
}());
export default ItemDocumentFactory;
//# sourceMappingURL=item_document_factory.js.map