var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { Colors } from '@blueprintjs/core';
import { Document, Font, Page, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import bigDecimal from 'js-big-decimal';
import styled from '@react-pdf/styled-components';
import { t } from '../locale_manager';
import PatternApp from '../pattern_app';
import { PaymentMethod } from '../models';
import ContactForm from './contact_form';
Font.register({
    family: 'Oswald',
    src: 'https://www.quanto.sk/fonts/Oswald-Regular.ttf'
});
Font.register({
    family: 'Oswald Light',
    src: 'https://www.quanto.sk/fonts/Oswald-Light.ttf'
});
Font.register({
    family: 'Oswald Medium',
    src: 'https://www.quanto.sk/fonts/Oswald-Medium.ttf'
});
Font.register({
    family: 'Oswald Bold',
    src: 'https://www.quanto.sk/fonts/Oswald-Bold.ttf'
});
var Header = styled.View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flexDirection: row;\n"], ["\n  display: flex;\n  flexDirection: row;\n"])));
var Contacts = styled.View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flexDirection: row;\n  marginBottom: 2mm;\n"], ["\n  display: flex;\n  flexDirection: row;\n  marginBottom: 2mm;\n"])));
var Logo = styled.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var Column = styled.View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Row = styled.View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var HeaderCode = styled.Text(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-align: right;\n  font-size: 22px;\n  font-weight: bold;\n  font-family: \"Oswald\";\n"], ["\n  text-align: right;\n  font-size: 22px;\n  font-weight: bold;\n  font-family: \"Oswald\";\n"])));
var DocumentType = styled.Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  text-align: right;\n  font-size: 10px;\n  font-weight: bold;\n  color: ", ";\n  text-transform: uppercase;\n  font-family: \"Oswald Medium\";\n"], ["\n  text-align: right;\n  font-size: 10px;\n  font-weight: bold;\n  color: ", ";\n  text-transform: uppercase;\n  font-family: \"Oswald Medium\";\n"])), Colors.GRAY3);
var DefaultTextLabel = styled.Text(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 8px;\n  line-height: 1.3;\n  font-family: \"Oswald Light\";\n"], ["\n  font-size: 8px;\n  line-height: 1.3;\n  font-family: \"Oswald Light\";\n"])));
var DefaultTextValue = styled.Text(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 8px;\n  line-height: 1.3;\n  font-family: \"Oswald\";\n"], ["\n  font-size: 8px;\n  line-height: 1.3;\n  font-family: \"Oswald\";\n"])));
var DefaultText = styled.Text(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 9px;\n  line-height: 1.3;\n  font-family: \"Oswald Light\";\n"], ["\n  font-size: 9px;\n  line-height: 1.3;\n  font-family: \"Oswald Light\";\n"])));
var TableHeaderItem = styled.Text(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 8px;\n  text-transform: uppercase;\n  font-family: \"Oswald Medium\";\n  color: ", ";\n"], ["\n  font-size: 8px;\n  text-transform: uppercase;\n  font-family: \"Oswald Medium\";\n  color: ", ";\n"])), Colors.GRAY3);
var TableHeader = styled.Text(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-size: 8px;\n  text-transform: uppercase;\n  text-align: right;\n  font-family: \"Oswald Medium\";\n  color: ", ";\n"], ["\n  font-size: 8px;\n  text-transform: uppercase;\n  text-align: right;\n  font-family: \"Oswald Medium\";\n  color: ", ";\n"])), Colors.GRAY3);
var TableCellItem = styled.Text(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 9px;\n  text-transform: uppercase;\n  text-align: left;\n  font-family: \"Oswald\";\n"], ["\n  font-size: 9px;\n  text-transform: uppercase;\n  text-align: left;\n  font-family: \"Oswald\";\n"])));
var TableCell = styled.Text(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  font-size: 9px;\n  text-align: right;\n  font-family: \"Oswald Light\";\n"], ["\n  font-size: 9px;\n  text-align: right;\n  font-family: \"Oswald Light\";\n"])));
var styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: '10mm',
        paddingLeft: '12mm',
        paddingRight: '12mm',
        paddingBottom: '16mm'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
var PER_PAGE_FIRST = 39;
var PER_PAGE_SECOND = 46;
export default function InvoicePrinter(_a) {
    var document = _a.document, quote = _a.quote, itemsPrice = _a.itemsPrice, workPrice = _a.workPrice, _b = _a.free, free = _b === void 0 ? false : _b;
    console.log('custom printer', itemsPrice, workPrice);
    var paymentMethod = PatternApp.getPaymentMethod(document.paymentMethod);
    var currency = PatternApp.getCurrency(document.currency);
    var renderHeader = function (page) {
        return React.createElement(Row, { key: "header-" + page, style: { marginTop: 0, borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3 } },
            React.createElement(Column, { style: { flex: 6 } },
                React.createElement(TableHeaderItem, null,
                    t('title'),
                    " / ",
                    t('code'))),
            !free && React.createElement(React.Fragment, null,
                React.createElement(Column, { style: { flex: 2 } },
                    React.createElement(TableHeader, { align: "right" }, t('unitPriceNoVat'))),
                React.createElement(Column, { style: { flex: 2 } },
                    React.createElement(TableHeader, { align: "right" }, t('unitPriceWithVat'))),
                React.createElement(Column, { style: { flex: 2 } },
                    React.createElement(TableHeader, { align: "right" }, t('quantity'))),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(TableHeader, { align: "right" }, t('linePriceNoVat')))),
            !free && PatternApp.settings.invoices.showVat && React.createElement(React.Fragment, null,
                React.createElement(Column, { style: { flex: 2 } },
                    React.createElement(TableHeader, { align: "right" }, t('vat'))),
                React.createElement(Column, { style: { flex: 2 } },
                    React.createElement(TableHeader, { align: "right" }, t('vatPrice'))),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(TableHeader, { align: "right" }, t('linePriceWithVat')))),
            free && React.createElement(React.Fragment, null,
                React.createElement(Column, { style: { flex: 2 } },
                    React.createElement(TableHeader, null)),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(TableHeader, null)),
                React.createElement(Column, { style: { flex: 2 } },
                    React.createElement(TableHeader, null)),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(TableHeader, null)),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(TableHeader, { align: "right" }, t('linePriceWithVat')))));
    };
    var renderItems = function (from, to) {
        return document.items.slice(from, to).map(function (item, index) {
            var itemRow = React.createElement(Row, { key: "item-" + index },
                React.createElement(Column, { style: { flex: 6 } },
                    React.createElement(TableCellItem, { style: { textAlign: 'left' } }, item.name)),
                !free && React.createElement(React.Fragment, null,
                    React.createElement(Column, { style: { flex: 2 } },
                        React.createElement(TableCell, { align: "right" }, PatternApp.format.price(item.price, currency))),
                    React.createElement(Column, { style: { flex: 2 } },
                        React.createElement(TableCell, { align: "right" }, PatternApp.format.price(item.unitPriceWithVat, currency))),
                    React.createElement(Column, { style: { flex: 2 } },
                        React.createElement(TableCell, { align: "right" },
                            item.quantity,
                            " ",
                            item.unit)),
                    React.createElement(Column, { style: { flex: 3 } },
                        React.createElement(TableCell, { align: "right" }, PatternApp.format.price(item.linePriceWithVat, currency)))),
                !free && PatternApp.settings.orders.showVat &&
                    React.createElement(React.Fragment, null,
                        React.createElement(Column, { style: { flex: 2 } },
                            React.createElement(TableCell, { align: "right" },
                                item.vat,
                                " %")),
                        React.createElement(Column, { style: { flex: 2 } },
                            React.createElement(TableCell, { align: "right" }, PatternApp.format.price(item.vatPrice, currency))),
                        React.createElement(Column, { style: { flex: 3 } },
                            React.createElement(TableCell, { style: { fontFamily: "Oswald" }, align: "right" }, PatternApp.format.price(item.linePriceWithVat, currency)))),
                free && React.createElement(React.Fragment, null,
                    React.createElement(Column, { style: { flex: 2 } },
                        React.createElement(TableCell, null, item.custom1)),
                    React.createElement(Column, { style: { flex: 3 } },
                        React.createElement(TableCell, null, item.custom2)),
                    React.createElement(Column, { style: { flex: 2 } },
                        React.createElement(TableCell, null, item.custom3)),
                    React.createElement(Column, { style: { flex: 3 } },
                        React.createElement(TableCell, null, item.custom4)),
                    React.createElement(Column, { style: { flex: 3 } },
                        React.createElement(TableCell, { style: { fontFamily: "Oswald" }, align: "right" },
                            item.name.length > 1 && PatternApp.format.price(item.linePriceWithVat, currency),
                            item.name.length <= 1 && React.createElement(Text, { style: { color: 'white' } }, "0")))));
            var itemRows = [];
            itemRows.push(itemRow);
            // if (item.code && item.code.length > 0) {
            //   itemRows.push(<Row key={`item-code-${index}`} style={{ paddingLeft: '12mm', paddingRight: '12mm'}}>
            //     <TableCellItem style={{ fontFamily: 'Oswald', fontSize: 9, color: Colors.GRAY3 }}>
            //       { item.code }
            //     </TableCellItem>
            //   </Row>)
            // }
            return React.createElement(React.Fragment, { key: "item-fragment-" + index }, itemRows);
        });
    };
    var renderVatRecap = function (currency) {
        var header = document.vats.length > 0 ?
            React.createElement(Row, { style: { flex: 1, marginTop: 0 } },
                React.createElement(Column, { style: { flex: 12, textAlign: 'right', paddingBottom: 6 }, className: "patterns-item-document-header-column" },
                    React.createElement(TableHeader, null)),
                React.createElement(Column, { style: { flex: 2, textAlign: 'right', paddingBottom: 6 }, className: "patterns-item-document-header-column" },
                    React.createElement(TableHeader, null, t('vatRecap'))),
                React.createElement(Column, { style: { flex: 2, textAlign: 'right', borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingBottom: 6 }, className: "patterns-item-document-header-column bordered" },
                    React.createElement(TableHeader, null, t('vat'))),
                React.createElement(Column, { style: { flex: 2, textAlign: 'right', borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingBottom: 6 }, className: "patterns-item-document-header-column bordered" },
                    React.createElement(TableHeader, null, t('vatBase'))),
                React.createElement(Column, { style: { flex: 3, textAlign: 'right', borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingBottom: 6 }, className: "patterns-item-document-header-column bordered" },
                    React.createElement(TableHeader, null, t('vatValue'))))
            :
                null;
        var rows = document.vats.map(function (vat, index) {
            return React.createElement(Row, { key: "invoice-vat-" + index, style: { flex: 1 } },
                React.createElement(Column, { style: { flex: 14 } }),
                React.createElement(Column, { style: { flex: 2, textAlign: 'right' } },
                    React.createElement(DefaultText, null,
                        vat.vat,
                        "%")),
                React.createElement(Column, { style: { flex: 2, textAlign: 'right' } },
                    React.createElement(DefaultText, null, PatternApp.format.price(vat.base, currency))),
                React.createElement(Column, { style: { flex: 3, textAlign: 'right' } },
                    React.createElement(DefaultText, null, PatternApp.format.price(vat.price, currency))));
        });
        return React.createElement(React.Fragment, null,
            header,
            rows);
    };
    var renderTotal = function (currency) {
        return React.createElement(React.Fragment, null,
            React.createElement(Row, { style: { flex: 1, alignItems: 'center' } },
                React.createElement(Column, { style: { flex: 14 } }),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(TableHeader, { style: { textAlign: 'right' } }, "SPOLU BEZ DPH")),
                React.createElement(Column, { style: { flex: 4 } },
                    React.createElement(TableHeader, { style: { textAlign: 'right' } }, "SPOLU S DPH 20%"))),
            React.createElement(Row, { style: { flex: 1, alignItems: 'center' } },
                React.createElement(Column, { style: { flex: 14 } },
                    React.createElement(TableHeader, { style: { marginRight: 6 } }, "Cena materi\u00E1l")),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(Text, { style: {
                            fontSize: 11,
                            fontFamily: 'Oswald',
                            textAlign: 'right',
                            backgroundColor: Colors.LIGHT_GRAY4
                        } }, PatternApp.format.price(itemsPrice.divide(new bigDecimal(1.2), 2), currency))),
                React.createElement(Column, { style: { flex: 4 } },
                    React.createElement(Text, { style: {
                            fontSize: 11,
                            fontFamily: 'Oswald',
                            textAlign: 'right',
                            backgroundColor: Colors.LIGHT_GRAY4
                        } }, PatternApp.format.price(itemsPrice, currency)))),
            React.createElement(Row, { style: { flex: 1, alignItems: 'center' } },
                React.createElement(Column, { style: { flex: 14 } },
                    React.createElement(TableHeader, { style: { marginRight: 6 } }, "Cena pr\u00E1ca")),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(Text, { style: {
                            fontSize: 11,
                            fontFamily: 'Oswald',
                            textAlign: 'right',
                            backgroundColor: Colors.LIGHT_GRAY4
                        } }, PatternApp.format.price(workPrice.divide(new bigDecimal(1.2), 2), currency))),
                React.createElement(Column, { style: { flex: 4 } },
                    React.createElement(Text, { style: {
                            fontSize: 11,
                            fontFamily: 'Oswald',
                            textAlign: 'right',
                            backgroundColor: Colors.LIGHT_GRAY4
                        } }, PatternApp.format.price(workPrice, currency)))),
            React.createElement(Row, { style: { flex: 1, alignItems: 'center' } },
                React.createElement(Column, { style: { flex: 14 } },
                    React.createElement(TableHeader, { style: { marginRight: 6 } }, "Cena spolu")),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(Text, { style: {
                            fontSize: 11,
                            fontFamily: 'Oswald',
                            textAlign: 'right',
                            backgroundColor: Colors.LIGHT_GRAY4
                        } }, PatternApp.format.price(document.itemsTotal, currency))),
                React.createElement(Column, { style: { flex: 4 } },
                    React.createElement(Text, { style: {
                            fontSize: 11,
                            fontFamily: 'Oswald',
                            textAlign: 'right',
                            backgroundColor: Colors.LIGHT_GRAY4
                        } }, PatternApp.format.price(document.itemsTotalWithVat, currency)))));
    };
    var renderHead = function () {
        return React.createElement(Column, null,
            React.createElement(Header, null,
                React.createElement(Logo, null,
                    React.createElement(Image, { src: PatternApp.settings.logo, style: { width: '40mm', marginTop: 0 } })),
                React.createElement(View, { style: { flex: 4 } },
                    React.createElement(HeaderCode, null, document.name || t('order.new')),
                    React.createElement(DocumentType, null,
                        quote ? 'Cenová ponuka' : 'Objednávka',
                        " ",
                        document.code))),
            React.createElement(Contacts, null,
                React.createElement(View, { style: { flex: 1, marginRight: 20 } },
                    React.createElement(Text, null)),
                React.createElement(View, { style: { flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20 } },
                    React.createElement(Text, { style: { fontSize: 9, fontWeight: 'bold', fontFamily: 'Oswald Medium', color: Colors.GRAY3 } }, t('vendor')),
                    React.createElement(ContactForm, { contact: document.vendor, simple: true })),
                React.createElement(View, { style: { flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3 } },
                    React.createElement(Text, { style: { fontSize: 9, fontWeight: 'bold', fontFamily: 'Oswald Medium', color: Colors.GRAY3 } }, t('customer')),
                    React.createElement(ContactForm, { contact: document.customer, simple: true }))),
            React.createElement(Contacts, null,
                React.createElement(View, { style: { flex: 1, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20 } },
                    React.createElement(DefaultTextLabel, null, t('issuedBy')),
                    React.createElement(DefaultTextLabel, null, t('datePosted'))),
                React.createElement(View, { style: { flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20 } },
                    React.createElement(DefaultTextValue, null, document.issuedBy),
                    React.createElement(DefaultTextValue, null, PatternApp.format.date(document.createdAt))),
                React.createElement(View, { style: { flex: 2, flexDirection: 'row', borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3 } },
                    React.createElement(View, { style: { flex: 1, flexDirection: 'column' } },
                        React.createElement(DefaultTextLabel, null, t('paymentMethod')),
                        paymentMethod.code === PaymentMethod.bankTransfer.code &&
                            React.createElement(React.Fragment, null,
                                React.createElement(DefaultTextLabel, null, t('bank')),
                                React.createElement(DefaultTextLabel, null, t('bankAccount')),
                                React.createElement(DefaultTextLabel, null, t('variableSymbol')))),
                    React.createElement(View, { style: { flex: 1, flexDirection: 'column' } },
                        React.createElement(DefaultTextValue, null, paymentMethod.title),
                        paymentMethod.code === PaymentMethod.bankTransfer.code &&
                            React.createElement(React.Fragment, null,
                                React.createElement(DefaultTextValue, null, PatternApp.settings.bank.name),
                                React.createElement(DefaultTextValue, null, PatternApp.settings.bank.account),
                                React.createElement(DefaultTextValue, null, document.numericCode()))))));
    };
    var renderEnding = function (page) {
        return React.createElement(React.Fragment, { key: "ending" },
            React.createElement(Row, null,
                React.createElement(Column, { style: { paddingTop: 24, flex: 1 } }, renderTotal(currency))),
            React.createElement(Row, { style: { paddingTop: 12, marginTop: 0, marginBottom: 0 } }),
            React.createElement(Row, { style: {
                    paddingTop: 24,
                    marginTop: '12mm',
                    bottom: '24mm',
                    textAlign: 'right',
                    right: '12mm',
                    width: 200,
                    position: 'absolute'
                } },
                React.createElement(Column, { style: { flex: 1 } }),
                React.createElement(Column, { style: { flex: 1, justifyContent: 'right' }, className: "patterns-item-document-signature" },
                    React.createElement(Image, { src: document.signature, style: { width: '40mm' } }),
                    React.createElement(DefaultText, { style: { textAlign: 'right', marginTop: -20 } }, "......................................................."),
                    React.createElement(DefaultText, { style: { textAlign: 'right', fontFamily: 'Oswald Light', fontSize: 8, textTransform: 'uppercase', colors: Colors.LIGHT_GRAY1 } }, t('signature')))));
    };
    var renderPages = function () {
        var pages = [];
        var head = React.createElement(React.Fragment, { key: "page-0" },
            renderHead(),
            renderHeader(0));
        var footer = function (page) { return React.createElement(View, { fixed: true, key: "footer-" + page, style: {
                position: 'absolute',
                bottom: '10mm',
                width: '100vw',
                fontSize: 9,
                fontFamily: 'Oswald Light',
                flexDirection: 'row',
                display: 'flex',
                paddingLeft: '12mm',
                paddingRight: '12mm',
            } },
            React.createElement(View, { style: { flex: 2, flexDirection: 'column' } },
                React.createElement(Text, { style: { textAlign: 'left', fontSize: 7 }, key: "footer-page-company-" + page + "-company" }, "Gargo s.r.o."),
                React.createElement(Text, { style: { textAlign: 'left', fontSize: 7 }, key: "footer-page-company-" + page + "-web" }, "web: http://www.gargo.sk"),
                React.createElement(Text, { style: { textAlign: 'left', fontSize: 7 }, key: "footer-page-company-" + page + "-email" }, "email: gargo@gargo.sk"),
                React.createElement(Text, { style: { textAlign: 'left', fontSize: 7 }, key: "footer-page-company-" + page + "-phone" }, "telef\u00F3n (predaj\u0148a): 0905 909 815 / 0911 109 785")),
            React.createElement(Column, { style: { flex: 2, alignItems: 'flex-end' } },
                React.createElement(Text, { fixed: true, style: { fontSize: 7, marginTop: 22 }, key: "footer-page-top-" + page }, "\u010Eakujeme za V\u00E1\u0161 \u010Das, ak ste boli spokojn\u00ED s na\u0161imi slu\u017Ebami, pros\u00EDme o zdi\u013Eanie a rezenciu na na\u0161u FB str\u00E1nku GARGO - krbov\u00E9 a inter\u00EDerov\u00E9 \u0161t\u00FAdio."),
                React.createElement(Text, { fixed: true, style: { textAlign: 'right' }, key: "footer-page-" + page, render: function (_a) {
                        var pageNumber = _a.pageNumber, totalPages = _a.totalPages;
                        return t('page') + " " + pageNumber + " / " + totalPages;
                    } }))); };
        if (document.items.length <= PER_PAGE_FIRST) {
            // single page
            pages.push(React.createElement(Page, { key: "page-0", size: "A4", style: styles.page },
                head,
                renderItems(0, document.items.length),
                renderEnding(0),
                footer(0)));
            return pages;
        }
        else {
            // first page
            pages.push(React.createElement(Page, { key: "page-0", size: "A4", style: styles.page },
                head,
                renderItems(0, PER_PAGE_FIRST),
                footer(0)));
        }
        var items = document.items.slice(PER_PAGE_FIRST, document.items.length);
        var itemPages = Math.ceil(items.length / PER_PAGE_FIRST);
        for (var i = 0; i < itemPages; i++) {
            var isLast = i + 1 === itemPages;
            var remaining = items.length - (i * PER_PAGE_SECOND);
            var from = PER_PAGE_FIRST + i * PER_PAGE_SECOND;
            var to = isLast ? PER_PAGE_FIRST + (i * PER_PAGE_SECOND) + remaining : PER_PAGE_SECOND + (i + 1) * PER_PAGE_SECOND;
            var content = [
                renderHeader(i + 1),
                renderItems(from, to)
            ];
            if (isLast) {
                content.push(renderEnding(i + 1));
            }
            content.push(footer(i + 1));
            pages.push(React.createElement(Page, { key: "page-" + (i + 1), size: "A4", style: styles.page }, content));
        }
        return pages;
    };
    return React.createElement(Document, null, renderPages());
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=custom_order_printer.js.map