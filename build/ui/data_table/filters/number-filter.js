import React from 'react';
import { Button, Classes, ControlGroup, FormGroup, InputGroup, Intent, Radio, RadioGroup } from '@blueprintjs/core';
import { FlexColumn, FlexRow } from '../../../components';
import { Filter } from '../components';
import { t } from '../../../locale_manager';
export default function NumberFilter(_a) {
    var column = _a.column, filterState = _a.filterState, setFilterValue = _a.setFilterValue, setFilterActive = _a.setFilterActive, setFilterComparator = _a.setFilterComparator;
    var getValue = function (secondary) {
        if (filterState.comparator === 'range') {
            if (Array.isArray(filterState.value)) {
                return filterState.value[secondary ? 1 : 0].toString();
            }
            else {
                if (secondary) {
                    return '0';
                }
                else {
                    return filterState.value.toString();
                }
            }
        }
        else {
            return filterState.value.toString() || '0';
        }
    };
    return React.createElement(Filter, null,
        React.createElement(FlexColumn, { flex: 1 },
            React.createElement(FlexRow, { style: { height: 30, justifyContent: 'center' } },
                React.createElement(ControlGroup, null,
                    React.createElement(FormGroup, { style: { marginRight: 12 } },
                        React.createElement(InputGroup, { placeholder: filterState.comparator === 'range' ? t('range_from') : t('value'), value: getValue(false), onChange: function (evt) { return setFilterValue(column, parseFloat(evt.currentTarget.value)); } })),
                    filterState.comparator === 'range' &&
                        React.createElement(FormGroup, null,
                            React.createElement(InputGroup, { placeholder: t('range_to'), value: getValue(true), onChange: function (evt) { return setFilterValue(column, parseFloat(evt.currentTarget.value), true); } }))),
                React.createElement(Button, { minimal: true, intent: Intent.DANGER, className: Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, false); }, icon: "cross" }),
                React.createElement(Button, { minimal: true, intent: Intent.SUCCESS, className: Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, true); }, icon: "tick" })),
            React.createElement(FlexRow, { style: { fontSize: 12, justifyContent: 'start', paddingTop: 6, paddingLeft: 6, marginTop: 6 } },
                React.createElement(RadioGroup, { selectedValue: filterState.comparator, onChange: function (evt) { return setFilterComparator(column, evt.currentTarget.value); } },
                    React.createElement(Radio, { label: t('equal'), value: "eq" }),
                    React.createElement(Radio, { label: t('less_than'), value: "lte" }),
                    React.createElement(Radio, { label: t('greater_than'), value: "gte" }),
                    React.createElement(Radio, { label: t('range'), value: "range" })))));
}
//# sourceMappingURL=number-filter.js.map