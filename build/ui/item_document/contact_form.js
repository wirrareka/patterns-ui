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
import React from 'react';
import { Button, InputGroup, MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';
import { FlexColumn as Column, FlexRow as Row } from '../../components';
import { AddressBoxContainer, AddressBoxHeader, AddressBoxName, AddressBoxOther, AddressBoxVatValue as VatValue, AddressBoxVatLabel as VatLabel } from './components';
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
        return React.createElement(MenuItem, { key: "contact-" + this.props.contact.id, text: this.props.contact.name.length > 0 ? contact.name : contact.fullName, onClick: options.handleClick });
    };
    ContactForm.prototype.renderSuggest = function () {
        var _this = this;
        return React.createElement(Row, null,
            React.createElement(ContactSuggest, { fill: true, className: "suggest-minimal patterns-contact-form-suggest", items: this.state.results, inputValueRenderer: function (contact) { return contact.name || contact.fullName; }, itemRenderer: this.renderSuggestItem, onItemSelect: this.props.onReplace, query: this.state.query, selectedItem: this.props.contact, onQueryChange: function (query) { return _this.props.onChange('name', query); }, noResults: React.createElement(MenuItem, { icon: "plus", text: "Nov\u00FD klient" }) }),
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