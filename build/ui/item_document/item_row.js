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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import { EditableText, InputGroup, NumericInput } from '@blueprintjs/core';
import { FlexColumn as Column, FlexRow as Row } from '../../components';
import { ItemDocumentItemRow, ItemDocumentCurrency } from './components';
import bigDecimal from 'js-big-decimal';
import DocumentItem from '../../models/document_item';
import PatternApp from '../../pattern_app';
import { t } from '../../locale_manager';
var rightAlign = {
    textAlign: 'right',
    justifyContent: 'flex-end'
};
var rightRowProps = {
    flex: 2,
    style: __assign(__assign({}, rightAlign), { alignItems: 'center' })
};
export default function InvoiceItemView(_a) {
    var _this = this;
    var currency = _a.currency, editableCode = _a.editableCode, item = _a.item, onChange = _a.onChange, showVat = _a.showVat, _b = _a.free, free = _b === void 0 ? false : _b;
    var onCustomChange = function (value, field) {
        var clone = new DocumentItem(item.clone);
        clone[field] = value;
        onChange(clone);
    };
    var onCodeChange = function (value) {
        var clone = new DocumentItem(item.clone);
        clone.code = value;
        onChange(clone);
    };
    var onNameChange = function (value) {
        var clone = new DocumentItem(item.clone);
        clone.name = value;
        onChange(clone);
    };
    var onPriceChange = function (value) {
        var clone = new DocumentItem(item.clone);
        clone.price = new bigDecimal(value);
        clone.recalculate();
        onChange(clone);
        console.log('price changed', clone);
    };
    var onPriceWithVatChange = function (value) {
        item.unitPriceWithVat = new bigDecimal(value);
        console.log('priceWithVatChange', value, item.unitPriceWithVat);
        var price = item.unitPriceWithVat.divide(new bigDecimal((item.vat / 100) + 1), 3);
        console.log('price with vat changed', price);
        onPriceChange(parseFloat(price.getValue()));
        // onLinePriceWithVatChange(parseFloat(price.getValue()) * item.quantity)
        // clone.recalculate()
        // onChange(clone)
    };
    var onLinePriceChange = function (value, valueString, skipVat, totalWithVat) {
        if (skipVat === void 0) { skipVat = false; }
        var bigValue = new bigDecimal(value);
        var clone = new DocumentItem(item);
        clone.linePrice = new bigDecimal(value).round(2);
        if (clone.quantity > 0) {
            clone.price = bigValue.divide(new bigDecimal(clone.quantity), 3);
        }
        if (totalWithVat) {
            clone.linePriceWithVat = totalWithVat;
        }
        clone.unitPriceWithVat = clone.price.multiply(new bigDecimal(clone.vat / 100 + 1)).round(2);
        clone.recalculate(skipVat);
        onChange(clone);
    };
    var onQuantityChange = function (value) {
        var clone = new DocumentItem(item);
        clone.quantity = value;
        clone.recalculate();
        if (clone.quantity > 0) {
            clone.price = clone.linePrice.divide(new bigDecimal(clone.quantity), 3);
        }
        onChange(clone);
    };
    var onVatChange = function (value) {
        var clone = new DocumentItem(item);
        clone.vat = value;
        clone.recalculate();
        onChange(clone);
    };
    var onLinePriceWithVatChange = function (value) { return __awaiter(_this, void 0, void 0, function () {
        var bigValue, linePrice;
        return __generator(this, function (_a) {
            bigValue = new bigDecimal(value);
            linePrice = bigValue.divide(new bigDecimal(item.vat / 100 + 1), 6).round(2);
            onLinePriceChange(parseFloat(linePrice.getValue()), linePrice.getValue(), true, bigValue);
            return [2 /*return*/];
        });
    }); };
    console.log('row with free', free);
    return React.createElement(Column, { flex: 1 },
        React.createElement(ItemDocumentItemRow, { key: "invoice-item-" + item.index },
            React.createElement(Row, { flex: 6 },
                React.createElement(InputGroup, { fill: true, placeholder: t('edit'), value: item.name, onChange: function (evt) { return onNameChange(evt.currentTarget.value); }, name: "name" })),
            !free && React.createElement(React.Fragment, null,
                React.createElement(Row, __assign({}, rightRowProps, { flex: 2 }),
                    React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right " + (item.vatTotalOnly ? 'faded' : ''), placeholder: t('edit'), value: item.price.getValue(), onValueChange: onPriceChange, disabled: item.vatTotalOnly }),
                    React.createElement(ItemDocumentCurrency, { style: { opacity: item.vatTotalOnly ? 0.15 : 1 } }, currency.symbol)),
                React.createElement(Row, __assign({}, rightRowProps, { flex: 2 }),
                    React.createElement(NumericInput, { fill: true, buttonPosition: "none", placeholder: t('edit'), value: item.unitPriceWithVat.getValue(), onValueChange: onPriceWithVatChange }),
                    React.createElement(ItemDocumentCurrency, { style: { opacity: item.vatTotalOnly ? 0.15 : 1 } }, currency.symbol)),
                React.createElement(Row, __assign({}, rightRowProps),
                    React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: t('edit'), value: item.quantity, onValueChange: onQuantityChange }),
                    React.createElement(ItemDocumentCurrency, null, item.unit || 'ks')),
                React.createElement(Row, __assign({}, rightRowProps, { flex: 3 }),
                    React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right " + (item.vatTotalOnly ? 'faded' : ''), placeholder: t('edit'), value: item.linePrice.getValue(), onValueChange: onLinePriceChange, disabled: item.vatTotalOnly }),
                    React.createElement(ItemDocumentCurrency, { style: { opacity: item.vatTotalOnly ? 0.15 : 1 } }, currency.symbol))),
            !free && showVat &&
                React.createElement(React.Fragment, null,
                    React.createElement(Row, __assign({}, rightRowProps, { flex: 2 }),
                        React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right " + (item.vatTotalOnly ? 'faded' : ''), placeholder: t('edit'), value: item.vat, onValueChange: onVatChange, disabled: item.vatTotalOnly }),
                        React.createElement(ItemDocumentCurrency, { style: { opacity: item.vatTotalOnly ? 0.15 : 1 } }, "%")),
                    React.createElement(Row, __assign({}, rightRowProps, { flex: 2 }),
                        React.createElement(EditableText, { disabled: true, className: "align-right " + (item.vatTotalOnly ? 'faded' : ''), placeholder: t('edit'), value: "" + PatternApp.settings.format.price(parseFloat(item.vatPrice.getValue())) }),
                        React.createElement(ItemDocumentCurrency, { style: { opacity: item.vatTotalOnly ? 0.15 : 1 } }, currency.symbol))),
            free && React.createElement(React.Fragment, null,
                React.createElement(Row, __assign({}, rightRowProps, { flex: 2 }),
                    React.createElement(InputGroup, { fill: true, placeholder: t('edit'), value: item.custom1, onChange: function (evt) { return onCustomChange(evt.currentTarget.value, 'custom1'); } })),
                React.createElement(Row, { flex: 3 },
                    React.createElement(InputGroup, { fill: true, placeholder: t('edit'), value: item.custom2, onChange: function (evt) { return onCustomChange(evt.currentTarget.value, 'custom2'); } })),
                React.createElement(Row, __assign({}, rightRowProps, { flex: 2 }),
                    React.createElement(InputGroup, { fill: true, placeholder: t('edit'), value: item.custom3, onChange: function (evt) { return onCustomChange(evt.currentTarget.value, 'custom3'); } })),
                React.createElement(Row, __assign({}, rightRowProps),
                    React.createElement(InputGroup, { fill: true, className: "align-right", placeholder: t('edit'), value: item.custom4, onChange: function (evt) { return onCustomChange(evt.currentTarget.value, 'custom4'); } }))),
            React.createElement(Row, __assign({}, rightRowProps, { flex: 3 }),
                React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: t('edit'), value: item.linePriceWithVat.getValue(), onValueChange: onLinePriceWithVatChange }),
                React.createElement(ItemDocumentCurrency, null, currency.symbol))),
        editableCode && React.createElement(ItemDocumentItemRow, { key: "invoice-item-code-" + item.index },
            React.createElement(Row, { flex: 5 },
                React.createElement(InputGroup, { fill: true, placeholder: t('edit_code'), value: item.code, onChange: function (evt) { return onCodeChange(evt.currentTarget.value); }, name: "code" })),
            React.createElement(Row, { flex: 12 })));
}
//# sourceMappingURL=item_row.js.map