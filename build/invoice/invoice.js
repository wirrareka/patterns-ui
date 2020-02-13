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
import { Button, Colors, MenuItem } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import { Select } from '@blueprintjs/select';
import { Wrapper, Page, Header, Logo, HeaderCode, DocumentType } from './components';
import { t } from '../locale-manager';
import Invoice from '../models/invoice';
import PaymentMethod from '../models/payment-method';
import InvoiceItem from '../models/invoice-item';
import { FlexColumn as Column, FlexRow as Row } from '../components';
import InvoiceItems from './items';
import AddressBox from './address-box';
import './invoice.scss';
export var DefaultPaymentMethods = [
    new PaymentMethod({ id: 'cash', title: 'Hotovosť' }),
    new PaymentMethod({ id: 'card', title: 'Kartou' }),
    new PaymentMethod({ id: 'transfer', title: 'Bankový prevod' }),
    new PaymentMethod({ id: 'paypal', title: 'Paypal' })
];
var PaymentMethodSelect = Select.ofType();
var InvoiceDocument = /** @class */ (function (_super) {
    __extends(InvoiceDocument, _super);
    function InvoiceDocument(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    InvoiceDocument.prototype.onChange = function (invoice) {
        invoice.recalculate();
        this.props.onChange(invoice);
    };
    InvoiceDocument.prototype.render = function () {
        var _this = this;
        var paymentMethod = this.props.paymentMethods.find(function (method) { return method.id === _this.props.invoice.paymentMethod; }) || DefaultPaymentMethods[2];
        return React.createElement(Wrapper, null,
            React.createElement(Page, null,
                React.createElement(Header, null,
                    React.createElement(Logo, null,
                        React.createElement("img", { alt: "logo", src: this.props.logo })),
                    React.createElement(Column, { style: { flex: 1 } },
                        React.createElement(HeaderCode, null, this.props.invoice.code || t('invoice.new')),
                        React.createElement(DocumentType, null, t('invoice.documentType')))),
                React.createElement(Row, { style: { alignItems: 'flex-start' } },
                    React.createElement(Column, { flex: 1, style: { justifyContent: 'flex-end', marginRight: 30 } }, "Obchodny\u0301 register OS Trnava Oddiel Sro, vloz\u030Cka c\u030C. 34375/T"),
                    React.createElement(AddressBox, { key: "address-vendor", disabled: true, header: "DOD\u00C1VATE\u013D", contact: this.props.invoice.company, onChange: function (contact) {
                            var clone = new Invoice(_this.props.invoice.clone);
                            clone.company = contact;
                            _this.onChange(clone);
                        }, fetch: function (query) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, []];
                        }); }); } }),
                    React.createElement(AddressBox, { key: "address-customer", header: "ODBERATE\u013D", contact: this.props.invoice.customer, onChange: function (contact) {
                            var clone = new Invoice(_this.props.invoice.clone);
                            clone.customer = contact;
                            _this.onChange(clone);
                        }, fetch: function (query) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, []];
                        }); }); } })),
                React.createElement(Row, { style: { marginTop: 24, paddingTop: 0, fontSize: 14, marginBottom: 24, alignItems: 'flex-start' } },
                    React.createElement(Row, { flex: 1, style: { borderTop: '3px solid #cccccc', paddingTop: 10, marginRight: 30 } },
                        React.createElement(Column, { flex: 1 },
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('datePosted')),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('dateDelivered')),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('dateDue')))),
                    React.createElement(Row, { flex: 2, style: { borderTop: '3px solid #cccccc', paddingTop: 10 } },
                        React.createElement(Column, { style: { marginLeft: 5, fontWeight: 'bold' } },
                            React.createElement(DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.invoice.createdAt }),
                            React.createElement(DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.invoice.createdAt }),
                            React.createElement(DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.invoice.dueAt }))),
                    React.createElement(Row, { flex: 2, style: { borderTop: '3px solid #cccccc', marginLeft: 5, paddingTop: 10 } },
                        React.createElement(Column, { flex: 1 },
                            React.createElement(Row, { style: { height: 30, alignItems: 'center' } }, t('paymentMethod')),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('bank')),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('bankAccount')),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('variableSymbol')),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('constantSymbol'))),
                        React.createElement(Column, { flex: 1, style: { fontWeight: 'bold' } },
                            React.createElement(Row, { style: { height: 30, alignItems: 'center' } },
                                React.createElement(PaymentMethodSelect, { items: this.props.paymentMethods, activeItem: paymentMethod, onItemSelect: function (item) {
                                        var clone = new Invoice(_this.props.invoice.clone);
                                        clone.paymentMethod = item.id;
                                        _this.onChange(clone);
                                    }, itemRenderer: function (item, options) { return React.createElement(MenuItem, { key: item.id, text: item.title, onClick: options.handleClick }); } },
                                    React.createElement(Button, { style: { marginLeft: -10, fontWeight: 'bold' }, minimal: true, rightIcon: "chevron-down", text: paymentMethod.title }))),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, "V\u00DAB, a.s."),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, "2121123456 / 1100"),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, this.props.invoice.code),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, "0308")))),
                React.createElement(InvoiceItems, { invoice: this.props.invoice, onChange: this.onChange }),
                React.createElement(Row, null,
                    React.createElement(Row, { flex: 2, style: { marginTop: 12, alignItems: 'start' } },
                        React.createElement(Button, { minimal: true, intent: "success", icon: "plus", text: t('newItem'), onClick: function () {
                                var invoice = new Invoice(_this.props.invoice.clone);
                                invoice.items.push(new InvoiceItem({ index: _this.props.invoice.items.length }));
                                _this.onChange(invoice);
                            } })),
                    React.createElement(Column, { flex: 1, style: { paddingTop: 24 } },
                        React.createElement(Row, { flex: 1 },
                            React.createElement(Column, { flex: 1 }, "Vat Recap"),
                            React.createElement(Column, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "RATE"),
                            React.createElement(Column, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "BASE"),
                            React.createElement(Column, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "VAT")),
                        this.props.invoice.vats.map(function (vat, index) { return React.createElement(Row, { key: "invoice-vat-" + index, flex: 1, style: { height: 24, alignItems: 'center' } },
                            React.createElement(Column, { flex: 1 }),
                            React.createElement(Column, { style: { textAlign: 'right' }, flex: 1 },
                                vat.vat,
                                "%"),
                            React.createElement(Column, { style: { textAlign: 'right' }, flex: 1 }, _this.props.formatPrice(vat.base, _this.props.invoice.currency)),
                            React.createElement(Column, { style: { textAlign: 'right' }, flex: 1 }, _this.props.formatPrice(vat.price, _this.props.invoice.currency))); }),
                        React.createElement(Row, { flex: 1, style: { height: 42, alignItems: 'center' } },
                            React.createElement(Column, { flex: 1 }, "Total"),
                            React.createElement(Column, { style: { borderTop: '3px solid black', textAlign: 'right', height: 32, justifyContent: 'center', fontSize: 18, backgroundColor: Colors.LIGHT_GRAY5 }, flex: 3 }, this.props.formatPrice(this.props.invoice.price, this.props.invoice.currency))))),
                React.createElement(Row, { style: { marginTop: 120 } },
                    React.createElement(Column, { flex: 1 }),
                    React.createElement(Column, { flex: 1, style: { textAlign: 'right' } },
                        React.createElement("div", null, "......................................................."),
                        React.createElement("div", null, "Podpis")))));
    };
    return InvoiceDocument;
}(Component));
export default InvoiceDocument;
//# sourceMappingURL=invoice.js.map