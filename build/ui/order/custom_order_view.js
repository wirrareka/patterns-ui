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
import React, { Component } from 'react';
import { Button, FormGroup, InputGroup, MenuItem, TextArea, ControlGroup } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import { Select } from '@blueprintjs/select';
import '../item_document/item_document.scss';
import PatternApp from '../../pattern_app';
import { Wrapper, Page, Header, Logo, HeaderCode, DocumentType } from '../item_document/components';
import { t } from '../../locale_manager';
import { Contact, DocumentItem, Order, PaymentMethod } from '../../models';
import { FlexColumn as Column, FlexRow as Row } from '../../components';
import ItemsView from '../item_document/items';
import ContactForm from '../item_document/contact_form';
import SimplerContactForm from '../item_document/simpler_contact_form';
var PaymentMethodSelect = Select.ofType();
var OrderItemsView = ItemsView.ofType();
var NamedSelect = Select.ofType();
var CustomOrderView = /** @class */ (function (_super) {
    __extends(CustomOrderView, _super);
    function CustomOrderView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            people: [],
            query: ''
        };
        return _this;
    }
    CustomOrderView.prototype.renderVatRecap = function (currency) {
        var header = this.props.document.vats.length > 0 ?
            React.createElement(Row, { flex: 1, style: { paddingTop: 24 } },
                React.createElement(Column, { flex: 11 }),
                React.createElement(Column, { flex: 3, className: "patterns-item-document-header-column" }, t('vatRecap')),
                React.createElement(Column, { flex: 2, className: "patterns-item-document-header-column bordered" }, t('vat')),
                React.createElement(Column, { flex: 2, className: "patterns-item-document-header-column bordered" }, t('vatBase')),
                React.createElement(Column, { flex: 3, className: "patterns-item-document-header-column bordered" }, t('vatValue')))
            :
                null;
        var rows = this.props.document.vats.map(function (vat, index) {
            return React.createElement(Row, { key: "invoice-vat-" + index, flex: 1, style: { height: 24, alignItems: 'center' } },
                React.createElement(Column, { flex: 14 }),
                React.createElement(Column, { style: { textAlign: 'right' }, flex: 2 },
                    vat.vat,
                    " %"),
                React.createElement(Column, { style: { textAlign: 'right' }, flex: 2 }, PatternApp.format.price(vat.base, currency)),
                React.createElement(Column, { style: { textAlign: 'right' }, flex: 3 }, PatternApp.format.price(vat.price, currency)));
        });
        return React.createElement(React.Fragment, null,
            header,
            rows);
    };
    CustomOrderView.prototype.renderTotal = function (currency) {
        return React.createElement(React.Fragment, null,
            React.createElement(Row, { flex: 1, style: { alignItems: 'center' } },
                React.createElement(Column, { flex: 11 }),
                React.createElement(Column, { flex: 3, className: "patterns-item-document-header-column" }, "CENA MATERI\u00C1L"),
                React.createElement(Column, { flex: 3, className: "patterns-item-document-total" }, PatternApp.format.price(parseFloat(this.props.document.itemsPrice().getValue()) / 1.2, currency)),
                React.createElement(Column, { flex: 4, className: "patterns-item-document-total" }, PatternApp.format.price(parseFloat(this.props.document.itemsPrice().getValue()), currency))),
            React.createElement(Row, { flex: 1, style: { alignItems: 'center' } },
                React.createElement(Column, { flex: 11 }),
                React.createElement(Column, { flex: 3, className: "patterns-item-document-header-column" }, "CENA PR\u00C1CA"),
                React.createElement(Column, { flex: 3, className: "patterns-item-document-total" }, PatternApp.format.price(parseFloat(this.props.document.workPrice().getValue()) / 1.2, currency)),
                React.createElement(Column, { flex: 4, className: "patterns-item-document-total" }, PatternApp.format.price(parseFloat(this.props.document.workPrice().getValue()), currency))),
            React.createElement(Row, { flex: 1, style: { alignItems: 'center' } },
                React.createElement(Column, { flex: 11 }),
                React.createElement(Column, { flex: 3, className: "patterns-item-document-header-column" }, "CENA SPOLU"),
                React.createElement(Column, { flex: 3, className: "patterns-item-document-total" }, PatternApp.format.price(this.props.document.itemsTotal, currency)),
                React.createElement(Column, { flex: 4, className: "patterns-item-document-total" }, PatternApp.format.price(this.props.document.itemsTotalWithVat, currency))));
    };
    CustomOrderView.prototype.render = function () {
        var _this = this;
        var paymentMethod = PatternApp.getPaymentMethod(this.props.document.paymentMethod);
        var currency = PatternApp.getCurrency(this.props.document.currency);
        return React.createElement(Wrapper, null,
            React.createElement(Page, null,
                React.createElement(Header, null,
                    React.createElement(Logo, null, this.props.logo && React.createElement("img", { alt: "logo", src: this.props.logo })),
                    React.createElement(Column, { flex: 4, style: { flex: 4 } },
                        React.createElement(HeaderCode, null,
                            React.createElement("div", { className: "patterns-item_document-header-name" }, this.props.document.exists ? this.props.document.code : 'Nová objednávka')),
                        React.createElement(DocumentType, null, t('order.type')))),
                React.createElement(Row, { style: { alignItems: 'flex-start' } },
                    React.createElement(Column, { flex: 1, style: { height: '100%', marginRight: 30 } }, "Obchodny\u0301 register OS Trnava Oddiel Sro, vloz\u030Cka c\u030C. 34375/T"),
                    React.createElement(ContactForm, { key: "address-vendor", disabled: true, header: t('vendor'), contact: this.props.document.vendor, onChange: function (property, value) {
                            var contact = new Contact(_this.props.document.vendor.clone);
                            contact[property] = value;
                            _this.props.onChange('vendor', contact);
                        }, onReplace: function (contactable) { return _this.props.onChange('vendor', contactable); }, fetch: this.props.fetch }),
                    React.createElement(SimplerContactForm, { key: "address-customer", header: t('customer'), contact: this.props.document.customer, onChange: function (property, value) {
                            var contact = new Contact(_this.props.document.customer.clone);
                            contact[property] = value;
                            _this.props.onChange('customer', contact);
                        }, onReplace: function (contact) { return _this.props.onChange('customer', contact); }, fetch: this.props.fetch, detail: this.props.detail })),
                React.createElement(Row, { className: "patterns-item-document-dates" },
                    React.createElement(Row, { flex: 1, className: "patterns-item-document-dates-column", style: { marginRight: 30 } },
                        React.createElement(Column, { flex: 1 },
                            React.createElement(Row, { className: "patterns-item-document-detail-select" }, t('issuedBy')),
                            React.createElement(Row, { className: "patterns-item-document-detail" }, t('datePosted')))),
                    React.createElement(Row, { flex: 2, className: "patterns-item-document-dates-column" },
                        React.createElement(Column, { style: { marginLeft: 5, fontWeight: 'bold' } },
                            React.createElement(InputGroup, { style: { marginTop: 4 }, value: this.props.document.issuedBy, onChange: function (evt) {
                                    _this.props.onChange('issuedBy', evt.currentTarget.value);
                                } }),
                            React.createElement(DateInput, { formatDate: PatternApp.format.date, parseDate: PatternApp.format.parseDate, value: this.props.document.createdAt, onChange: function (date) { return _this.props.onChange('createdAt', date); } }))),
                    React.createElement(Row, { flex: 2, className: "patterns-item-document-dates-column", style: { marginLeft: 5 } },
                        React.createElement(Column, { flex: 1 },
                            React.createElement(Row, { className: "patterns-item-document-detail-select" }, t('paymentMethod')),
                            paymentMethod.code === PaymentMethod.bankTransfer.code &&
                                React.createElement(React.Fragment, null,
                                    React.createElement(Row, { className: "patterns-item-document-detail" }, t('bank')),
                                    React.createElement(Row, { className: "patterns-item-document-detail" }, t('bankAccount')),
                                    PatternApp.settings.orders.showSymbols && React.createElement(React.Fragment, null,
                                        React.createElement(Row, { className: "patterns-item-document-detail" }, t('variableSymbol')),
                                        React.createElement(Row, { className: "patterns-item-document-detail" }, t('constantSymbol'))))),
                        React.createElement(Column, { flex: 1, style: { fontWeight: 'bold' } },
                            React.createElement(Row, { className: "patterns-item-document-detail-select" },
                                React.createElement(PaymentMethodSelect, { items: PatternApp.settings.payment.methods, activeItem: paymentMethod, onItemSelect: function (item) {
                                        _this.props.onChange('paymentMethod', item.code);
                                    }, itemRenderer: function (item, options) { return React.createElement(MenuItem, { key: "order-payment-method-" + item.code, text: item.title, onClick: options.handleClick }); } },
                                    React.createElement(Button, { style: { marginLeft: -10, fontWeight: 'bold' }, minimal: true, rightIcon: "chevron-down", text: paymentMethod.title }))),
                            paymentMethod.code === PaymentMethod.bankTransfer.code &&
                                React.createElement(React.Fragment, null,
                                    React.createElement(Row, { className: "patterns-item-document-detail" }, PatternApp.settings.bank.name),
                                    React.createElement(Row, { className: "patterns-item-document-detail" }, PatternApp.settings.bank.account),
                                    PatternApp.settings.orders.showSymbols && React.createElement(React.Fragment, null,
                                        React.createElement(Row, { className: "patterns-item-document-detail" }, this.props.document.code),
                                        React.createElement(Row, { className: "patterns-item-document-detail" }, "0308")))))),
                React.createElement(OrderItemsView, { free: this.props.free, editableCode: this.props.editableCode, showVat: PatternApp.settings.orders.showVat, document: this.props.document, onChange: function (items) { return _this.props.onChange('items', items); } }),
                React.createElement(Row, null,
                    React.createElement(Row, { flex: 4, style: { marginTop: 12, alignItems: 'start' } },
                        React.createElement(Button, { minimal: true, intent: "success", icon: "plus", text: t('newItem'), onClick: function () {
                                var order = new Order(_this.props.document.clone);
                                order.items.push(new DocumentItem({
                                    index: _this.props.document.items.length,
                                    quantity: 1,
                                    vat: 20
                                }));
                                _this.props.onChange('items', order.items);
                            } })),
                    React.createElement(Row, { flex: 10, style: { paddingTop: 24 } })),
                this.renderTotal(currency),
                React.createElement(Row, { flex: 1, style: { paddingTop: 48 } },
                    React.createElement(ControlGroup, { fill: true, style: { flex: 1 } },
                        React.createElement(FormGroup, { label: t('note') },
                            React.createElement(TextArea, { fill: true, value: this.props.document.note, onChange: function (evt) { return _this.props.onChange('note', evt.currentTarget.value); }, className: "patterns-item-document-note" })))),
                React.createElement(Row, { style: { marginTop: 120 } },
                    React.createElement(Column, { flex: 1 }),
                    React.createElement(Column, { flex: 1, className: "patterns-item-document-signature" },
                        this.props.signature && React.createElement("img", { alt: "logo", src: this.props.signature }),
                        React.createElement("div", { className: "dots" }, "......................................................."),
                        React.createElement("div", null, t('signature'))))));
    };
    return CustomOrderView;
}(Component));
export default CustomOrderView;
//# sourceMappingURL=custom_order_view.js.map