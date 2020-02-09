/// <reference types="react" />
export declare type Selection = {
    [id: string]: boolean;
};
export declare type FetchResponse<T> = {
    items: T[];
    total: number;
};
export declare type FilterComparator = 'contains' | 'starts_with' | 'ends_with' | 'eq' | 'lt' | 'gt' | 'lte' | 'gte' | 'range';
export declare type FilterValue = string | number | [number, number] | Date | [Date, Date] | undefined;
export declare type FilterState = {
    column: string;
    active: boolean;
    value?: FilterValue;
    comparator: FilterComparator;
    type: ColumnType;
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
export declare type PageSizeItem = {
    title: string;
    value: number;
};
export declare type Locale = {
    code: string;
    range_from: string;
    range_to: string;
    day: string;
    at_day: string;
    older_than: string;
    newer_than: string;
    range: string;
    value: string;
    equal: string;
    less_than: string;
    greater_than: string;
    contains: string;
    starts_with: string;
    ends_with: string;
    per_page: string;
};
