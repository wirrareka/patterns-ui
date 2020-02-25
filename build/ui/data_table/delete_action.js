import React from 'react';
import { Button } from '@blueprintjs/core';
import { t } from '../../locale_manager';
export default function DeleteAction(_a) {
    var disabled = _a.disabled, onClick = _a.onClick;
    return React.createElement(Button, { disabled: disabled, text: t('delete'), icon: "trash", intent: "danger", small: true, className: "patterns-data-table-action", onClick: onClick });
}
//# sourceMappingURL=delete_action.js.map