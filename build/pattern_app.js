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
import { Currency, Contact, PaymentMethod } from './models';
import { formatDate, parseDate, formatPrice } from './common';
import Observable from "./observable";
var PatternApp = /** @class */ (function (_super) {
    __extends(PatternApp, _super);
    function PatternApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Events = {
            Confirm: 'confirm',
            Success: 'notify-success',
            Failure: 'notify-failure'
        };
        return _this;
    }
    PatternApp.prototype.configure = function (settings) {
        var defaults = {
            name: '',
            logo: '',
            bank: {
                name: '',
                code: '',
                swift: '',
                account: '',
            },
            company: new Contact({}),
            currency: {
                defaultCurrency: Currency.euro,
                currencies: [Currency.euro],
            },
            payment: {
                defaultMethod: PaymentMethod.bankTransfer,
                methods: [PaymentMethod.bankTransfer, PaymentMethod.cash],
            },
            format: {
                date: formatDate,
                parseDate: parseDate,
                price: formatPrice
            },
            orders: {
                showVat: true
            }
        };
        this.settings = Object.assign(defaults, settings);
    };
    Object.defineProperty(PatternApp.prototype, "format", {
        get: function () {
            return this.settings.format;
        },
        enumerable: true,
        configurable: true
    });
    PatternApp.prototype.getCurrency = function (code) {
        return this.settings.currency.currencies.find(function (c) { return c.code === code; }) ||
            this.settings.currency.defaultCurrency;
    };
    PatternApp.prototype.getPaymentMethod = function (code) {
        return this.settings.payment.methods.find(function (c) { return c.code === code; }) ||
            this.settings.payment.defaultMethod;
    };
    PatternApp.prototype.confirm = function (title, description, action, icon) {
        this.notify(this.Events.Confirm, { title: title, description: description, action: action, icon: icon });
    };
    PatternApp.prototype.success = function (message) {
        this.notify(this.Events.Confirm, { message: message });
    };
    PatternApp.prototype.failure = function (message) {
        this.notify(this.Events.Confirm, { message: message });
    };
    return PatternApp;
}(Observable));
export { PatternApp };
var instance = new PatternApp();
export default instance;
//# sourceMappingURL=pattern_app.js.map