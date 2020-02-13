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
import { EditableText, InputGroup, NumericInput } from '@blueprintjs/core';
import { FlexRow as Row } from '../components';
import { InvoiceItemRow, InvoiceCurrency } from './components';
import InvoiceItem from '../models/invoice-item';
var rightAlign = {
    textAlign: 'right',
    justifyContent: 'flex-end'
};
export default function InvoiceItemView(_a) {
    var item = _a.item, onChange = _a.onChange;
    var onNameChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.item_name = value;
        onChange(clone);
    };
    var onPriceChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.unit_price = value;
        clone.recalculate();
        onChange(clone);
    };
    var onLinePriceChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.line_price = value;
        clone.unit_price = value / clone.quantity;
        clone.recalculate();
        onChange(clone);
    };
    var onQuantityChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.quantity = value;
        clone.recalculate();
        onChange(clone);
    };
    var onVatChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.vat = value;
        clone.recalculate();
        onChange(clone);
    };
    return React.createElement(InvoiceItemRow, { key: "invoice-item-" + item.index },
        React.createElement(Row, { flex: 2, style: { textAlign: 'left', fontSize: 14 } },
            React.createElement(InputGroup, { fill: true, placeholder: "Editova\u0165", value: item.item_name, onChange: function (evt) { return onNameChange(evt.currentTarget.value); }, name: "name" })),
        React.createElement(Row, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: "Editova\u0165", value: item.unit_price, onValueChange: onPriceChange }),
            React.createElement(InvoiceCurrency, null, "EUR")),
        React.createElement(Row, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: "Editova\u0165", value: item.quantity, onValueChange: onQuantityChange }),
            React.createElement(InvoiceCurrency, null, item.unit_code || 'ks')),
        React.createElement(Row, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: "Editova\u0165", value: item.line_price, onValueChange: onLinePriceChange }),
            React.createElement(InvoiceCurrency, null, "EUR")),
        React.createElement(Row, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: "Editova\u0165", value: item.vat, onValueChange: onVatChange }),
            React.createElement(InvoiceCurrency, null, "%")),
        React.createElement(Row, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React.createElement(EditableText, { className: "align-right", placeholder: "Editova\u0165", value: "" + item.vat_price.toFixed(2) }),
            React.createElement(InvoiceCurrency, null, "EUR")),
        React.createElement(Row, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React.createElement(EditableText, { className: "align-right", placeholder: "Editova\u0165", value: "" + item.price_with_vat.toFixed(2) }),
            React.createElement(InvoiceCurrency, null, "EUR")));
}
//# sourceMappingURL=item.js.map