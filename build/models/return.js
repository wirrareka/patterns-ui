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
import { deserializeDate, deserializeString, deserializeNumber } from '../common';
var Return = /** @class */ (function (_super) {
    __extends(Return, _super);
    function Return(_data) {
        var _this = this;
        var data = _data || {};
        _this = _super.call(this, data) || this;
        _this.returnDate = deserializeDate(data.returnDate);
        _this.condition = deserializeString(data.condition);
        _this.costs = deserializeNumber(data.costs);
        _this.result = deserializeString(data.result);
        return _this;
    }
    return Return;
}(BaseModel));
export default Return;
//# sourceMappingURL=return.js.map