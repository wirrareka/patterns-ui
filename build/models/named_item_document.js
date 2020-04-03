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
import { deserializeString } from '../common';
var NamedItemDocument = /** @class */ (function (_super) {
    __extends(NamedItemDocument, _super);
    function NamedItemDocument(data) {
        var _this = _super.call(this, data) || this;
        _this.name = deserializeString(data.name);
        return _this;
    }
    return NamedItemDocument;
}(ItemDocument));
export default NamedItemDocument;
//# sourceMappingURL=named_item_document.js.map