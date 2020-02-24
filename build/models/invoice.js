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
import ItemDocument from './item_document';
import { deserializeDate, deserializeString } from '../common';
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(_data) {
        var _this = this;
        var data = _data || {};
        _this = _super.call(this, data) || this;
        _this.dueDate = deserializeDate(data.dueDate);
        _this.paymentMethod = deserializeString(data.paymentMethod);
        return _this;
    }
    return Invoice;
}(ItemDocument));
export default Invoice;
//# sourceMappingURL=invoice.js.map