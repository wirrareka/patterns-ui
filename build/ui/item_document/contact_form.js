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
import React from 'react';
import { Button, InputGroup, MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';
import { FlexColumn as Column, FlexRow as Row } from '../../components';
import { AddressBoxContainer, AddressBoxHeader, AddressBoxName, AddressBoxOther, AddressBoxVatValue as VatValue, AddressBoxVatLabel as VatLabel } from './components';
import { Contact } from '../../models';
import { t } from '../../locale_manager';
var ContactSuggest = Suggest.ofType();
var ContactForm = /** @class */ (function (_super) {
    __extends(ContactForm, _super);
    function ContactForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            query: '',
            results: [],
        };
        _this.renderSuggestItem = _this.renderSuggestItem.bind(_this);
        return _this;
    }
    ContactForm.prototype.renderSuggestItem = function (contact, options) {
        return React.createElement(MenuItem, { key: "contact-" + contact.id, text: contact.getName(), onClick: options.handleClick });
    };
    ContactForm.prototype.renderSuggest = function () {
        var _this = this;
        var newItem = function (click) { return React.createElement(MenuItem, { intent: "success", icon: "plus", text: "Nov\u00FD klient", onClick: click }); };
        return React.createElement(Row, null,
            React.createElement(ContactSuggest, { fill: true, className: "suggest-minimal patterns-contact-form-suggest", items: this.state.results, inputValueRenderer: function (contact) { return contact.name || contact.fullName; }, itemRenderer: this.renderSuggestItem, onItemSelect: function (item) { return _this.props.onReplace(item); }, query: this.state.query, selectedItem: this.props.contact, createNewItemFromQuery: function (query) { return new Contact({ name: query }); }, createNewItemRenderer: function (query, active, handleClick) { return newItem(handleClick); }, noResults: React.createElement(MenuItem, { text: t('noResults') }), onQueryChange: function (query) { return __awaiter(_this, void 0, void 0, function () {
                    var results;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.setState({ query: query })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.props.fetch(query)];
                            case 2:
                                results = _a.sent();
                                return [4 /*yield*/, this.setState({ results: results })];
                            case 3:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); } }),
            React.createElement(Button, { minimal: true, style: { width: 30 }, icon: "cross", onClick: function () { return _this.setState({ results: [], query: '' }); } }));
    };
    ContactForm.prototype.renderName = function () {
        var _this = this;
        return React.createElement(AddressBoxName, null, !this.props.disabled ?
            this.renderSuggest()
            :
                React.createElement("div", { className: "suggest-minimal patterns-contact-form-suggest" },
                    React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.name, onChange: function (evt) { return _this.props.onChange('name', evt.currentTarget.value); }, placeholder: t('name') })));
    };
    ContactForm.prototype.render = function () {
        var _this = this;
        return React.createElement(AddressBoxContainer, null,
            React.createElement(AddressBoxHeader, null, this.props.header),
            this.renderName(),
            React.createElement(AddressBoxOther, null,
                React.createElement(Column, null,
                    React.createElement(Row, { style: { height: 26 } },
                        React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.street, onChange: function (evt) { return _this.props.onChange('street', evt.currentTarget.value); }, placeholder: t('street') })),
                    (!this.props.disabled || this.props.contact.street2.length > 0) &&
                        React.createElement(Row, { style: { height: 26 } },
                            React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.street2, onChange: function (evt) { return _this.props.onChange('street2', evt.currentTarget.value); }, placeholder: t('street2') })),
                    this.props.disabled && (this.props.contact.street2.length === 0) && React.createElement(Row, { style: { height: 26 } })),
                React.createElement(Row, { style: { height: 26 } },
                    React.createElement(VatLabel, { style: { flex: 1 } },
                        React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.zip, onChange: function (evt) { return _this.props.onChange('zip', evt.currentTarget.value); }, placeholder: t('zip') })),
                    React.createElement(VatValue, { style: { flex: 3 } },
                        React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.city, onChange: function (evt) { return _this.props.onChange('city', evt.currentTarget.value); }, placeholder: t('city') }))),
                React.createElement(Row, { style: { height: 26 } },
                    React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.country, onChange: function (evt) { return _this.props.onChange('country', evt.currentTarget.value); }, placeholder: t('country') }))),
            React.createElement(Row, { flex: 1 },
                React.createElement(Column, { flex: 11, style: { marginTop: 14 } },
                    (!this.props.disabled || this.props.contact.businessId.length > 0) &&
                        React.createElement(Row, { flex: 1 },
                            React.createElement(VatLabel, null, "I\u010CO:"),
                            React.createElement(VatValue, { style: { flex: 3 } },
                                React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.businessId, onChange: function (evt) { return _this.props.onChange('businessId', evt.currentTarget.value); }, placeholder: t('businessId') }))),
                    (!this.props.disabled || this.props.contact.vatPayerId.length > 0) &&
                        React.createElement(Row, null,
                            React.createElement(VatLabel, null, "DI\u010C:"),
                            React.createElement(VatValue, { style: { flex: 3 } },
                                React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.vatPayerId, onChange: function (evt) { return _this.props.onChange('vatPayerId', evt.currentTarget.value); }, placeholder: t('vatPayerId') }))),
                    (!this.props.disabled || this.props.contact.vatId.length > 0) &&
                        React.createElement(Row, null,
                            React.createElement(VatLabel, null, "I\u010C DPH:"),
                            React.createElement(VatValue, { style: { flex: 3 } },
                                React.createElement(InputGroup, { fill: true, disabled: this.props.disabled, value: this.props.contact.vatId, onChange: function (evt) { return _this.props.onChange('vatId', evt.currentTarget.value); }, placeholder: t('vatId') }))))));
    };
    return ContactForm;
}(React.Component));
export default ContactForm;
//# sourceMappingURL=contact_form.js.map