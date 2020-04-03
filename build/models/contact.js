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
import { deserializeString } from "../common";
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(_data) {
        var _this = this;
        var data = _data || {};
        _this = _super.call(this, data) || this;
        _this.name = deserializeString(data.name);
        _this.street = deserializeString(data.street);
        _this.street2 = deserializeString(data.street2);
        _this.zip = deserializeString(data.zip);
        _this.city = deserializeString(data.city);
        _this.country = deserializeString(data.country);
        _this.email = deserializeString(data.email);
        _this.phone = deserializeString(data.phone);
        _this.site = deserializeString(data.site);
        _this.isActive = data.isActive || false;
        _this.note = deserializeString(data.note);
        _this.firstName = deserializeString(data.firstName);
        _this.lastName = deserializeString(data.lastName);
        // VatAddressable
        _this.businessId = deserializeString(data.businessId);
        _this.vatId = deserializeString(data.vatId);
        _this.vatPayerId = deserializeString(data.vatPayerId);
        return _this;
    }
    Contact.prototype.getName = function () {
        return this.name || this.fullName;
    };
    Object.defineProperty(Contact.prototype, "fullName", {
        get: function () {
            return [this.firstName, this.lastName].filter(function (f) { return f && f.length > 0; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
}(BaseModel));
export default Contact;
//# sourceMappingURL=contact.js.map