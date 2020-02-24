var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { Button, ButtonGroup, Popover, PopoverInteractionKind, PopoverPosition } from '@blueprintjs/core';
import { FlexColumn as Column } from '../../components';
import { ItemDocumentTableHeader, ItemDocumentItemsContainer, ItemDocumentItemsHeaderRow } from './components';
import ItemRow from './item_row';
import DocumentItem from '../../models/document_item';
import { t } from '../../locale_manager';
import PatternApp from '../../pattern_app';
var DocumentItemsView = /** @class */ (function (_super) {
    __extends(DocumentItemsView, _super);
    function DocumentItemsView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.change = _this.change.bind(_this);
        return _this;
    }
    DocumentItemsView.ofType = function () {
        return DocumentItemsView;
    };
    DocumentItemsView.prototype.change = function (item) {
        var items = this.props.document.items.map(function (item) { return new DocumentItem(item.clone); });
        items.splice(item.index, 1, item);
        this.props.onChange(items);
    };
    DocumentItemsView.prototype.trash = function (item) {
        var items = this.props.document.items.map(function (item) { return new DocumentItem(item.clone); });
        items.splice(item.index, 1);
        this.props.onChange(items);
    };
    DocumentItemsView.prototype.duplicate = function (item) {
        var items = this.props.document.items.map(function (item) { return new DocumentItem(item.clone); });
        items.splice(item.index, 0, item.clone);
        items.forEach(function (item, index) { return item.index = index; });
        this.props.onChange(items);
    };
    DocumentItemsView.prototype.renderItems = function () {
        var _this = this;
        var currency = PatternApp.getCurrency(this.props.document.currency);
        return this.props.document.items.map(function (item, index) {
            return React.createElement("div", { key: "item-document-item-" + index, style: { flex: 1 } },
                React.createElement(Popover, { key: "document-item-popover-" + index, interactionKind: PopoverInteractionKind.HOVER, position: PopoverPosition.RIGHT },
                    React.createElement(ItemRow, { currency: currency, item: item, onChange: _this.change, showVat: _this.props.showVat }),
                    React.createElement(ButtonGroup, null,
                        React.createElement(Button, { minimal: true, intent: "danger", icon: "trash", onClick: function () { return _this.trash(item); } }),
                        React.createElement(Button, { minimal: true, intent: "none", icon: "duplicate", onClick: function () { return _this.duplicate(item); } }))));
        });
    };
    DocumentItemsView.prototype.render = function () {
        return React.createElement(ItemDocumentItemsContainer, null,
            React.createElement(ItemDocumentItemsHeaderRow, null,
                React.createElement(Column, { flex: 4 },
                    React.createElement(ItemDocumentTableHeader, null, t('title'))),
                React.createElement(Column, { flex: 2 },
                    React.createElement(ItemDocumentTableHeader, { align: "right" }, t('unitPriceNoVat'))),
                React.createElement(Column, { flex: 2 },
                    React.createElement(ItemDocumentTableHeader, { align: "right" }, t('quantity'))),
                React.createElement(Column, { flex: 2 },
                    React.createElement(ItemDocumentTableHeader, { align: "right" }, t('linePriceNoVat'))),
                this.props.showVat &&
                    React.createElement(React.Fragment, null,
                        React.createElement(Column, { flex: 1 },
                            React.createElement(ItemDocumentTableHeader, { align: "right" }, t('vat'))),
                        React.createElement(Column, { flex: 1 },
                            React.createElement(ItemDocumentTableHeader, { align: "right" }, t('vatPrice'))),
                        React.createElement(Column, { flex: 2 },
                            React.createElement(ItemDocumentTableHeader, { align: "right" }, t('linePriceWithVat'))))),
            this.renderItems());
    };
    return DocumentItemsView;
}(React.Component));
export default DocumentItemsView;
//# sourceMappingURL=items.js.map