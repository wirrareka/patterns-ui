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
import BaseModel from './base_model';
import Contact from './contact';
import Currency from './currency';
import InvoiceItem from './invoice-item';
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(data) {
        var _this = _super.call(this, data) || this;
        _this.code = data.code;
        _this.currency = new Currency(data.currency || {});
        _this.company = new Contact(data.company || {});
        _this.customer = new Contact(data.customer || {});
        _this.price = data.price || 0;
        _this.price_with_vat = data.price_with_vat || 0;
        _this.dueAt = data.dueAt ? new Date(data.dueAt) : new Date(_this.createdAt);
        _this.note = data.note || '';
        _this.items = (data.items || []).map(function (i) { return new InvoiceItem(i); });
        _this.paymentMethod = data.paymentMethod;
        _this.recalculate();
        return _this;
    }
    Invoice.prototype.recalculate = function () {
        this.price = this.items.reduce(function (prev, next) { return prev += (next.line_price); }, 0) || 0;
        this.price_with_vat = this.items.reduce(function (prev, next) { return prev += (next.line_price + next.vat_price); }, 0) || 0;
    };
    Object.defineProperty(Invoice.prototype, "vats", {
        get: function () {
            var vats = {};
            this.items.forEach(function (item) {
                if (!vats["" + item.vat]) {
                    vats["" + item.vat] = { base: item.line_price, price: item.vat_price };
                }
                else {
                    vats["" + item.vat] += { base: item.line_price, price: item.vat_price };
                }
            });
            return Object.keys(vats).map(function (vat) { return ({ vat: vat, base: vats[vat].base, price: vats[vat].price }); });
        },
        enumerable: true,
        configurable: true
    });
    return Invoice;
}(BaseModel));
export default Invoice;
//# sourceMappingURL=invoice.js.map