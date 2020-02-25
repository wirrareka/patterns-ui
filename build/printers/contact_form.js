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
var styles = StyleSheet.create({
    addressLine: {
        fontSize: 8,
        fontFamily: 'Oswald Light'
    },
    nameLine: {
        fontSize: 10,
        lineHeight: 1.6,
        fontFamily: 'Oswald'
    }
});
export default function ContactForm(_a) {
    var contact = _a.contact;
    return React.createElement(View, { style: { flexDirection: 'column', marginTop: 4 } },
        React.createElement(View, { style: { flexDirection: 'column', height: 56 } },
            React.createElement(Text, { style: styles.nameLine }, contact.name),
            React.createElement(Text, { style: styles.addressLine }, contact.street),
            React.createElement(Text, { style: styles.addressLine }, contact.street2),
            React.createElement(View, { style: { flexDirection: 'row' } },
                React.createElement(Text, { style: __assign(__assign({}, styles.addressLine), { flex: 1, marginRight: 10 }) }, contact.zip),
                React.createElement(Text, { style: __assign(__assign({}, styles.addressLine), { flex: 3 }) }, contact.city)),
            React.createElement(Text, { style: styles.addressLine }, contact.country)),
        React.createElement(View, { style: { flexDirection: 'row', marginTop: 12 } },
            React.createElement(View, { style: { flexDirection: 'column', flex: 1 } },
                React.createElement(Text, { style: styles.addressLine }, "I\u010CO"),
                React.createElement(Text, { style: styles.addressLine }, "DI\u010C"),
                React.createElement(Text, { style: styles.addressLine }, "I\u010C DPH")),
            React.createElement(View, { style: { flexDirection: 'column', flex: 3 } },
                React.createElement(Text, { style: styles.addressLine }, contact.businessId),
                React.createElement(Text, { style: styles.addressLine }, contact.vatPayerId),
                React.createElement(Text, { style: styles.addressLine }, contact.vatId))));
}
//# sourceMappingURL=contact_form.js.map