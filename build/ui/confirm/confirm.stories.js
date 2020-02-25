import React, { useState } from "react";
import { Button } from '@blueprintjs/core';
import Confirm from './confirm';
import DeleteAction from "../data_table/delete_action";
import PatternApp from '../../pattern_app';
export default {
    title: "Confirm"
};
export var AllFeatures = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    return React.createElement("div", null,
        React.createElement(Button, { title: "menu", text: "Show Confirm", onClick: function () { return PatternApp.confirm('Are you sure?', 'Here comes the action description to ensure the user in decision', React.createElement(DeleteAction, { disabled: false, onClick: function () { setIsOpen(false); } })); } }),
        React.createElement(Confirm, null));
};
//# sourceMappingURL=confirm.stories.js.map