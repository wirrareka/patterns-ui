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
import NamedItemDocument from './item_document';
import { deserializeDate } from '../common';
var PriceQuote = /** @class */ (function (_super) {
    __extends(PriceQuote, _super);
    function PriceQuote(_data) {
        var _this = this;
        var data = _data || {};
        _this = _super.call(this, data) || this;
        _this.validTill = deserializeDate(data.validTill || data.createdAt);
        return _this;
    }
    return PriceQuote;
}(NamedItemDocument));
export default PriceQuote;
//# sourceMappingURL=price_quote.js.map