var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createElement } from 'react';
export var Container = function (_a) {
    var children = _a.children, style = _a.style;
    return createElement('div', { className: 'patterns-data-table', style: style }, children);
};
export var FlexRow = function (_a) {
    var children = _a.children, flex = _a.flex, style = _a.style, className = _a.className;
    return createElement('div', { className: "patterns-flex-row " + className, style: __assign(__assign({}, style), { flex: flex }) }, children);
};
export var FlexColumn = function (_a) {
    var children = _a.children, flex = _a.flex, style = _a.style, className = _a.className;
    return createElement('div', { className: "patterns-flex-column " + className, style: __assign(__assign({}, style), { flex: flex }) }, children);
};
export var Toolbar = function (_a) {
    var children = _a.children, style = _a.style;
    return createElement('div', { className: 'patterns-toolbar', style: style }, children);
};
//# sourceMappingURL=components.js.map