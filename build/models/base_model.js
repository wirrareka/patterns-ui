import cloneDeep from 'lodash.clonedeep';
import { deserializeDate } from '../common';
var BaseModel = /** @class */ (function () {
    function BaseModel(_data) {
        var data = _data || {};
        this.id = data.id;
        this.createdAt = deserializeDate(data.createdAt);
        this.updatedAt = deserializeDate(data.updatedAt);
    }
    Object.defineProperty(BaseModel.prototype, "exists", {
        get: function () {
            return typeof this.id === 'string' && this.id.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "clone", {
        get: function () {
            return cloneDeep(this);
        },
        enumerable: true,
        configurable: true
    });
    return BaseModel;
}());
export default BaseModel;
//# sourceMappingURL=base_model.js.map