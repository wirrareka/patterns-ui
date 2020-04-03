var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { Colors } from '@blueprintjs/core';
import { Document, Font, Page, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
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
var Header = styled.View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flexDirection: row;\n  marginLeft: 12mm;\n  marginTop: 12mm;\n  marginRight: 12mm;\n"], ["\n  display: flex;\n  flexDirection: row;\n  marginLeft: 12mm;\n  marginTop: 12mm;\n  marginRight: 12mm;\n"])));
var Contacts = styled.View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flexDirection: row;\n  marginLeft: 12mm;\n  marginRight: 12mm;\n  marginBottom: 4mm;\n"], ["\n  display: flex;\n  flexDirection: row;\n  marginLeft: 12mm;\n  marginRight: 12mm;\n  marginBottom: 4mm;\n"])));
var Logo = styled.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var Column = styled.View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Row = styled.View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var HeaderCode = styled.Text(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-align: right;\n  font-size: 22px;\n  font-weight: bold;\n  font-family: \"Oswald\";\n"], ["\n  text-align: right;\n  font-size: 22px;\n  font-weight: bold;\n  font-family: \"Oswald\";\n"])));
var DocumentType = styled.Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  text-align: right;\n  font-size: 10px;\n  font-weight: bold;\n  color: ", ";\n  text-transform: uppercase;\n  font-family: \"Oswald Medium\";\n"], ["\n  text-align: right;\n  font-size: 10px;\n  font-weight: bold;\n  color: ", ";\n  text-transform: uppercase;\n  font-family: \"Oswald Medium\";\n"])), Colors.GRAY3);
var DefaultTextLabel = styled.Text(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 9px;\n  line-height: 1.3;\n  font-family: \"Oswald Light\";\n"], ["\n  font-size: 9px;\n  line-height: 1.3;\n  font-family: \"Oswald Light\";\n"])));
var DefaultTextValue = styled.Text(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 9px;\n  line-height: 1.3;\n  font-family: \"Oswald\";\n"], ["\n  font-size: 9px;\n  line-height: 1.3;\n  font-family: \"Oswald\";\n"])));
var DefaultText = styled.Text(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 9px;\n  line-height: 1.3;\n  font-family: \"Oswald Light\";\n"], ["\n  font-size: 9px;\n  line-height: 1.3;\n  font-family: \"Oswald Light\";\n"])));
var TableHeaderItem = styled.Text(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 8px;\n  text-transform: uppercase;\n  font-family: \"Oswald Medium\";\n  color: ", ";\n"], ["\n  font-size: 8px;\n  text-transform: uppercase;\n  font-family: \"Oswald Medium\";\n  color: ", ";\n"])), Colors.GRAY3);
var TableHeader = styled.Text(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-size: 8px;\n  text-transform: uppercase;\n  text-align: right;\n  font-family: \"Oswald Medium\";\n  color: ", ";\n"], ["\n  font-size: 8px;\n  text-transform: uppercase;\n  text-align: right;\n  font-family: \"Oswald Medium\";\n  color: ", ";\n"])), Colors.GRAY3);
var TableCellItem = styled.Text(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 9px;\n  text-transform: uppercase;\n  text-align: left;\n  font-family: \"Oswald\";\n"], ["\n  font-size: 9px;\n  text-transform: uppercase;\n  text-align: left;\n  font-family: \"Oswald\";\n"])));
var TableCell = styled.Text(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  font-size: 9px;\n  text-align: right;\n  font-family: \"Oswald Light\";\n"], ["\n  font-size: 9px;\n  text-align: right;\n  font-family: \"Oswald Light\";\n"])));
var styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
var PER_PAGE = 33;
export default function OrderPrinter(_a) {
    var document = _a.document;
    var paymentMethod = PatternApp.getPaymentMethod(document.paymentMethod);
    var currency = PatternApp.getCurrency(document.currency);
    var renderHeader = function (page) {
        return React.createElement(Row, { key: "header-" + page, style: { marginLeft: '12mm', marginRight: '12mm', marginTop: '12mm', marginBottom: '2mm', paddingBottom: 4, borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3, } },
            React.createElement(Column, { style: { flex: 6 } },
                React.createElement(TableHeaderItem, null,
                    t('title'),
                    " / ",
                    t('code'))),
            React.createElement(Column, { style: { flex: 3 } },
                React.createElement(TableHeader, { align: "right" }, t('unitPriceNoVat'))),
            React.createElement(Column, { style: { flex: 2 } },
                React.createElement(TableHeader, { align: "right" }, t('quantity'))),
            React.createElement(Column, { style: { flex: 3 } },
                React.createElement(TableHeader, { align: "right" }, t('linePriceNoVat'))),
            PatternApp.settings.orders.showVat &&
                React.createElement(React.Fragment, null,
                    React.createElement(Column, { style: { flex: 2 } },
                        React.createElement(TableHeader, { align: "right" }, t('vat'))),
                    React.createElement(Column, { style: { flex: 2 } },
                        React.createElement(TableHeader, { align: "right" }, t('vatPrice'))),
                    React.createElement(Column, { style: { flex: 3 } },
                        React.createElement(TableHeader, { align: "right" }, t('linePriceWithVat')))));
    };
    var getPages = function () {
        var rows = document.items.map(function (item) { return item.code.length > 0 ? 2 : 1; }).reduce(function (acc, next) { return acc += next; }, 0);
        var perPager = (rows - 36) / 63;
        return rows < 37 ? 1 : (Math.floor(perPager) === perPager ? perPager + 1 : Math.floor(perPager) + 2);
    };
    var renderItems = function (from, to) {
        return document.items.slice(from, to).map(function (item, index) {
            var itemRow = React.createElement(Row, { key: "item-" + index, style: { paddingLeft: '12mm', paddingRight: '12mm' } },
                React.createElement(Column, { style: { flex: 6 } },
                    React.createElement(TableCellItem, { style: { textAlign: 'left' } }, item.name)),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(TableCell, { align: "right" }, PatternApp.format.price(item.price, currency))),
                React.createElement(Column, { style: { flex: 2 } },
                    React.createElement(TableCell, { align: "right" },
                        item.quantity,
                        " ",
                        item.unit)),
                React.createElement(Column, { style: { flex: 3 } },
                    React.createElement(TableCell, { align: "right" }, PatternApp.format.price(item.linePriceWithVat, currency))),
                PatternApp.settings.orders.showVat &&
                    React.createElement(React.Fragment, null,
                        React.createElement(Column, { style: { flex: 2 } },
                            React.createElement(TableCell, { align: "right" },
                                item.vat,
                                " %")),
                        React.createElement(Column, { style: { flex: 2 } },
                            React.createElement(TableCell, { align: "right" }, PatternApp.format.price(item.vatPrice, currency))),
                        React.createElement(Column, { style: { flex: 3 } },
                            React.createElement(TableCell, { style: { fontFamily: "Oswald" }, align: "right" }, PatternApp.format.price(item.linePriceWithVat, currency)))));
            var itemRows = [];
            itemRows.push(itemRow);
            if (item.code && item.code.length > 0) {
                itemRows.push(React.createElement(Row, { key: "item-code-" + index, style: { paddingLeft: '12mm', paddingRight: '12mm' } },
                    React.createElement(TableCellItem, { style: { fontFamily: 'Oswald', fontSize: 9, color: Colors.GRAY3 } }, item.code)));
            }
            return React.createElement(React.Fragment, { key: "item-fragment-" + index }, itemRows);
        });
    };
    var renderVatRecap = function (currency) {
        var header = document.vats.length > 0 ?
            React.createElement(Row, { style: { flex: 1, marginTop: 24 } },
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
        return React.createElement(Row, { style: { flex: 1, height: 42, alignItems: 'center' } },
            React.createElement(Column, { style: { flex: 14 } },
                React.createElement(TableHeader, { style: { marginRight: 6 } }, t('total'))),
            React.createElement(Column, { style: { flex: 7 } },
                React.createElement(Text, { style: {
                        fontSize: 11,
                        fontFamily: 'Oswald',
                        textAlign: 'right',
                        backgroundColor: Colors.LIGHT_GRAY4
                    } }, PatternApp.format.price(PatternApp.settings.orders.showVat ?
                    document.itemsTotalWithVat : document.itemsTotal, currency))));
    };
    var renderHead = function () {
        return React.createElement(Column, null,
            React.createElement(Header, null,
                React.createElement(Logo, null,
                    React.createElement(Image, { src: PatternApp.settings.logo, style: { width: '40mm', marginTop: 10 } })),
                React.createElement(View, { style: { flex: 4 } },
                    React.createElement(HeaderCode, null, document.name || t('order.new')),
                    React.createElement(DocumentType, null,
                        t('order.type'),
                        " ",
                        document.code || t('order.new')))),
            React.createElement(Contacts, null,
                React.createElement(View, { style: { flex: 1, marginRight: 20 } },
                    React.createElement(Text, null)),
                React.createElement(View, { style: { flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20, paddingTop: 6 } },
                    React.createElement(Text, { style: { fontSize: 9, fontWeight: 'bold', fontFamily: 'Oswald Medium', color: Colors.GRAY3 } }, t('vendor')),
                    React.createElement(ContactForm, { contact: document.vendor, simple: false })),
                React.createElement(View, { style: { flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingTop: 6 } },
                    React.createElement(Text, { style: { fontSize: 9, fontWeight: 'bold', fontFamily: 'Oswald Medium', color: Colors.GRAY3 } }, t('customer')),
                    React.createElement(ContactForm, { contact: document.customer, simple: false }))),
            React.createElement(Contacts, null,
                React.createElement(View, { style: { flex: 1, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20, paddingTop: 6 } },
                    React.createElement(DefaultTextLabel, null, t('datePosted')),
                    React.createElement(DefaultTextLabel, null, t('dateDelivered'))),
                React.createElement(View, { style: { flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20, paddingTop: 6 } },
                    React.createElement(DefaultTextValue, null, PatternApp.format.date(document.createdAt)),
                    React.createElement(DefaultTextValue, null, PatternApp.format.date(document.deliveryDate))),
                React.createElement(View, { style: { flex: 2, flexDirection: 'row', borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingTop: 6 } },
                    React.createElement(View, { style: { flex: 1, flexDirection: 'column' } },
                        React.createElement(DefaultTextLabel, null, t('paymentMethod')),
                        paymentMethod.code === PaymentMethod.bankTransfer.code &&
                            React.createElement(React.Fragment, null,
                                React.createElement(DefaultTextLabel, null, t('bank')),
                                React.createElement(DefaultTextLabel, null, t('bankAccount')),
                                React.createElement(DefaultTextLabel, null, t('variableSymbol')),
                                React.createElement(DefaultTextLabel, null, t('constantSymbol')))),
                    React.createElement(View, { style: { flex: 1, flexDirection: 'column' } },
                        React.createElement(DefaultTextValue, null, paymentMethod.title),
                        paymentMethod.code === PaymentMethod.bankTransfer.code &&
                            React.createElement(React.Fragment, null,
                                React.createElement(DefaultTextValue, null, PatternApp.settings.bank.name),
                                React.createElement(DefaultTextValue, null, PatternApp.settings.bank.account),
                                React.createElement(DefaultTextValue, null, document.code),
                                React.createElement(DefaultTextValue, null, "308"))))));
    };
    var renderEnding = function (page) {
        return React.createElement(React.Fragment, { key: "ending" },
            React.createElement(Row, { style: { marginLeft: '12mm', marginRight: '12mm' } },
                React.createElement(Column, { style: { paddingTop: 24, flex: 1 } },
                    PatternApp.settings.orders.showVat && renderVatRecap(currency),
                    renderTotal(currency))),
            React.createElement(Row, { style: { paddingTop: 12, marginTop: 0, marginBottom: 0, marginLeft: '12mm' } },
                React.createElement(DefaultText, null, document.note)),
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
            React.createElement(Text, { style: { flex: 1, textAlign: 'left' }, key: "footer-page-company-" + page }, PatternApp.settings.company.name),
            React.createElement(Text, { fixed: true, style: { flex: 1, textAlign: 'right' }, key: "footer-page-" + page, render: function (_a) {
                    var pageNumber = _a.pageNumber, totalPages = _a.totalPages;
                    console.log('pag', pageNumber, 'total', totalPages);
                    return t('page') + " " + pageNumber + " / " + totalPages;
                } })); };
        if (document.items.length <= 18) {
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
                renderItems(0, 18),
                footer(0)));
        }
        var items = document.items.slice(18, document.items.length);
        var itemPages = Math.ceil(items.length / PER_PAGE);
        for (var i = 0; i < itemPages; i++) {
            var isLast = i + 1 === itemPages;
            var remaining = items.length - (i * PER_PAGE);
            var from = 18 + i * PER_PAGE;
            var to = isLast ? 18 + (i * PER_PAGE) + remaining : 18 + (i + 1) * PER_PAGE;
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
//# sourceMappingURL=order_printer.js.map