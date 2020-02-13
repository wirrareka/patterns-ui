import React from 'react';
import { Button, ButtonGroup, Colors, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { t } from '../locale-manager';
var PageSizeSelect = Select.ofType();
export default function Pagination(_a) {
    var page = _a.page, size = _a.size, total = _a.total, onChange = _a.onChange;
    var pageSizes = [25, 50, 100, 500].map(function (size) { return ({ title: size + " " + t('per_page'), value: size }); });
    var totalPages = Math.ceil(total / size);
    var startPage = 0;
    var endPage = 0;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // more than 10 total pages so calculate start and end pages
        if (page <= 6) {
            startPage = 1;
            endPage = 10;
        }
        else if (page + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        }
        else {
            startPage = page - 5;
            endPage = page + 4;
        }
    }
    var pages = Array.from({ length: endPage + 1 - startPage }, function (_, i) { return startPage + i; });
    return React.createElement("div", { className: "patterns-data-table-pagination" },
        React.createElement(ButtonGroup, null,
            React.createElement(Button, { disabled: page === 1, minimal: true, onClick: function () { return onChange(1, size); } }, t('first')),
            React.createElement(Button, { icon: "chevron-left", disabled: page === 1, minimal: true, onClick: function () { return onChange(page, Math.max(1, page - 1)); } }),
            pages.map(function (_page) { return (React.createElement(Button, { key: _page, style: {
                    color: page === _page ? Colors.BLUE1 : Colors.GRAY1,
                    fontWeight: page === _page ? 'bold' : 'normal'
                }, minimal: true, onClick: function () { return onChange(_page, size); } }, _page)); }),
            React.createElement(Button, { icon: "chevron-right", disabled: page === totalPages, minimal: true, onClick: function () {
                    return onChange(Math.min(page + 1, totalPages), size);
                } }),
            React.createElement(Button, { disabled: page === totalPages, minimal: true, onClick: function () { return onChange(totalPages, size); } }, t('last')),
            React.createElement(PageSizeSelect, { items: pageSizes, itemRenderer: function (item, options) { return React.createElement(MenuItem, { key: "pagination-item-" + item.value, text: item.title, onClick: options.handleClick }); }, onItemSelect: function (item) { return onChange(page, item.value); } },
                React.createElement(Button, { minimal: true, rightIcon: "chevron-down", text: size + " " + t('per_page'), style: { margin: 0 }, className: "low-button" }))));
}
//# sourceMappingURL=pagination.js.map