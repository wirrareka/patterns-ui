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
import { Button, Classes, Dialog, NonIdealState } from '@blueprintjs/core';
import { FlexRow } from '../../components';
import PatternApp from '../../pattern_app';
import { t } from '../../locale_manager';
var Confirm = /** @class */ (function (_super) {
    __extends(Confirm, _super);
    function Confirm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false,
            icon: 'help'
        };
        _this.onConfirm = _this.onConfirm.bind(_this);
        return _this;
    }
    Confirm.prototype.componentDidMount = function () {
        PatternApp.observe(this.onConfirm);
    };
    Confirm.prototype.componentWillUnmount = function () {
        PatternApp.cancel(this.onConfirm);
    };
    Confirm.prototype.onConfirm = function (event, data) {
        if (event !== PatternApp.Events.Confirm)
            return;
        if (!data) {
            console.info('cannot notify, data object not present');
            return;
        }
        this.setState({
            isOpen: true,
            title: data.title,
            description: data.description,
            action: data.action,
            icon: data.icon || 'help'
        });
    };
    Confirm.prototype.render = function () {
        var _this = this;
        return React.createElement(Dialog, { isOpen: this.state.isOpen, onClose: function () { return _this.setState({ isOpen: false }); } },
            React.createElement("div", { className: Classes.DIALOG_BODY },
                React.createElement(NonIdealState, { icon: this.state.icon, title: this.state.title, description: this.state.description, action: React.createElement(FlexRow, null,
                        React.createElement(Button, { icon: "cross", text: t('cancel'), minimal: true, style: { marginRight: 12 }, onClick: function () { return _this.setState({ isOpen: false }); } }),
                        React.createElement("div", { onClick: function (evt) { return _this.setState({ isOpen: false }); } }, this.state.action)) })));
    };
    return Confirm;
}(React.Component));
export default Confirm;
//# sourceMappingURL=confirm.js.map