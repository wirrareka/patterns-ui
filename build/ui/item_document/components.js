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
    return React.createElement('div', { className: 'patterns-item_document-wrapper', style: style }, children);
};
export var Page = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-page', style: style }, children);
};
export var Header = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-header', style: style }, children);
};
export var Logo = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-logo', style: style }, children);
};
export var HeaderCode = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-header-code', style: style }, children);
};
export var DocumentType = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-type', style: style }, children);
};
export var ItemDocumentItemRow = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-item-row', style: style }, children);
};
export var ItemDocumentCurrency = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-currency', style: style }, children);
};
export var ItemDocumentTableHeader = function (_a) {
    var children = _a.children, style = _a.style, align = _a.align;
    return React.createElement('div', { className: 'patterns-item_document-table-header', style: __assign(__assign({}, style), { textAlign: align }) }, children);
};
export var ItemDocumentItemsHeaderRow = function (_a) {
    var children = _a.children, style = _a.style, flex = _a.flex;
    return React.createElement('div', { className: 'patterns-item_document-table-header-row', style: __assign(__assign({}, style), { flex: flex }) }, children);
};
export var ItemDocumentItemsContainer = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-items', style: style }, children);
};
export var AddressBoxContainer = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-address-box', style: style }, children);
};
export var AddressBoxHeader = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-address-box-header', style: style }, children);
};
export var AddressBoxName = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-address-box-name', style: style }, children);
};
export var AddressBoxOther = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-address-box-other', style: style }, children);
};
export var AddressBoxVatLabel = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-address-box-vat-label', style: style }, children);
};
export var AddressBoxVatValue = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-item_document-address-box-vat-value', style: style }, children);
};
//# sourceMappingURL=components.js.map