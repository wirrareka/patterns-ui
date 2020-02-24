import React from 'react';
import { Button, Classes, ControlGroup, FormGroup, Intent, Radio, RadioGroup } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import { FlexColumn, FlexRow } from '../../../components';
import { Filter } from '../components';
import { t } from '../../../locale_manager';
export default function DateFilter(_a) {
    var column = _a.column, filterState = _a.filterState, setFilterValue = _a.setFilterValue, setFilterActive = _a.setFilterActive, setFilterComparator = _a.setFilterComparator;
    var getValue = function (secondary) {
        if (filterState.comparator === 'range') {
            if (Array.isArray(filterState.value)) {
                return filterState.value[secondary ? 1 : 0];
            }
            else {
                return filterState.value;
            }
        }
        else {
            return filterState.value || new Date();
        }
    };
    var comparator = filterState.comparator;
    return React.createElement(Filter, null,
        React.createElement(FlexColumn, { flex: 1 },
            React.createElement(FlexRow, { style: { height: 30, justifyContent: 'center' } },
                React.createElement(ControlGroup, null,
                    React.createElement(FormGroup, { style: { marginRight: 12 } },
                        React.createElement(DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, placeholder: comparator === 'range' ? t('range_from') : t('day'), value: getValue(false), onChange: function (date, isUserChange) { return setFilterValue(column, date); } })),
                    comparator === 'range' &&
                        React.createElement(FormGroup, { style: { marginRight: 12 } },
                            React.createElement(DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, placeholder: t('range_to'), value: getValue(true), onChange: function (date, isUserChange) { return setFilterValue(column, date, true); } }))),
                React.createElement(Button, { minimal: true, intent: Intent.DANGER, className: Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, false); }, icon: "cross" }),
                React.createElement(Button, { minimal: true, intent: Intent.SUCCESS, className: Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, true); }, icon: "tick" })),
            React.createElement(FlexRow, { style: { fontSize: 12, justifyContent: 'start', paddingTop: 6, paddingLeft: 6, marginTop: 6 } },
                React.createElement(RadioGroup, { selectedValue: comparator, onChange: function (evt) { return setFilterComparator(column, evt.currentTarget.value); } },
                    React.createElement(Radio, { label: t('at_day'), value: "eq" }),
                    React.createElement(Radio, { label: t('older_than'), value: "lte" }),
                    React.createElement(Radio, { label: t('newer_than'), value: "gte" }),
                    React.createElement(Radio, { label: t('range'), value: "range" })))));
}
//# sourceMappingURL=date-filter.js.map