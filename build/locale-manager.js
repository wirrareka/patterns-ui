import en from './locales/en';
import sk from './locales/sk';
var LocaleManager = /** @class */ (function () {
    function LocaleManager() {
        var _this = this;
        this.t = function (key) {
            return _this.locales[_this.locale][key];
        };
        this.tc = function (key, count) {
            var suffix = 'none';
            if (count === 1) {
                suffix = 'one';
            }
            else if (count > 1 && count < 5) {
                suffix = 'few';
            }
            else if (count >= 5) {
                suffix = 'many';
            }
            return _this.t(key + "." + suffix);
        };
        this.locale = 'en';
        this.locales = { en: en, sk: sk };
        this.t = this.t.bind(this);
        this.tc = this.tc.bind(this);
        this.setLocale = this.setLocale.bind(this);
    }
    LocaleManager.prototype.setLocale = function (code, locale) {
        if (this.locales[code]) {
            if (locale) {
                this.locales[code] = locale;
            }
            else {
                throw new Error('Patterns LocaleManager: setLocale called with code for unknown Locale object');
            }
        }
        this.locale = code;
    };
    return LocaleManager;
}());
export { LocaleManager };
export var localeManager = new LocaleManager();
export var t = localeManager.t;
export var tc = localeManager.tc;
//# sourceMappingURL=locale-manager.js.map