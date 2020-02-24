import { Currency, Contact, PaymentMethod } from './models';
import { formatDate, parseDate, formatPrice } from './common';
var PatternApp = /** @class */ (function () {
    function PatternApp() {
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
    return PatternApp;
}());
export { PatternApp };
var instance = new PatternApp();
export default instance;
//# sourceMappingURL=pattern_app.js.map