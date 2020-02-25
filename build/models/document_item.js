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
import { deserializeNumber, deserializeString } from '../common';
var DocumentItem = /** @class */ (function (_super) {
    __extends(DocumentItem, _super);
    function DocumentItem(_data) {
        var _this = this;
        var data = _data || {};
        _this = _super.call(this, data) || this;
        _this.document_id = deserializeString(data.document_id);
        _this.index = deserializeNumber(data.index);
        _this.name = deserializeString(data.name);
        _this.code = deserializeString(data.code);
        _this.unit = deserializeString(data.unit);
        _this.currency = deserializeString(data.currency);
        _this.price = deserializeNumber(data.price);
        _this.quantity = deserializeNumber(data.quantity);
        _this.vat = deserializeNumber(data.vat);
        _this.unitPriceWithVat = deserializeNumber(data.unitPriceWithVat);
        _this.linePrice = deserializeNumber(data.linePrice);
        _this.linePriceWithVat = deserializeNumber(data.linePriceWithVat);
        return _this;
    }
    Object.defineProperty(DocumentItem.prototype, "vatPrice", {
        get: function () {
            return this.linePrice * (this.vat / 100);
        },
        enumerable: true,
        configurable: true
    });
    DocumentItem.prototype.recalculate = function () {
        this.linePrice = this.price * this.quantity;
        this.linePriceWithVat = this.linePrice + this.vatPrice;
    };
    return DocumentItem;
}(BaseModel));
export default DocumentItem;
//# sourceMappingURL=document_item.js.map