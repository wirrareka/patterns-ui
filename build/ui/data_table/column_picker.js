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
import * as React from 'react';
import { Button, Checkbox, Icon, Popover, PopoverInteractionKind, PopoverPosition } from '@blueprintjs/core';
import { FlexColumn } from '../../components';
var ColumnPicker = /** @class */ (function (_super) {
    __extends(ColumnPicker, _super);
    function ColumnPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnPicker.ofType = function () {
        return ColumnPicker;
    };
    ColumnPicker.prototype.renderColumns = function () {
        var _this = this;
        return this.props.columns.map(function (column) { return React.createElement(Checkbox, { key: "datatable-column-picker-checkbox-" + column.id, label: column.title, checked: column.visible || false, onChange: function (evt) {
                _this.props.onChange(column, evt.currentTarget.checked);
            } }); });
    };
    ColumnPicker.prototype.render = function () {
        return React.createElement(Popover, { interactionKind: PopoverInteractionKind.CLICK, position: PopoverPosition.BOTTOM_RIGHT },
            React.createElement(Button, { minimal: true, icon: React.createElement(Icon, { icon: "settings" }) }),
            React.createElement("div", { className: "patterns-data-table-column-picker" },
                React.createElement(FlexColumn, { style: { padding: 6, paddingRight: 12 } },
                    React.createElement("strong", { style: { marginBottom: 12 } }, "V\u00FDber st\u013Apcov"),
                    this.renderColumns())));
    };
    return ColumnPicker;
}(React.Component));
export default ColumnPicker;
//# sourceMappingURL=column_picker.js.map