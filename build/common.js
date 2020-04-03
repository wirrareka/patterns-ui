import moment from 'moment';
export var DEFAULT_HOUR = 3;
export var DAY_MS = 1000 * 3600 * 24;
export var DateFormat = 'DD.MM.YYYY';
export var DateTimeFormat = 'DD.MM.YYYY HH:mm';
export var TimeFormat = 'hh:mm';
export var deserializeDate = function (date) { return date ? new Date(date) : new Date(); };
export var deserializeNumber = function (number) { return number || 0; };
export var deserializeString = function (string) { return string || ''; };
export var today = function () {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), DEFAULT_HOUR, 0);
};
export var yesterday = function () {
    var now = today();
    return new Date(now.getTime() - DAY_MS);
};
export var weekAgo = function () {
    var now = today();
    return new Date(now.getTime() - (7 * DAY_MS));
};
export var tommorow = function () {
    var now = today();
    return new Date(now.getTime() + DAY_MS);
};
export var formatDate = function (date) {
    return moment(date).format(DateFormat);
};
export var parseDate = function (date) {
    return moment(date || new Date(1).toISOString(), DateFormat).toDate();
};
export var formatTime = function (date) {
    return moment(date).format(TimeFormat);
};
export var formatDateTime = function (date) {
    return moment(date).format(DateTimeFormat);
};
export var formatPrice = function (price, currency) {
    var elements = [];
    if (typeof price === 'number') {
        elements.push((price || 0).toFixed(2));
    }
    else if (typeof price === 'string') {
        elements.push((parseFloat(price)).toFixed(2));
    }
    else {
        elements.push(price.round(2).getValue());
    }
    if (currency) {
        elements.push(currency.symbol);
    }
    return elements.join(' ');
};
export var hasString = function (string, minLength) {
    if (minLength === void 0) { minLength = 1; }
    return string.length >= minLength;
};
export var hasStrings = function (strings, minLength) {
    if (minLength === void 0) { minLength = 1; }
    var valid = true;
    for (var i = 0; i < strings.length; i++) {
        if (!hasString(strings[i])) {
            valid = false;
            break;
        }
    }
    return valid;
};
//# sourceMappingURL=common.js.map