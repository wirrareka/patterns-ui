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
import { deserializeString } from "../common";
import BaseModel from './base_model';
import Contact from './contact';
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(_data) {
        var _this = this;
        var data = _data || {};
        _this = _super.call(this, data) || this;
        _this.name = deserializeString(data.name);
        _this.email = deserializeString(data.email);
        _this.isActive = data.isActive || false;
        _this.color = deserializeString(data.color);
        _this.note = deserializeString(data.note);
        _this.role = deserializeString(data.role);
        _this.contact = new Contact(data.contact || {});
        return _this;
    }
    return User;
}(BaseModel));
export default User;
//# sourceMappingURL=user.js.map