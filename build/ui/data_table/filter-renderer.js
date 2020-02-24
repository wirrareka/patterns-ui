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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import produce from 'immer';
import { ColumnType } from '../../types';
import TextFilter from './filters/text-filter';
import NumberFilter from './filters/number-filter';
import DateFilter from './filters/number-filter';
var FilterRenderer = /** @class */ (function (_super) {
    __extends(FilterRenderer, _super);
    function FilterRenderer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.setFilterValue = _this.setFilterValue.bind(_this);
        _this.setFilterComparator = _this.setFilterComparator.bind(_this);
        _this.setFilterActive = _this.setFilterActive.bind(_this);
        return _this;
    }
    FilterRenderer.prototype.setFilterValue = function (column, value, secondary) {
        if (secondary === void 0) { secondary = false; }
        var filterState = produce(this.props.filterState, function (state) {
            if (state.comparator === 'range') {
                // range
                if (column.type === ColumnType.Number) {
                    if (!Array.isArray(state)) {
                        state.value = secondary ? [0, value] : [value, 0];
                    }
                    else {
                        if (secondary) {
                            state.value = [state.value, value];
                        }
                        else {
                            state.value = [value, state.value];
                        }
                    }
                }
                if (column.type === ColumnType.Date) {
                    if (!Array.isArray(state.value)) {
                        state.value = secondary ? [state.value, value] : [value, state.value];
                    }
                    else {
                        var nextVal = state.value[0];
                        if (secondary) {
                            state.value = [nextVal, value];
                        }
                        else {
                            state.value = [value, nextVal];
                        }
                    }
                }
            }
            else {
                // single value
                state.value = value;
            }
        });
        this.props.onFilterStateChange(filterState, false);
    };
    FilterRenderer.prototype.setFilterComparator = function (column, comparator) {
        var filterState = produce(this.props.filterState, function (state) {
            state.comparator = comparator;
        });
        this.props.onFilterStateChange(filterState, false);
    };
    FilterRenderer.prototype.setFilterActive = function (column, value) {
        var filterState = produce(this.props.filterState, function (state) {
            state.active = value;
            if (!value) {
                if (column.type === ColumnType.Text) {
                    state.value = '';
                }
                else if (column.type === ColumnType.Number) {
                    state.value = 0;
                }
                else if (column.type === ColumnType.Date) {
                    state.value = new Date();
                }
            }
        });
        this.props.onFilterStateChange(filterState, true);
    };
    FilterRenderer.prototype.render = function () {
        var filterProps = {
            column: this.props.column,
            filterState: this.props.filterState,
            setFilterActive: this.setFilterActive,
            setFilterComparator: this.setFilterComparator,
            setFilterValue: this.setFilterValue
        };
        if (this.props.column.type === ColumnType.Text) {
            return React.createElement(TextFilter, __assign({}, filterProps));
        }
        if (this.props.column.type === ColumnType.Number) {
            return React.createElement(NumberFilter, __assign({}, filterProps));
        }
        if (this.props.column.type === ColumnType.Date) {
            return React.createElement(DateFilter, __assign({}, filterProps));
        }
        return React.createElement("div", null, "unknown filter");
    };
    return FilterRenderer;
}(React.Component));
export default FilterRenderer;
//# sourceMappingURL=filter-renderer.js.map