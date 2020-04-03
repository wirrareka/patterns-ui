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
import bigDecimal from 'js-big-decimal';
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
        _this.currency = deserializeString(data.currency);
        _this.issuedBy = deserializeString(data.issuedBy);
        _this.issuedById = deserializeString(data.issuedById);
        _this.signature = deserializeString(data.signature);
        _this.paymentMethod = deserializeString(data.paymentMethod);
        if (data instanceof ItemDocument) {
            _this.shippingPrice = data.shippingPrice;
            _this.shippingPriceWithVat = data.shippingPriceWithVat;
            _this.total = data.total;
            _this.totalWithVat = data.totalWithVat;
        }
        else {
            if (typeof data.shippingPrice === 'object' && data.shippingPrice.value) {
                _this.shippingPrice = new bigDecimal(data.shippingPrice.value);
                _this.shippingPriceWithVat = new bigDecimal(data.shippingPriceWithVat.value);
                _this.total = new bigDecimal(data.total.value);
                _this.totalWithVat = new bigDecimal(data.totalWithVat.value);
            }
            else {
                _this.shippingPrice = new bigDecimal(data.shippingPrice);
                _this.shippingPriceWithVat = new bigDecimal(data.shippingPriceWithVat);
                _this.total = new bigDecimal(data.total);
                _this.totalWithVat = new bigDecimal(data.totalWithVat);
            }
        }
        // shipable
        _this.deliveryDate = deserializeDate(data.deliveryDate);
        _this.shippingDate = deserializeDate(data.shippingDate);
        _this.shippingService = deserializeString(data.shippingService);
        _this.shippingReference = deserializeString(data.shippingReference);
        _this.weight = deserializeNumber(data.weight);
        return _this;
    }
    Object.defineProperty(ItemDocument.prototype, "itemsTotal", {
        get: function () {
            return this.items.reduce(function (total, item) { return total = total.add(item.linePrice); }, new bigDecimal(0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDocument.prototype, "itemsTotalWithVat", {
        get: function () {
            return this.items.reduce(function (total, item) { return total = total.add(item.linePriceWithVat); }, new bigDecimal(0));
        },
        enumerable: true,
        configurable: true
    });
    ItemDocument.prototype.recalculate = function () {
        this.total = this.itemsTotal.add(this.shippingPrice);
        this.totalWithVat = this.itemsTotalWithVat.add(this.shippingPriceWithVat);
    };
    ItemDocument.prototype.newItem = function () {
        return new DocumentItem({ document_id: this.id });
    };
    ItemDocument.prototype.numericCode = function () {
        return this.code.match(/([0-9]*)/g).join('');
    };
    ItemDocument.prototype.workPrice = function () {
        var items = this.items.filter(function (i) { return i.name.toLowerCase().replace(/á/g, "a").match('praca'); });
        return new bigDecimal(items.reduce(function (left, right) { return left += parseFloat(right.linePriceWithVat.getValue()); }, 0)).round(2);
    };
    ItemDocument.prototype.itemsPrice = function () {
        var items = this.items.filter(function (i) { return !i.name.toLowerCase().replace(/á/g, "a").match('praca'); });
        return new bigDecimal(items.reduce(function (left, right) { return left += parseFloat(right.linePriceWithVat.getValue()); }, 0)).round(2);
    };
    Object.defineProperty(ItemDocument.prototype, "vats", {
        get: function () {
            var vats = {};
            this.items.forEach(function (item) {
                vats[item.vat] = !vats[item.vat] ? {
                    base: item.linePrice || new bigDecimal('0'),
                    price: item.vatPrice || new bigDecimal('0')
                } : {
                    base: vats[item.vat].base.add(item.linePrice),
                    price: vats[item.vat].price.add(item.vatPrice)
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
    Object.defineProperty(ItemDocument.prototype, "_json", {
        get: function () {
            return {
                code: this.code,
                note: this.note,
                state: this.state,
                items: this.items.map(function (item) { return item.json; }),
                vendor: this.vendor,
                customer: this.customer,
                currency: this.currency,
                paymentMethod: this.paymentMethod,
                total: this.total.getValue(),
                totalWithVat: this.totalWithVat.getValue(),
                shippingDate: this.shippingDate,
                deliveryDate: this.deliveryDate,
                shippingPrice: this.shippingPrice.getValue(),
                shippingPriceWithVat: this.shippingPriceWithVat.getValue(),
                shippingService: this.shippingService,
                shippingReference: this.shippingReference,
                weight: this.weight,
                issuedBy: this.issuedBy,
                issuedById: this.issuedById,
                signature: this.signature
            };
        },
        enumerable: true,
        configurable: true
    });
    return ItemDocument;
}(BaseModel));
export default ItemDocument;
//# sourceMappingURL=item_document.js.map