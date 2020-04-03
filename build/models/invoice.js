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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        _this.isSent = data.isSent || false;
        _this.isPaid = data.isPaid || false;
        return _this;
    }
    Object.defineProperty(Invoice.prototype, "json", {
        get: function () {
            return __assign(__assign({}, this._json), { dueDate: this.dueDate, paymentMethod: this.paymentMethod, isPaid: this.isPaid, isSent: this.isSent });
        },
        enumerable: true,
        configurable: true
    });
    return Invoice;
}(ItemDocument));
export default Invoice;
//# sourceMappingURL=invoice.js.map