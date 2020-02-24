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
import { t } from '../locale_manager';
var PaymentMethod = /** @class */ (function (_super) {
    __extends(PaymentMethod, _super);
    function PaymentMethod(data) {
        var _this = _super.call(this, data) || this;
        _this.code = data.code;
        _this.title = data.title;
        return _this;
    }
    Object.defineProperty(PaymentMethod, "card", {
        get: function () {
            return new PaymentMethod({
                code: 'card',
                title: t('payment_methods.card')
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentMethod, "cash", {
        get: function () {
            return new PaymentMethod({
                code: 'cash',
                title: t('payment_methods.cash')
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentMethod, "cashOnDelivery", {
        get: function () {
            return new PaymentMethod({
                code: 'cash_on_delivery',
                title: t('payment_methods.cash_on_delivery')
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentMethod, "bankTransfer", {
        get: function () {
            return new PaymentMethod({
                code: 'bank_transfer',
                title: t('payment_methods.bank_transfer')
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentMethod, "paypal", {
        get: function () {
            return new PaymentMethod({
                code: 'bank_transfer',
                title: t('payment_methods.bank_transfer')
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentMethod, "all", {
        get: function () {
            return [
                PaymentMethod.card,
                PaymentMethod.cash,
                PaymentMethod.cashOnDelivery,
                PaymentMethod.bankTransfer,
                PaymentMethod.paypal
            ];
        },
        enumerable: true,
        configurable: true
    });
    return PaymentMethod;
}(BaseModel));
export default PaymentMethod;
//# sourceMappingURL=payment_method.js.map