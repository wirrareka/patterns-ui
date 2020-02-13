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
import BaseModel from "./base_model";
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(data) {
        var _this = _super.call(this, data) || this;
        _this.name = data.name || '';
        _this.street = data.street || '';
        _this.street2 = data.street2 || '';
        _this.zip = data.zip || '';
        _this.city = data.city || '';
        _this.country = data.country || '';
        _this.email = data.email || '';
        _this.phone = data.phone || '';
        _this.site = data.site || '';
        _this.business_id = data.business_id || '';
        _this.vat_id = data.vat_id || '';
        _this.vat_payer_id = data.vat_payer_id || '';
        _this.isActive = data.isActive || '';
        _this.note = data.note || '';
        _this.firstName = data.firstName || '';
        _this.lastName = data.lastName || '';
        _this.fullName = data.fullName || [data.firstName, data.lastName].filter(function (f) { return f && f.length > 0; }).join(' ');
        return _this;
    }
    return Contact;
}(BaseModel));
export default Contact;
//# sourceMappingURL=contact.js.map