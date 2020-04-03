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
import NamedItemDocument from './named_item_document';
import Return from './return';
import { deserializeNumber } from '../common';
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order(data) {
        var _this = _super.call(this, data) || this;
        _this.returns = (data.returns || []).map(function (item) { return new Return(item); });
        _this.returnCosts = deserializeNumber(data.returnCosts);
        return _this;
    }
    Order.prototype.recalculate = function () {
        _super.prototype.recalculate.call(this);
        this.returnCosts = this.returns.reduce(function (costs, next) { return costs += next.costs; }, 0);
    };
    Object.defineProperty(Order.prototype, "json", {
        get: function () {
            return __assign(__assign({}, this._json), { returns: this.returns, returnCosts: this.returnCosts });
        },
        enumerable: true,
        configurable: true
    });
    return Order;
}(NamedItemDocument));
export default Order;
//# sourceMappingURL=order.js.map