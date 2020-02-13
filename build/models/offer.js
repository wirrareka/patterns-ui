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
import Invoice from './invoice';
var Offer = /** @class */ (function (_super) {
    __extends(Offer, _super);
    function Offer(data) {
        var _this = _super.call(this, data) || this;
        _this.validTill = data.validTill ? new Date(data.validTill) : new Date(_this.createdAt);
        return _this;
    }
    return Offer;
}(Invoice));
export default Offer;
//# sourceMappingURL=offer.js.map