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
import bigDecimal from 'js-big-decimal';
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
        _this.quantity = deserializeNumber(data.quantity);
        if (_data instanceof DocumentItem) {
            _this.price = data.price;
            _this.unitPriceWithVat = data.unitPriceWithVat;
            _this.linePrice = data.linePrice;
            _this.linePriceWithVat = data.linePriceWithVat;
        }
        else {
            if (typeof data.price === 'object' && data.price.value) {
                _this.price = new bigDecimal(data.price.value);
                _this.unitPriceWithVat = new bigDecimal(data.unitPriceWithVat.value);
                _this.linePrice = new bigDecimal(data.linePrice.value);
                _this.linePriceWithVat = new bigDecimal(data.linePriceWithVat.value);
            }
            else {
                _this.price = new bigDecimal(data.price);
                _this.unitPriceWithVat = new bigDecimal(data.unitPriceWithVat);
                _this.linePrice = new bigDecimal(data.linePrice);
                _this.linePriceWithVat = new bigDecimal(data.linePriceWithVat);
            }
        }
        _this.vat = deserializeNumber(data.vat);
        _this.vatTotalOnly = data.vatTotalOnly || false;
        _this.custom1 = data.custom1 || '';
        _this.custom2 = data.custom2 || '';
        _this.custom3 = data.custom3 || '';
        _this.custom4 = data.custom4 || '';
        return _this;
    }
    Object.defineProperty(DocumentItem.prototype, "vatPrice", {
        get: function () {
            return this.linePrice.multiply(new bigDecimal(this.vat / 100));
        },
        enumerable: true,
        configurable: true
    });
    DocumentItem.prototype.recalculate = function (skipVat) {
        if (skipVat === void 0) { skipVat = false; }
        this.linePrice = this.price.multiply(new bigDecimal(this.quantity)).round(2);
        if (!skipVat) {
            this.linePriceWithVat = this.linePrice.add(this.vatPrice).round(2);
        }
    };
    Object.defineProperty(DocumentItem.prototype, "json", {
        get: function () {
            return {
                id: this.id,
                index: this.index,
                name: this.name,
                code: this.code,
                unit: this.unit,
                quantity: this.quantity,
                price: this.price.round(3).getValue(),
                unitPriceWithVat: this.unitPriceWithVat.round(3).getValue(),
                vatPrice: this.vatPrice.round(2).getValue(),
                linePrice: this.linePrice.round(2).getValue(),
                linePriceWithVat: this.linePriceWithVat.round(2).getValue(),
                currency: this.currency,
                vat: this.vat,
                vatTotalOnly: this.vatTotalOnly,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt,
                custom1: this.custom1,
                custom2: this.custom2,
                custom3: this.custom3,
                custom4: this.custom4
            };
        },
        enumerable: true,
        configurable: true
    });
    return DocumentItem;
}(BaseModel));
export default DocumentItem;
//# sourceMappingURL=document_item.js.map