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
import { Button, Colors, MenuItem } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import { Select } from '@blueprintjs/select';
import { Wrapper, Page, Header, Logo, HeaderCode, DocumentType } from '../invoice/components';
import { t } from '../locale-manager';
import Offer from '../models/offer';
import PaymentMethod from '../models/payment-method';
import InvoiceItem from '../models/invoice-item';
import { FlexColumn as Column, FlexRow as Row } from '../components';
import InvoiceItems from '../invoice/items';
import AddressBox from '../invoice/address-box';
import './offer.scss';
export var DefaultPaymentMethods = [
    new PaymentMethod({ id: 'cash', title: 'Hotovosť' }),
    new PaymentMethod({ id: 'card', title: 'Kartou' }),
    new PaymentMethod({ id: 'transfer', title: 'Bankový prevod' }),
    new PaymentMethod({ id: 'paypal', title: 'Paypal' })
];
var PaymentMethodSelect = Select.ofType();
var OfferDocument = /** @class */ (function (_super) {
    __extends(OfferDocument, _super);
    function OfferDocument(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    OfferDocument.prototype.onChange = function (offer) {
        offer.recalculate();
        this.props.onChange(offer);
    };
    OfferDocument.prototype.render = function () {
        var _this = this;
        var paymentMethod = this.props.paymentMethods.find(function (method) { return method.id === _this.props.offer.paymentMethod; }) || DefaultPaymentMethods[2];
        return React.createElement(Wrapper, null,
            React.createElement(Page, null,
                React.createElement(Header, null,
                    React.createElement(Logo, null,
                        React.createElement("img", { alt: "logo", src: this.props.logo })),
                    React.createElement(Column, { style: { flex: 1 } },
                        React.createElement(HeaderCode, null, this.props.offer.code || t('offer.new')),
                        React.createElement(DocumentType, null, t('offer.documentType')))),
                React.createElement(Row, { style: { alignItems: 'flex-start' } },
                    React.createElement(Column, { flex: 1, style: { justifyContent: 'flex-end', marginRight: 30 } }, "Obchodny\u0301 register OS Trnava Oddiel Sro, vloz\u030Cka c\u030C. 34375/T"),
                    React.createElement(AddressBox, { key: "address-vendor", disabled: true, header: "DOD\u00C1VATE\u013D", contact: this.props.offer.company, onChange: function (contact) {
                            var clone = new Offer(_this.props.offer.clone);
                            clone.company = contact;
                            _this.onChange(clone);
                        }, fetch: this.props.fetch }),
                    React.createElement(AddressBox, { key: "address-customer", header: "ODBERATE\u013D", contact: this.props.offer.customer, onChange: function (contact) {
                            var clone = new Offer(_this.props.offer.clone);
                            clone.customer = contact;
                            _this.onChange(clone);
                        }, fetch: this.props.fetch })),
                React.createElement(Row, { style: { marginTop: 24, paddingTop: 0, fontSize: 14, marginBottom: 24, alignItems: 'flex-start' } },
                    React.createElement(Row, { flex: 1, style: { borderTop: '3px solid #cccccc', paddingTop: 10, marginRight: 30 } },
                        React.createElement(Column, { flex: 1 },
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('datePosted')),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('dateDelivered')),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, t('dateDue')))),
                    React.createElement(Row, { flex: 2, style: { borderTop: '3px solid #cccccc', paddingTop: 10 } },
                        React.createElement(Column, { style: { marginLeft: 5, fontWeight: 'bold' } },
                            React.createElement(DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.offer.createdAt }),
                            React.createElement(DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.offer.createdAt }),
                            React.createElement(DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.offer.dueAt }))),
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
                                        var clone = new Offer(_this.props.offer.clone);
                                        clone.paymentMethod = item.id;
                                        _this.onChange(clone);
                                    }, itemRenderer: function (item, options) { return React.createElement(MenuItem, { key: item.id, text: item.title, onClick: options.handleClick }); } },
                                    React.createElement(Button, { style: { marginLeft: -10, fontWeight: 'bold' }, minimal: true, rightIcon: "chevron-down", text: paymentMethod.title }))),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, "V\u00DAB, a.s."),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, "2121123456 / 1100"),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, this.props.offer.code),
                            React.createElement(Row, { style: { height: 24, alignItems: 'center' } }, "0308")))),
                React.createElement(InvoiceItems, { invoice: this.props.offer, onChange: this.onChange }),
                React.createElement(Row, null,
                    React.createElement(Row, { flex: 2, style: { marginTop: 12, alignItems: 'start' } },
                        React.createElement(Button, { minimal: true, intent: "success", icon: "plus", text: t('newItem'), onClick: function () {
                                var offer = new Offer(_this.props.offer.clone);
                                offer.items.push(new InvoiceItem({ index: _this.props.offer.items.length }));
                                _this.onChange(offer);
                            } })),
                    React.createElement(Column, { flex: 1, style: { paddingTop: 24 } },
                        React.createElement(Row, { flex: 1 },
                            React.createElement(Column, { flex: 1 }, "Vat Recap"),
                            React.createElement(Column, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "RATE"),
                            React.createElement(Column, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "BASE"),
                            React.createElement(Column, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "VAT")),
                        this.props.offer.vats.map(function (vat, index) { return React.createElement(Row, { key: "invoice-vat-" + index, flex: 1, style: { height: 24, alignItems: 'center' } },
                            React.createElement(Column, { flex: 1 }),
                            React.createElement(Column, { style: { textAlign: 'right' }, flex: 1 },
                                vat.vat,
                                "%"),
                            React.createElement(Column, { style: { textAlign: 'right' }, flex: 1 }, _this.props.formatPrice(vat.base, _this.props.offer.currency)),
                            React.createElement(Column, { style: { textAlign: 'right' }, flex: 1 }, _this.props.formatPrice(vat.price, _this.props.offer.currency))); }),
                        React.createElement(Row, { flex: 1, style: { height: 42, alignItems: 'center' } },
                            React.createElement(Column, { flex: 1 }, "Total"),
                            React.createElement(Column, { style: { borderTop: '3px solid black', textAlign: 'right', height: 32, justifyContent: 'center', fontSize: 18, backgroundColor: Colors.LIGHT_GRAY5 }, flex: 3 }, this.props.formatPrice(this.props.offer.price, this.props.offer.currency))))),
                React.createElement(Row, { style: { marginTop: 120 } },
                    React.createElement(Column, { flex: 1 }),
                    React.createElement(Column, { flex: 1, style: { textAlign: 'right' } },
                        React.createElement("div", null, "......................................................."),
                        React.createElement("div", null, "Podpis")))));
    };
    return OfferDocument;
}(Component));
export default OfferDocument;
//# sourceMappingURL=offer.js.map