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
import React, { Component } from 'react';
import produce from 'immer';
import { Button, Classes, Colors, Icon, Popover, PopoverInteractionKind, PopoverPosition, Checkbox, Tag, Tooltip } from '@blueprintjs/core';
import Pagination from './pagination';
import ColumnPicker from './column_picker';
import { Container, FlexColumn, FlexRow, Toolbar } from '../../components';
import { Header, Content, ItemRow, ExpandedItemRow, SelectionCount, Cell } from './components';
import { ColumnType } from '../../types';
import { t } from '../../locale_manager';
import FilterRenderer from './filter-renderer';
import './data-table.scss';
var DataTable = /** @class */ (function (_super) {
    __extends(DataTable, _super);
    function DataTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            query: '',
            page: 1,
            pageSize: 50,
            total: 0,
            sort: _this.props.columns[0].id,
            sortDir: 'asc',
            items: [],
            loading: false,
            selection: {},
            expanded: {},
            columns: _this.props.columns,
            filterStates: _this.buildFilterStates(_this.props.columns)
        };
        _this.selectAll = _this.selectAll.bind(_this);
        return _this;
    }
    DataTable.ofType = function () {
        return DataTable;
    };
    DataTable.prototype.componentDidMount = function () {
        this.fetch();
    };
    DataTable.prototype.buildFilterStates = function (columns) {
        var state = {};
        var getState = function (column) {
            var base = {
                column: column.id,
                active: false,
                comparator: 'contains',
                type: column.type
            };
            if (column.type === ColumnType.Text) {
                return __assign(__assign({}, base), { value: '', comparator: 'contains' });
            }
            if (column.type === ColumnType.Number) {
                return __assign(__assign({}, base), { value: 0, comparator: 'eq' });
            }
            if (column.type === ColumnType.Date) {
                return __assign(__assign({}, base), { value: new Date(), comparator: 'eq' });
            }
            return base;
        };
        columns.forEach(function (column) { return state[column.id] = getState(column); });
        return state;
    };
    DataTable.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, pageSize, sort, sortDir, filterStates, _b, items, total, selection;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.setState({ loading: true })];
                    case 1:
                        _c.sent();
                        _a = this.state, page = _a.page, pageSize = _a.pageSize, sort = _a.sort, sortDir = _a.sortDir, filterStates = _a.filterStates;
                        return [4 /*yield*/, this.props.fetch(page, pageSize, sort, sortDir, filterStates)];
                    case 2:
                        _b = _c.sent(), items = _b.items, total = _b.total;
                        selection = {};
                        items.forEach(function (item) { return selection[item.id] = false; });
                        return [4 /*yield*/, this.setState({ items: items, selection: selection, total: total, loading: false })];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataTable.prototype.formatSelection = function () {
        var count = this.getSelectedIds().length;
        if (count === 0) {
            return React.createElement(SelectionCount, null, t('selection_none'));
        }
        else if (count === 1) {
            return React.createElement(SelectionCount, null,
                t('selection_one'),
                " ",
                React.createElement(Tag, { round: true, minimal: true, intent: "primary" },
                    React.createElement("strong", null, count)),
                " ",
                t('items_one'));
        }
        else if (count > 1 && count < 5) {
            return React.createElement(SelectionCount, null,
                t('selection_few'),
                " ",
                React.createElement(Tag, { round: true, minimal: true, intent: "primary" },
                    React.createElement("strong", null, count)),
                " ",
                t('items_few'));
        }
        else {
            return React.createElement(SelectionCount, null,
                t('selection_many'),
                " ",
                React.createElement(Tag, { round: true, minimal: true, intent: "primary" },
                    React.createElement("strong", null, count)),
                " ",
                t('items_many'));
        }
    };
    DataTable.prototype.formatValue = function (item, column) {
        if (column.format) {
            return column.format(item);
        }
        var _item = item;
        var value = _item[column.id];
        if (column.type === ColumnType.Date) {
            return this.props.formatDate(value);
        }
        if (column.type === ColumnType.DateTime) {
            return this.props.formatDate(value);
        }
        return value;
    };
    DataTable.prototype.getSelectedIds = function () {
        var _this = this;
        return Object.keys(this.state.selection).filter(function (key) { return _this.state.selection[key]; });
    };
    DataTable.prototype.isSelected = function (item) {
        return this.getSelectedIds().includes(item.id);
    };
    DataTable.prototype.isExpanded = function (item) {
        return this.getExpandedIds().includes(item.id);
    };
    DataTable.prototype.getExpandedIds = function () {
        var _this = this;
        return Object.keys(this.state.expanded).filter(function (key) { return _this.state.expanded[key]; });
    };
    DataTable.prototype.selectAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allSelected, selection, items;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allSelected = this.getSelectedIds().length === this.state.items.length;
                        selection = produce(this.state.selection, function (state) {
                            Object.keys(state).forEach(function (key) { return state[key] = !allSelected; });
                        });
                        return [4 /*yield*/, this.setState({ selection: selection })];
                    case 1:
                        _a.sent();
                        items = this.getSelectedIds().map(function (id) { return _this.state.items.find(function (item) { return item.id === id; }); });
                        this.props.onSelectionChange(items);
                        return [2 /*return*/];
                }
            });
        });
    };
    DataTable.prototype.renderFilter = function (column) {
        var _this = this;
        return React.createElement(FilterRenderer, { column: column, filterState: this.state.filterStates[column.id], onFilterStateChange: function (state, fetch) { return __awaiter(_this, void 0, void 0, function () {
                var filterStates;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            filterStates = produce(this.state.filterStates, function (states) {
                                states[column.id] = state;
                            });
                            return [4 /*yield*/, this.setState({ filterStates: filterStates })];
                        case 1:
                            _a.sent();
                            if (!fetch) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.fetch()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); }, formatDate: this.props.formatDate, parseDate: this.props.parseDate });
    };
    DataTable.prototype.renderEmptyCell = function (column, index) {
        var key = "data-table-item-empty-cell-" + column.id + "-" + index;
        return React.createElement(Cell, { className: Classes.SKELETON, flex: column.flex, width: column.width, key: key }, "\u00A0");
    };
    DataTable.prototype.renderCell = function (item, column, index) {
        var _this = this;
        if (!column.visible) {
            return null;
        }
        var key = "data-table-item-cell-" + column.id + "-" + index;
        return React.createElement(Cell, { flex: column.flex, width: column.width, key: key, onClick: function () { return _this.props.onItemSelect(item); }, alignment: column.alignment }, this.formatValue(item, column));
    };
    DataTable.prototype.renderEmpty = function () {
        var _this = this;
        var rows = [];
        var _loop_1 = function (i) {
            rows.push(React.createElement(ItemRow, { key: "data-table-empty-row-" + i }, this_1.state.columns.map(function (column) { return _this.renderEmptyCell(column, i); })));
        };
        var this_1 = this;
        for (var i = 1; i < this.state.pageSize; i++) {
            _loop_1(i);
        }
        return rows;
    };
    DataTable.prototype.renderItems = function () {
        var _this = this;
        return this.state.items.map(function (item, index) {
            var cells = _this.state.columns.map(function (column) { return _this.renderCell(item, column, index); });
            var _item = item;
            if (_this.props.multiple) {
                cells.splice(0, 0, React.createElement(Cell, { width: 30, key: "datatable-row-selection-" + index },
                    React.createElement(Checkbox, { style: { justifySelf: 'center', alignSelf: 'center', marginBottom: 0 }, className: "datatable-item-selector", checked: _this.state.selection[_item.id], onChange: function (evt) { return __awaiter(_this, void 0, void 0, function () {
                            var selection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        selection = produce(this.state.selection, function (state) {
                                            state[_item.id] = evt.currentTarget.checked;
                                        });
                                        return [4 /*yield*/, this.setState({ selection: selection })];
                                    case 1:
                                        _a.sent();
                                        this.props.onSelectionChange(this.state.items.filter(function (item) { return Object.keys(selection).filter(function (key) { return selection[key]; }).includes(item.id); }));
                                        return [2 /*return*/];
                                }
                            });
                        }); } })));
            }
            if (_this.props.expandable) {
                cells.splice(0, 0, React.createElement(Cell, { width: 36, key: "datatable-row-expand-" + index },
                    React.createElement(Button, { minimal: true, icon: React.createElement(Icon, { color: _this.isExpanded(item) ? Colors.RED1 : Colors.GRAY5, icon: _this.isExpanded(item) ? 'chevron-down' : 'chevron-right' }), style: { justifySelf: 'center', alignSelf: 'center', marginBottom: 0 }, onClick: function (evt) { return __awaiter(_this, void 0, void 0, function () {
                            var expanded;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        expanded = produce(this.state.expanded, function (state) {
                                            if (typeof state[_item.id] === 'undefined') {
                                                state[_item.id] = false;
                                            }
                                            state[_item.id] = !state[_item.id];
                                        });
                                        return [4 /*yield*/, this.setState({ expanded: expanded })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } })));
            }
            return React.createElement(React.Fragment, { key: "data-table-item-row-" + index + "-fragment" },
                React.createElement(ItemRow, { key: "data-table-item-row-" + index }, cells),
                (_this.props.expandable && _this.isExpanded(item)) &&
                    React.createElement(ExpandedItemRow, { key: "data-table-expanded-row-" + index }, _this.props.detailRenderer(item)));
        });
    };
    DataTable.prototype.renderHeader = function () {
        var _this = this;
        var ClientColumnPicker = ColumnPicker.ofType();
        var setSort = function (column) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setState({
                            sort: column.id,
                            sortDir: this.state.sort === column.id ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'asc'
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fetch()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        var cells = this.state.columns.map(function (column) {
            if (!column.visible) {
                return null;
            }
            return React.createElement(Cell, { head: true, flex: column.flex, width: column.width, alignment: column.alignment, key: "datatable-header-" + column.id },
                React.createElement("div", { style: { flex: 3 }, onClick: function () {
                        if (column.sortable) {
                            setSort(column);
                        }
                    } },
                    React.createElement("span", null, column.title)),
                (column.sortable || column.filterable) &&
                    React.createElement("div", { style: { flex: 1, alignItems: 'flex-end', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' } },
                        column.sortable && React.createElement(Button, { className: _this.state.sort === column.id ? '' : 'visible-on-hover', intent: _this.state.sort === column.id ? 'primary' : 'none', minimal: true, onClick: function () { return setSort(column); }, icon: _this.state.sort === column.id ? _this.state.sortDir === 'asc' ? "chevron-up" : 'chevron-down' : 'chevron-up' }),
                        column.filterable && React.createElement(Popover, { interactionKind: PopoverInteractionKind.CLICK, position: PopoverPosition.BOTTOM },
                            React.createElement(Button, { minimal: true, icon: React.createElement(Icon, { color: _this.state.filterStates[column.id].active ? Colors.RED1 : Colors.GRAY4, icon: "filter" }), style: { justifySelf: 'center', alignSelf: 'center', marginBottom: 0 } }),
                            _this.renderFilter(column))));
        });
        if (this.props.multiple) {
            cells.splice(0, 0, React.createElement(Cell, { width: 30, key: "datatable-header-selection" },
                React.createElement(Tooltip, { interactionKind: PopoverInteractionKind.HOVER, position: PopoverPosition.RIGHT },
                    React.createElement(Checkbox, { checked: this.getSelectedIds().length === this.state.items.length, onChange: this.selectAll, style: { justifySelf: 'center', alignSelf: 'center', marginBottom: 0 } }),
                    "Ozna\u010Di\u0165 v\u0161etky")));
        }
        if (this.props.expandable) {
            cells.splice(0, 0, React.createElement(Cell, { width: 36, key: "datatable-header-expand" },
                React.createElement(ClientColumnPicker, { columns: this.state.columns, onChange: function (column, visible) {
                        var columns = produce(_this.state.columns, function (state) {
                            var col = state.find(function (col) { return col.id === column.id; });
                            if (col) {
                                col.visible = visible;
                            }
                        });
                        _this.setState({ columns: columns });
                    } })));
        }
        return React.createElement(Header, null, cells);
    };
    DataTable.prototype.renderPagination = function () {
        var _this = this;
        return React.createElement(Pagination, { page: this.state.page, size: this.state.pageSize, total: this.state.total, onChange: function (page, pageSize) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.setState({ page: page, pageSize: pageSize })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.fetch()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } });
    };
    DataTable.prototype.render = function () {
        var _this = this;
        return React.createElement(Container, null,
            this.renderHeader(),
            React.createElement(Content, null,
                this.state.loading && this.renderEmpty(),
                !this.state.loading && this.renderItems()),
            React.createElement(Toolbar, null,
                React.createElement(FlexRow, { flex: 1 },
                    React.createElement(Button, { minimal: true, icon: "refresh", onClick: function () { return _this.fetch(); } }),
                    this.formatSelection()),
                React.createElement(FlexColumn, { flex: 4 }, this.renderPagination()),
                React.createElement(FlexColumn, { flex: 1 }, "\u00A0")));
    };
    return DataTable;
}(Component));
export default DataTable;
//# sourceMappingURL=data-table.js.map