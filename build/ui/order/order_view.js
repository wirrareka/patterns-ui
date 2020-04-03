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
var PaymentMethodSelect = Select.ofType();
var OrderItemsView = ItemsView.ofType();
var NamedSelect = Select.ofType();
var OrderView = /** @class */ (function (_super) {
    __extends(OrderView, _super);
    function OrderView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            people: [],
            query: ''
        };
        return _this;
    }
    OrderView.prototype.componentDidMount = function () {
        window.pica = this;
    };
    OrderView.prototype.renderVatRecap = function (currency) {
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
    OrderView.prototype.renderTotal = function (currency) {
        return React.createElement(Row, { flex: 1, style: { height: 42, alignItems: 'center' } },
            React.createElement(Column, { flex: 11 }),
            React.createElement(Column, { flex: 3, className: "patterns-item-document-header-column" }, t('total')),
            React.createElement(Column, { flex: 7, className: "patterns-item-document-total" }, PatternApp.format.price(PatternApp.settings.orders.showVat ? this.props.document.itemsTotalWithVat : this.props.document.itemsTotal, currency)));
    };
    OrderView.prototype.render = function () {
        var _this = this;
        var paymentMethod = PatternApp.getPaymentMethod(this.props.document.paymentMethod);
        var currency = PatternApp.getCurrency(this.props.document.currency);
        return React.createElement(Wrapper, null,
            React.createElement(Page, null,
                React.createElement(Header, null,
                    React.createElement(Logo, null, this.props.logo && React.createElement("img", { alt: "logo", src: this.props.logo })),
                    React.createElement(Column, { flex: 4, style: { flex: 4 } },
                        React.createElement(HeaderCode, null,
                            React.createElement(InputGroup, { fill: true, value: this.props.document.name || t('order.new'), onChange: function (evt) { return _this.props.onChange('name', evt.currentTarget.value); }, className: "patterns-item_document-header-name" })),
                        React.createElement(DocumentType, null,
                            t('order.type'),
                            " ",
                            this.props.document.code))),
                React.createElement(Row, { style: { alignItems: 'flex-start' } },
                    React.createElement(Column, { flex: 1, style: { height: '100%', marginRight: 30 } }, "Obchodny\u0301 register OS Trnava Oddiel Sro, vloz\u030Cka c\u030C. 34375/T"),
                    React.createElement(ContactForm, { key: "address-vendor", disabled: true, header: t('vendor'), contact: this.props.document.vendor, onChange: function (property, value) {
                            var contact = new Contact(_this.props.document.vendor.clone);
                            contact[property] = value;
                            _this.props.onChange('vendor', contact);
                        }, onReplace: function (contactable) { return _this.props.onChange('vendor', contactable); }, fetch: this.props.fetch }),
                    React.createElement(ContactForm, { key: "address-customer", header: t('customer'), contact: this.props.document.customer, onChange: function (property, value) {
                            var contact = new Contact(_this.props.document.customer.clone);
                            contact[property] = value;
                            _this.props.onChange('customer', contact);
                        }, onReplace: function (contact) { return _this.props.onChange('customer', contact); }, fetch: this.props.fetch })),
                React.createElement(Row, { className: "patterns-item-document-dates" },
                    React.createElement(Row, { flex: 1, className: "patterns-item-document-dates-column", style: { marginRight: 30 } },
                        React.createElement(Column, { flex: 1 },
                            React.createElement(Row, { className: "patterns-item-document-detail-select" }, t('issuedBy')),
                            React.createElement(Row, { className: "patterns-item-document-detail" }, t('datePosted')),
                            React.createElement(Row, { className: "patterns-item-document-detail" }, t('dateDelivered')))),
                    React.createElement(Row, { flex: 2, className: "patterns-item-document-dates-column" },
                        React.createElement(Column, { style: { marginLeft: 5, fontWeight: 'bold' } },
                            React.createElement(NamedSelect, { className: "patterns-item-document-select-offset", items: this.state.people, itemRenderer: function (item, options) { return React.createElement(MenuItem, { key: "patterns-item-document-issued-" + item.id, text: item.name, onClick: options.handleClick }); }, onItemSelect: function (item) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.props.onChange('issuedBy', item.name)];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, this.props.onChange('issuedById', item.id)];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, onQueryChange: function (query) { return __awaiter(_this, void 0, void 0, function () {
                                    var people;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.props.fetchNames(query)];
                                            case 1:
                                                people = _a.sent();
                                                this.setState({ people: people });
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, query: this.state.query },
                                React.createElement(Button, { minimal: true, text: this.props.document.issuedBy, rightIcon: "chevron-down" })),
                            React.createElement(DateInput, { formatDate: PatternApp.format.date, parseDate: PatternApp.format.parseDate, value: this.props.document.createdAt, onChange: function (date) { return _this.props.onChange('createdAt', date); } }),
                            React.createElement(DateInput, { formatDate: PatternApp.format.date, parseDate: PatternApp.format.parseDate, value: this.props.document.deliveryDate, onChange: function (date) { return _this.props.onChange('deliveryDate', date); } }))),
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
                React.createElement(OrderItemsView, { editableCode: this.props.editableCode, showVat: PatternApp.settings.orders.showVat, document: this.props.document, onChange: function (items) { return _this.props.onChange('items', items); } }),
                React.createElement(Row, null,
                    React.createElement(Row, { flex: 4, style: { marginTop: 12, alignItems: 'start' } },
                        React.createElement(Button, { minimal: true, intent: "success", icon: "plus", text: t('newItem'), onClick: function () {
                                var order = new Order(_this.props.document.clone);
                                order.items.push(new DocumentItem({ index: _this.props.document.items.length }));
                                _this.props.onChange('items', order.items);
                            } })),
                    React.createElement(Row, { flex: 10, style: { paddingTop: 24 } })),
                PatternApp.settings.orders.showVat && this.renderVatRecap(currency),
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
    return OrderView;
}(Component));
export default OrderView;
//# sourceMappingURL=order_view.js.map