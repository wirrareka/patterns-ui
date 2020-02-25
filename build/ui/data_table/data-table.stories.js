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
import React from "react";
import DataTable from './data-table';
import { Button, ButtonGroup, Popover, PopoverInteractionKind, Menu, MenuItem } from '@blueprintjs/core';
import { Alignment, ColumnType } from '../../types';
import faker from 'faker';
import _ from 'lodash';
import { formatDate, parseDate } from '../../common';
var TestModel = /** @class */ (function () {
    function TestModel(id, name, email, address, revenue, registration_date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.revenue = revenue;
        this.registration_date = registration_date;
    }
    return TestModel;
}());
var TestTable = DataTable.ofType();
export default {
    title: "DataTable"
};
var items = [];
for (var i = 0; i < 1234; i++) {
    items.push(new TestModel("" + i, faker.name.findName(), faker.internet.email(), faker.address.city() + ", " + faker.address.country(), parseFloat(faker.finance.amount()), faker.date.past()));
}
var fetch = function (page, pageSize, sort, sortDir, _filters) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // if (sortDir === 'asc') {
        //   items.sort((a: TestModel,b: TestModel) => (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0))
        // } else {
        //   items.sort((a: TestModel,b: TestModel) => (a[sort] > b[sort]) ? -1 : ((b[sort] > a[sort]) ? 1 : 0))
        // }
        //const filters = JSON.stringify(Object.keys(_filters).map(key => _filters[key]).filter(filter => filter.active))
        return [2 /*return*/, {
                items: _.orderBy(items, [sort], [sortDir]).slice((page - 1) * pageSize, page * pageSize),
                total: items.length
            }];
    });
}); };
var baseProps = {
    sort: 'name',
    sortDir: 'asc',
    multiple: true,
    expandable: true,
    formatDate: formatDate,
    parseDate: parseDate,
    onItemSelect: function (item) { },
    detailRenderer: function () { return React.createElement("div", { style: { padding: 12 } }, "Custom React Component to show item details"); },
    fetch: fetch,
    columns: [
        {
            id: 'id',
            title: 'ID',
            type: ColumnType.Text,
            visible: true,
            width: 60
        },
        {
            id: 'name',
            title: 'Name',
            type: ColumnType.Text,
            visible: true,
            flex: 1,
            filterable: true,
            sortable: true
        },
        {
            id: 'email',
            title: 'Email',
            type: ColumnType.Text,
            visible: true,
            flex: 1,
            filterable: true,
            sortable: true
        },
        {
            id: 'address',
            title: 'Address',
            type: ColumnType.Text,
            visible: true,
            flex: 1,
            filterable: true,
            sortable: true
        },
        {
            id: 'revenue',
            title: 'Revenue',
            type: ColumnType.Number,
            visible: true,
            width: 130,
            alignment: Alignment.Right,
            filterable: true,
            sortable: true,
            format: function (item) { return React.createElement("span", null,
                item.revenue.toFixed(2),
                " \u20AC"); }
        },
        {
            id: 'registration_date',
            title: 'Registration Date',
            type: ColumnType.Date,
            visible: true,
            width: 180,
            alignment: Alignment.Right,
            filterable: true,
            sortable: true
        }
    ]
};
var Container = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { style: style }, children);
};
var style = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
};
export var AllFeatures = function () {
    var _a = React.useState([]), selection = _a[0], setSelection = _a[1];
    var _b = React.useState('delete'), action = _b[0], setAction = _b[1];
    var trash = function () {
        console.log('should delete', selection);
    };
    return React.createElement(Container, { style: style },
        React.createElement(TestTable, __assign({}, baseProps, { onSelectionChange: setSelection, actions: React.createElement(ButtonGroup, null,
                action === 'delete' && React.createElement(Button, { disabled: selection.length === 0, text: "Delete", icon: "trash", small: true, style: { height: 28, alignSelf: 'center' }, onClick: trash }),
                action === 'merge' && React.createElement(Button, { disabled: selection.length === 0, text: "Merge", icon: "link", small: true, style: { height: 28, alignSelf: 'center' }, onClick: trash }),
                React.createElement(Popover, { interactionKind: PopoverInteractionKind.CLICK },
                    React.createElement(Button, { disabled: selection.length === 0, icon: "caret-down", small: true, style: { height: 28, alignSelf: 'center' }, onClick: trash }),
                    React.createElement(Menu, null,
                        React.createElement(MenuItem, { icon: "trash", text: "Delete", onClick: function () { return setAction('delete'); } }),
                        React.createElement(MenuItem, { icon: "link", text: "Merge", onClick: function () { return setAction('merge'); } })))) })));
};
export var Sortable = function () { return React.createElement(Container, { style: style },
    React.createElement(TestTable, __assign({}, baseProps, { columns: [
            {
                id: 'id',
                title: 'ID',
                type: ColumnType.Text,
                visible: true,
                width: 150,
                sortable: true
            },
            {
                id: 'name',
                title: 'Meno',
                type: ColumnType.Text,
                visible: true,
                flex: 1,
                sortable: true
            }
        ], fetch: fetch }))); };
//# sourceMappingURL=data-table.stories.js.map