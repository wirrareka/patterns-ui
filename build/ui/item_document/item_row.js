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
import { FlexColumn as Column, FlexRow as Row } from '../../components';
import { ItemDocumentItemRow, ItemDocumentCurrency } from './components';
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
    var currency = _a.currency, item = _a.item, onChange = _a.onChange, showVat = _a.showVat;
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
        clone.price = value;
        clone.recalculate();
        onChange(clone);
    };
    var onLinePriceChange = function (value) {
        var clone = new DocumentItem(item);
        clone.linePrice = value;
        clone.price = value / clone.quantity;
        clone.recalculate();
        onChange(clone);
    };
    var onQuantityChange = function (value) {
        var clone = new DocumentItem(item);
        clone.quantity = value;
        clone.recalculate();
        onChange(clone);
    };
    var onVatChange = function (value) {
        var clone = new DocumentItem(item);
        clone.vat = value;
        clone.recalculate();
        onChange(clone);
    };
    return React.createElement(Column, { flex: 1 },
        React.createElement(ItemDocumentItemRow, { key: "invoice-item-" + item.index },
            React.createElement(Row, { flex: 6 },
                React.createElement(InputGroup, { fill: true, placeholder: t('edit'), value: item.name, onChange: function (evt) { return onNameChange(evt.currentTarget.value); }, name: "name" })),
            React.createElement(Row, __assign({}, rightRowProps, { flex: 3 }),
                React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: t('edit'), value: item.price, onValueChange: onPriceChange }),
                React.createElement(ItemDocumentCurrency, null, currency.symbol)),
            React.createElement(Row, __assign({}, rightRowProps),
                React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: t('edit'), value: item.quantity, onValueChange: onQuantityChange }),
                React.createElement(ItemDocumentCurrency, null, item.unit || 'ks')),
            React.createElement(Row, __assign({}, rightRowProps, { flex: 3 }),
                React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: t('edit'), value: item.linePrice, onValueChange: onLinePriceChange }),
                React.createElement(ItemDocumentCurrency, null, currency.symbol)),
            showVat &&
                React.createElement(React.Fragment, null,
                    React.createElement(Row, __assign({}, rightRowProps, { flex: 2 }),
                        React.createElement(NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: t('edit'), value: item.vat, onValueChange: onVatChange }),
                        React.createElement(ItemDocumentCurrency, null, "%")),
                    React.createElement(Row, __assign({}, rightRowProps, { flex: 2 }),
                        React.createElement(EditableText, { disabled: true, className: "align-right", placeholder: t('edit'), value: "" + PatternApp.settings.format.price(item.vatPrice) }),
                        React.createElement(ItemDocumentCurrency, null, currency.symbol)),
                    React.createElement(Row, __assign({}, rightRowProps, { flex: 3 }),
                        React.createElement(EditableText, { disabled: true, className: "align-right", placeholder: t('edit'), value: "" + PatternApp.settings.format.price(item.linePriceWithVat) }),
                        React.createElement(ItemDocumentCurrency, null, currency.symbol)))),
        React.createElement(ItemDocumentItemRow, { key: "invoice-item-code-" + item.index },
            React.createElement(Row, { flex: 5 },
                React.createElement(InputGroup, { fill: true, placeholder: t('edit_code'), value: item.code, onChange: function (evt) { return onCodeChange(evt.currentTarget.value); }, name: "code" })),
            React.createElement(Row, { flex: 12 })));
}
//# sourceMappingURL=item_row.js.map