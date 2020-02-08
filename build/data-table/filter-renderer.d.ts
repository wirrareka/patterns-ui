import React from 'react';
import { Column, FilterComparator, FilterState, FilterValue } from './types';
interface Props<T> {
    column: Column<T>;
    filterState: FilterState;
    onFilterStateChange: (state: FilterState, fetch: boolean) => void;
}
export default class FilterRenderer<T> extends React.Component<Props<T>> {
    state: {};
    constructor(props: Props<T>);
    setFilterValue(column: Column<T>, value?: FilterValue, secondary?: boolean): void;
    setFilterComparator(column: Column<T>, comparator: FilterComparator): void;
    setFilterActive(column: Column<T>, value: boolean): void;
    render(): JSX.Element;
}
export {};
