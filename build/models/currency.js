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
var Currency = /** @class */ (function (_super) {
    __extends(Currency, _super);
    function Currency(data) {
        var _this = _super.call(this, data) || this;
        _this.name = data.name;
        _this.symbol = data.symbol;
        return _this;
    }
    return Currency;
}(BaseModel));
export default Currency;
//# sourceMappingURL=currency.js.map