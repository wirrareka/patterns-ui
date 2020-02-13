import React from 'react';
import { Button, ButtonGroup, Popover, PopoverInteractionKind, PopoverPosition } from '@blueprintjs/core';
import Invoice from '../models/invoice';
import { FlexColumn as Column } from '../components';
import { InvoiceTableHeader, InvoiceItemsContainer, InvoiceItemsHeaderRow } from './components';
import InvoiceItemView from './item';
export default function InvoiceItems(_a) {
    var invoice = _a.invoice, onChange = _a.onChange;
    var change = function (item) {
        var clone = new Invoice(invoice);
        clone.items.splice(item.index, 1, item);
        onChange(clone);
    };
    var trash = function (item) {
        var clone = new Invoice(invoice);
        clone.items.splice(item.index, 1);
        onChange(clone);
    };
    var duplicate = function (item) {
        var clone = new Invoice(invoice);
        clone.items.splice(item.index, 0, item.clone);
        clone.items.forEach(function (item, index) { return item.index = index; });
        onChange(clone);
    };
    return React.createElement(InvoiceItemsContainer, null,
        React.createElement(InvoiceItemsHeaderRow, null,
            React.createElement(Column, { flex: 2 },
                React.createElement(InvoiceTableHeader, null, "N\u00C1ZOV")),
            React.createElement(Column, { flex: 1 },
                React.createElement(InvoiceTableHeader, { align: "right" }, "JEDN. CENA BEZ DPH")),
            React.createElement(Column, { flex: 1 },
                React.createElement(InvoiceTableHeader, { align: "right" }, "MNO\u017DSTVO")),
            React.createElement(Column, { flex: 1 },
                React.createElement(InvoiceTableHeader, { align: "right" }, "CELKOM BEZ DPH")),
            React.createElement(Column, { flex: 1 },
                React.createElement(InvoiceTableHeader, { align: "right" }, "DPH")),
            React.createElement(Column, { flex: 1 },
                React.createElement(InvoiceTableHeader, { align: "right" }, "HODNOTA DPH")),
            React.createElement(Column, { flex: 1 },
                React.createElement(InvoiceTableHeader, { align: "right" }, "HODNOTA S DPH"))),
        invoice.items.map(function (item, index) { return React.createElement("div", { key: "invoice-item-" + index, style: { flex: 1 } },
            React.createElement(Popover, { key: "invoice-item-" + index, interactionKind: PopoverInteractionKind.HOVER, position: PopoverPosition.RIGHT },
                React.createElement(InvoiceItemView, { item: item, onChange: function (item) { return change(item); } }),
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { minimal: true, intent: "danger", icon: "trash", onClick: function () { return trash(item); } }),
                    React.createElement(Button, { minimal: true, intent: "none", icon: "duplicate", onClick: function () { return duplicate(item); } })))); }));
}
//# sourceMappingURL=items.js.map