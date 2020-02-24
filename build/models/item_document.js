var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { deserializeDate, deserializeNumber, deserializeString } from '../common';
import BaseModel from './base_model';
import Contact from './contact';
import DocumentItem from './document_item';
var ItemDocument = /** @class */ (function (_super) {
    __extends(ItemDocument, _super);
    function ItemDocument(data) {
        var _this = _super.call(this, data) || this;
        _this.code = deserializeString(data.code);
        _this.note = deserializeString(data.note);
        _this.state = deserializeString(data.state);
        _this.items = (data.items || []).map(function (item) { return new DocumentItem(item); });
        _this.vendor = new Contact(data.vendor);
        _this.customer = new Contact(data.customer);
        _this.paymentMethod = deserializeString(data.paymentMethod);
        _this.total = deserializeNumber(data.total);
        _this.totalWithVat = deserializeNumber(data.totalWithVat);
        // shipable
        _this.deliveryDate = deserializeDate(data.deliveryDate);
        _this.shippingDate = deserializeDate(data.shippingDate);
        _this.shippingPrice = deserializeNumber(data.shippingPrice);
        _this.shippingPriceWithVat = deserializeNumber(data.shippingPriceWithVat);
        _this.shippingService = deserializeString(data.shippingService);
        _this.shippingReference = deserializeString(data.shippingReference);
        _this.weight = deserializeNumber(data.weight);
        return _this;
    }
    Object.defineProperty(ItemDocument.prototype, "itemsTotal", {
        get: function () {
            return this.items.reduce(function (total, item) { return total += item.linePrice; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDocument.prototype, "itemsTotalWithVat", {
        get: function () {
            return this.items.reduce(function (total, item) { return total += item.linePriceWithVat; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    ItemDocument.prototype.recalculate = function () {
        this.total = this.itemsTotal + this.shippingPrice;
        this.totalWithVat = this.itemsTotalWithVat + this.shippingPriceWithVat;
    };
    ItemDocument.prototype.newItem = function () {
        return new DocumentItem({ document_id: this.id });
    };
    Object.defineProperty(ItemDocument.prototype, "vats", {
        get: function () {
            var vats = {};
            this.items.forEach(function (item) {
                vats[item.vat] = !vats[item.vat] ? {
                    base: item.linePrice,
                    price: item.vatPrice
                } : {
                    base: vats[item.vat].base + item.linePrice,
                    price: vats[item.vat].price + item.vatPrice
                };
            });
            return Object.keys(vats).map(function (vat) { return ({
                vat: parseFloat(vat),
                base: vats[vat].base,
                price: vats[vat].price
            }); });
        },
        enumerable: true,
        configurable: true
    });
    return ItemDocument;
}(BaseModel));
export default ItemDocument;
//# sourceMappingURL=item_document.js.map