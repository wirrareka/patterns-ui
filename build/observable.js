var Observable = /** @class */ (function () {
    function Observable() {
        this._observers = [];
    }
    Observable.prototype.observe = function (observer) {
        this._observers.push(observer);
    };
    Observable.prototype.cancel = function (observer) {
        var index = this._observers.findIndex(function (o) { return o === observer; });
        if (index >= 0) {
            this._observers.splice(index, 1);
        }
    };
    Observable.prototype.notify = function (event, data) {
        var _this = this;
        this._observers.forEach(function (observer) { return observer(event, data, _this); });
    };
    return Observable;
}());
export default Observable;
//# sourceMappingURL=observable.js.map