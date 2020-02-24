import React from 'react';
import { Button, Classes, FormGroup, InputGroup, Intent, Radio, RadioGroup } from '@blueprintjs/core';
import { FlexColumn, FlexRow } from '../../../components';
import { Filter } from '../components';
import { t } from '../../../locale_manager';
export default function TextFilter(_a) {
    var column = _a.column, filterState = _a.filterState, setFilterValue = _a.setFilterValue, setFilterActive = _a.setFilterActive, setFilterComparator = _a.setFilterComparator;
    return React.createElement(Filter, null,
        React.createElement(FlexColumn, { flex: 1 },
            React.createElement(FlexRow, { style: { height: 30, justifyContent: 'center' } },
                React.createElement(FormGroup, { style: { marginRight: 12 } },
                    React.createElement(InputGroup, { placeholder: "Filter...", value: filterState.value || '', onChange: function (evt) { return setFilterValue(column, evt.currentTarget.value); } })),
                React.createElement(Button, { minimal: true, intent: Intent.DANGER, className: Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, false); }, icon: "cross" }),
                React.createElement(Button, { minimal: true, intent: Intent.SUCCESS, className: Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, true); }, icon: "tick" })),
            React.createElement(FlexRow, { style: { fontSize: 12, justifyContent: 'start', paddingTop: 6, paddingLeft: 6, marginTop: 6 } },
                React.createElement(RadioGroup, { selectedValue: filterState.comparator, onChange: function (evt) { return setFilterComparator(column, evt.currentTarget.value); } },
                    React.createElement(Radio, { label: t('contains'), value: "contains" }),
                    React.createElement(Radio, { label: t('starts_with'), value: "starts_with" }),
                    React.createElement(Radio, { label: t('ends_with'), value: "ends_with" })))));
}
//# sourceMappingURL=text-filter.js.map