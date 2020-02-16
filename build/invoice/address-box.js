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
import React, { useState, useEffect } from 'react';
import { Button, InputGroup, MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';
import { FlexColumn as Column, FlexRow as Row } from '../components';
import { AddressBoxContainer, AddressBoxHeader, AddressBoxName, AddressBoxOther, AddressBoxVatValue as VatValue, AddressBoxVatLabel as VatLabel } from './components';
import Contact from '../models/contact';
var ContactSuggest = Suggest.ofType();
export default function AddressBox(_a) {
    var _this = this;
    var contact = _a.contact, header = _a.header, onChange = _a.onChange, fetch = _a.fetch, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var _c = useState([]), results = _c[0], setResults = _c[1];
    var _d = useState(''), query = _d[0], setQuery = _d[1];
    console.log('contact changed', contact);
    useEffect(function () {
        setQuery(contact.name.length > 0 ? contact.name : contact.fullName);
    }, [contact]);
    var update = function (field, value) { return __awaiter(_this, void 0, void 0, function () {
        var clone, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('update', value);
                    clone = new Contact(contact.clone);
                    clone[field] = value;
                    if (!(field === 'name')) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(value)];
                case 1:
                    items = _a.sent();
                    setResults(items);
                    _a.label = 2;
                case 2:
                    onChange(clone);
                    return [2 /*return*/];
            }
        });
    }); };
    var inputUpdate = function (evt) {
        console.log('on input update');
        var clone = new Contact(contact.clone);
        clone[evt.currentTarget.name] = evt.currentTarget.value;
        onChange(clone);
    };
    var onSelect = function (contact) {
        console.log('on select');
        var clone = new Contact(contact.clone);
        onChange(clone);
    };
    return React.createElement(AddressBoxContainer, null,
        React.createElement(AddressBoxHeader, null, header),
        React.createElement(AddressBoxName, null, !disabled ?
            React.createElement(Row, null,
                React.createElement(ContactSuggest, { fill: true, className: "suggest-minimal", items: results, inputValueRenderer: function (contact) { return contact.name || contact.fullName; }, itemRenderer: function (contact, options) { return React.createElement(MenuItem, { key: "contact-" + contact.id, text: contact.name.length > 0 ? contact.name : contact.fullName, onClick: options.handleClick }); }, onItemSelect: function (contact) { return onSelect(contact); }, query: query, selectedItem: contact, onQueryChange: function (query) { return update('name', query); }, noResults: React.createElement(MenuItem, { icon: "plus", text: "Nov\u00FD klient" }) }),
                React.createElement(Button, { minimal: true, style: { width: 30 }, icon: "cross", onClick: function () {
                        setResults([new Contact({})]);
                        setQuery('');
                        onChange(new Contact({}));
                    } }))
            :
                React.createElement("div", { className: "suggest-minimal" },
                    React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.name, name: "name", onChange: inputUpdate, placeholder: "Meno" }))),
        React.createElement(AddressBoxOther, null,
            React.createElement(Column, null,
                React.createElement(Row, { style: { height: 26 } },
                    React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.street, name: "street", onChange: inputUpdate, placeholder: "Ulica" })),
                (!disabled || contact.street2.length > 0) &&
                    React.createElement(Row, { style: { height: 26 } },
                        React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.street2, name: "street2", onChange: inputUpdate, placeholder: "Ulica 2" })),
                disabled && (contact.street2.length === 0) && React.createElement(Row, { style: { height: 26 } })),
            React.createElement(Row, { style: { height: 26 } },
                React.createElement("div", { style: { flex: 1 } },
                    React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.zip, name: "zip", onChange: inputUpdate, placeholder: "PS\u010C" })),
                React.createElement("div", { style: { flex: 4 } },
                    React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.city, name: "city", onChange: inputUpdate, placeholder: "Mesto" }))),
            React.createElement(Row, { style: { height: 26 } },
                React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.country, name: "country", onChange: inputUpdate, placeholder: "Krajina" }))),
        React.createElement(Row, null,
            React.createElement(Column, { style: { flex: 1, marginTop: 14 } },
                (!disabled || contact.business_id.length > 0) &&
                    React.createElement(Row, null,
                        React.createElement(VatLabel, null, "I\u010CO:"),
                        React.createElement(VatValue, null,
                            React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.business_id, name: "business_id", onChange: inputUpdate, placeholder: "I\u010CO" }))),
                (!disabled || contact.vat_payer_id.length > 0) &&
                    React.createElement(Row, null,
                        React.createElement(VatLabel, null, "DI\u010C:"),
                        React.createElement(VatValue, null,
                            React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.vat_payer_id, name: "vat_payer_id", onChange: inputUpdate, placeholder: "DI\u010C" }))),
                (!disabled || contact.vat_id.length > 0) &&
                    React.createElement(Row, null,
                        React.createElement(VatLabel, null, "I\u010C DPH:"),
                        React.createElement(VatValue, null,
                            React.createElement(InputGroup, { fill: true, disabled: disabled, value: contact.vat_payer_id, name: "vat_id", onChange: inputUpdate, placeholder: "I\u010C DPH" }))))));
}
//# sourceMappingURL=address-box.js.map