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
import bigDecimal from 'js-big-decimal';
var InvoiceItem = /** @class */ (function (_super) {
    __extends(InvoiceItem, _super);
    function InvoiceItem(data) {
        var _this = _super.call(this, data) || this;
        _this.invoice_id = data.invoice_id || '';
        _this.index = data.index || 0;
        _this.item_id = data.item_id || '';
        _this.item_name = data.item_name || '';
        _this.item_description = data.item_description || '';
        _this.unit_id = data.unit_id || '';
        _this.unit_code = data.unit_code || '';
        _this.unit_price = new bigDecimal(data.unit_price);
        _this.line_price = new bigDecimal(data.line_price);
        _this.quantity = data.quantity || 0;
        _this.vat = data.vat || 0;
        _this.vat_price = new bigDecimal(data.vat_price);
        _this.price_with_vat = new bigDecimal(data.price_with_vat);
        _this.note = data.note || '';
        return _this;
    }
    InvoiceItem.prototype.recalculate = function () {
        this.line_price = this.unit_price.multiply(new bigDecimal(this.quantity));
        this.vat_price = this.line_price.multiply(new bigDecimal(this.vat).divide(new bigDecimal(100), 3));
        this.price_with_vat = this.line_price.multiply(this.vat_price);
    };
    return InvoiceItem;
}(BaseModel));
export default InvoiceItem;
//# sourceMappingURL=invoice-item.js.map