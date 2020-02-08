import React, { Component } from 'react';
import { FilterState } from './filter-renderer';
export { FlexColumn } from './components';
export declare type Selection = {
    [id: string]: boolean;
};
export declare type FetchResponse<T> = {
    items: T[];
    total: number;
};
export declare type FilterStates = {
    [id: string]: FilterState;
};
export declare enum ColumnType {
    Text = 0,
    Number = 1,
    Date = 2,
    DateTime = 3,
    Custom = 4
}
export interface Column<T> {
    id: string;
    title: string;
    type: ColumnType;
    format?: (item: T) => React.ReactElement;
    flex?: number;
    width?: number;
    sortable?: boolean;
    filterable?: boolean;
    visible?: boolean;
}
interface Props<T> {
    columns: Column<T>[];
    expandable: boolean;
    fetch: (page: number, pageSize: number, sort: string, sortDir: 'asc' | 'desc', filters: FilterStates) => Promise<FetchResponse<T>>;
    sort: string;
    sortDir: 'asc' | 'desc';
    multiple: boolean;
    onItemSelect: (item: T) => void;
    onSelectionChange: (items: T[]) => void;
    detailRenderer: (item: T) => React.ReactElement;
}
interface State<T> {
    query: string;
    page: number;
    pageSize: number;
    total: number;
    sort: string;
    sortDir: 'asc' | 'desc';
    items: T[];
    filterStates: FilterStates;
    loading: boolean;
    selection: Selection;
    expanded: Selection;
    columns: Column<T>[];
}
export default class DataTable<T> extends Component<Props<T>, State<T>> {
    constructor(props: Props<T>);
    static ofType<T>(): new (props: Props<T>) => DataTable<T>;
    componentDidMount(): void;
    buildFilterStates(columns: Column<T>[]): FilterStates;
    fetch(): Promise<void>;
    formatSelection(): JSX.Element;
    formatValue(item: T, column: Column<T>): any;
    getSelectedIds(): string[];
    isSelected(item: T): boolean;
    isExpanded(item: T): boolean;
    getExpandedIds(): string[];
    selectAll(): Promise<void>;
    renderFilter(column: Column<T>): JSX.Element;
    renderEmptyCell(column: Column<T>, index: number): JSX.Element;
    renderCell(item: T, column: Column<T>, index: number): JSX.Element;
    renderEmpty(): any[];
    renderItems(): JSX.Element[];
    renderHeader(): JSX.Element;
    renderPagination(): JSX.Element;
    render(): JSX.Element;
}
