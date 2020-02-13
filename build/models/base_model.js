import cloneDeep from 'lodash.clonedeep';
var BaseModel = /** @class */ (function () {
    function BaseModel(_data) {
        this.id = _data.id;
        this.createdAt = _data.createdAt ? new Date(_data.createdAt) : new Date();
        this.updatedAt = _data.updatedAt ? new Date(_data.updatedAt) : new Date();
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