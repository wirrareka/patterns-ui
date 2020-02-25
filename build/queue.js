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
import PromiseQueue from 'promise-queue';
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue(maxConcurrent) {
        if (maxConcurrent === void 0) { maxConcurrent = 1; }
        return _super.call(this, maxConcurrent, Infinity) || this;
    }
    Object.defineProperty(Queue.prototype, "isDone", {
        get: function () {
            return this.getPendingLength() === 0 && this.getQueueLength() === 0;
        },
        enumerable: true,
        configurable: true
    });
    return Queue;
}(PromiseQueue));
export default Queue;
//# sourceMappingURL=queue.js.map