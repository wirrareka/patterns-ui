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
    Object.defineProperty(Order.prototype, "itemsTotal", {
        get: function () {
            return this.items.reduce(function (total, item) { return total += item.linePrice; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "itemsTotalWithVat", {
        get: function () {
            return this.items.reduce(function (total, item) { return total += item.linePriceWithVat; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Order.prototype.recalculate = function () {
        _super.prototype.recalculate.call(this);
        this.returnCosts = this.returns.reduce(function (costs, next) { return costs += next.costs; }, 0);
    };
    return Order;
}(ItemDocument));
export default Order;
//# sourceMappingURL=order.js.map