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
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { t } from '../locale_manager';
var styles = StyleSheet.create({
    addressLine: {
        fontSize: 9,
        fontFamily: 'Oswald Light'
    },
    contactLine: {
        fontSize: 8,
        fontFamily: 'Oswald Light'
    },
    nameLine: {
        fontSize: 11,
        lineHeight: 1.6,
        fontFamily: 'Oswald'
    }
});
export default function ContactForm(_a) {
    var contact = _a.contact, simple = _a.simple;
    return React.createElement(View, { style: { flexDirection: 'column', marginTop: 0 } },
        React.createElement(View, { style: { flexDirection: 'column' } },
            React.createElement(Text, { style: styles.nameLine }, contact.name),
            React.createElement(Text, { style: styles.addressLine }, contact.street),
            React.createElement(Text, { style: styles.addressLine }, contact.street2),
            React.createElement(View, { style: { flexDirection: 'row' } },
                React.createElement(Text, { style: __assign(__assign({}, styles.addressLine), { flex: 1, marginRight: 10 }) }, contact.zip),
                React.createElement(Text, { style: __assign(__assign({}, styles.addressLine), { flex: 3 }) }, contact.city)),
            React.createElement(Text, { style: styles.addressLine }, contact.country)),
        !simple && React.createElement(View, { style: { flexDirection: 'row', marginTop: 6 } },
            React.createElement(View, { style: { flexDirection: 'column', flex: 1 } },
                React.createElement(Text, { style: styles.addressLine }, t('businessId')),
                React.createElement(Text, { style: styles.addressLine }, t('vatPayerId')),
                React.createElement(Text, { style: styles.addressLine }, t('vatId'))),
            React.createElement(View, { style: { flexDirection: 'column', flex: 3 } },
                React.createElement(Text, { style: styles.addressLine }, contact.businessId),
                React.createElement(Text, { style: styles.addressLine }, contact.vatPayerId),
                React.createElement(Text, { style: styles.addressLine }, contact.vatId))),
        false && simple && React.createElement(View, { style: { flexDirection: 'row', marginTop: 6 } },
            React.createElement(View, { style: { flexDirection: 'column', flex: 1 } },
                React.createElement(Text, { style: styles.contactLine }, "www.gargo.sk"),
                React.createElement(Text, { style: styles.contactLine }, "gargo@gargo.sk"),
                React.createElement(View, { style: { flexDirection: 'row' } },
                    React.createElement(Text, { style: __assign(__assign({}, styles.contactLine), { flex: 1 }) }, "telef\u00F3n predaj\u0148a"),
                    React.createElement(Text, { style: __assign(__assign({}, styles.contactLine), { flex: 1 }) }, "0905 909 815")),
                React.createElement(View, { style: { flexDirection: 'row' } },
                    React.createElement(Text, { style: __assign(__assign({}, styles.contactLine), { flex: 1 }) }, "telef\u00F3n predaj\u0148a"),
                    React.createElement(Text, { style: __assign(__assign({}, styles.contactLine), { flex: 1 }) }, "0911 109 785")))));
}
//# sourceMappingURL=contact_form.js.map