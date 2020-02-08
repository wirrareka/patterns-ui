import React from 'react';
import { Column, ColumnType } from './data-table';
export declare type FilterComparator = 'contains' | 'starts_with' | 'ends_with' | 'eq' | 'lt' | 'gt' | 'lte' | 'gte' | 'range';
export declare type FilterValue = string | number | [number, number] | Date | [Date, Date] | undefined;
export declare type FilterState = {
    column: string;
    active: boolean;
    value?: FilterValue;
    comparator: FilterComparator;
    type: ColumnType;
};
interface Props<T> {
    column: Column<T>;
    filterState: FilterState;
    onFilterStateChange: (state: FilterState, fetch: boolean) => void;
}
export default class FilterRenderer<T> extends React.Component<Props<T>> {
    state: {};
    setFilterValue(column: Column<T>, value?: FilterValue, secondary?: boolean): void;
    setFilterComparator(column: Column<T>, comparator: FilterComparator): void;
    setFilterActive(column: Column<T>, value: boolean): Promise<void>;
    render(): JSX.Element;
}
export {};
