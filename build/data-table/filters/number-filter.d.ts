import { ReactElement } from 'react';
import { Column } from '../data-table';
import { FilterComparator, FilterState } from '../filter-renderer';
interface Props<T> {
    column: Column<T>;
    state: FilterState;
    setFilterValue: (column: Column<T>, value: number, secondary?: boolean) => void;
    setFilterActive: (column: Column<T>, active: boolean) => void;
    setFilterComparator: (column: Column<T>, value: FilterComparator) => void;
}
export default function NumberFilter<T>({ column, state, setFilterValue, setFilterActive, setFilterComparator }: Props<T>): ReactElement<T>;
export {};
