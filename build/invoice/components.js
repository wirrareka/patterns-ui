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
import React from 'react';
export var Wrapper = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-wrapper', style: style }, children);
};
export var Page = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-page', style: style }, children);
};
export var Header = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-header', style: style }, children);
};
export var Logo = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-logo', style: style }, children);
};
export var HeaderCode = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-header-code', style: style }, children);
};
export var DocumentType = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-type', style: style }, children);
};
export var InvoiceItemRow = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-item-row', style: style }, children);
};
export var InvoiceCurrency = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-currency', style: style }, children);
};
export var InvoiceTableHeader = function (_a) {
    var children = _a.children, style = _a.style, align = _a.align;
    return React.createElement('div', { className: 'patterns-invoice-table-header', style: __assign(__assign({}, style), { textAlign: align }) }, children);
};
export var InvoiceItemsHeaderRow = function (_a) {
    var children = _a.children, style = _a.style, flex = _a.flex;
    return React.createElement('div', { className: 'patterns-invoice-table-header-row', style: __assign(__assign({}, style), { flex: flex }) }, children);
};
export var InvoiceItemsContainer = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-items', style: style }, children);
};
export var AddressBoxContainer = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-address-box', style: style }, children);
};
export var AddressBoxHeader = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-address-box-header', style: style }, children);
};
export var AddressBoxName = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-address-box-name', style: style }, children);
};
export var AddressBoxOther = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-address-box-other', style: style }, children);
};
export var AddressBoxVatLabel = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-address-box-vat-label', style: style }, children);
};
export var AddressBoxVatValue = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-invoice-address-box-vat-value', style: style }, children);
};
//# sourceMappingURL=components.js.map