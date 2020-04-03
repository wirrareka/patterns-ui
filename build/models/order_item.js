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
var OrderItem = /** @class */ (function (_super) {
    __extends(OrderItem, _super);
    function OrderItem(data) {
        var _this = _super.call(this, data) || this;
        _this.name = data.name || '';
        _this.code = data.code || '';
        _this.quantity = data.quantity || 0;
        _this.unitPriceWithVat = new bigDecimal(data.unitPriceWithVat);
        _this.linePrice = new bigDecimal(data.linePrice);
        _this.linePriceWithVat = new bigDecimal(data.linePriceWithVat);
        _this.price = new bigDecimal(data.price);
        _this.currency = data.currency;
        _this.vat = data.vat;
        _this.unit = data.unit;
        _this.index = data.index;
        return _this;
    }
    return OrderItem;
}(BaseModel));
export default OrderItem;
//# sourceMappingURL=order_item.js.map