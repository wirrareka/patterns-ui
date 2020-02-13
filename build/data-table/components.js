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
import { Alignment } from '../types';
// export const Container = <div className="patterns-data-table"/>
export var Header = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-data-table-header', style: style }, children);
};
export var Content = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-data-table-content', style: style }, children);
};
export var ItemRow = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-data-table-item-row', style: __assign({}, style) }, children);
};
export var ExpandedItemRow = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-data-table-item-row-expanded', style: style }, children);
};
export var SelectionCount = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-data-table-selection-count', style: style }, children);
};
export var Cell = function (_a) {
    var children = _a.children, width = _a.width, flex = _a.flex, head = _a.head, onClick = _a.onClick, className = _a.className, alignment = _a.alignment;
    var style = {};
    if (flex) {
        style.flex = "" + flex;
    }
    if (width) {
        style.width = width + "px";
    }
    if (!flex && !width) {
        style.flex = '1';
    }
    var _className = [
        head ? 'patterns-data-table-cell header' : 'patterns-data-table-cell'
    ];
    if (className) {
        _className.push(className);
    }
    if (alignment) {
        if (width) {
            style.textAlign = alignment;
        }
        if (alignment === Alignment.Center) {
            style.justifyContent = 'center';
        }
        else {
            style.justifyContent = alignment === Alignment.Left ? 'flex-start' : 'flex-end';
        }
    }
    return React.createElement('div', { className: _className.join(' '), style: style, onClick: onClick }, children);
};
export var Filter = function (_a) {
    var children = _a.children;
    return React.createElement('div', { className: 'patterns-data-table-filter' }, children);
};
//# sourceMappingURL=components.js.map