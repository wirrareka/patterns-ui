import { ReactElement } from 'react';
import { Column, FilterComparator, FilterState } from '../types';
interface Props<T> {
    column: Column<T>;
    state: FilterState;
    setFilterValue: (column: Column<T>, value: Date, secondary?: boolean) => void;
    setFilterActive: (column: Column<T>, active: boolean) => void;
    setFilterComparator: (column: Column<T>, value: FilterComparator) => void;
}
export default function DateFilter<T>({ column, state, setFilterValue, setFilterActive, setFilterComparator }: Props<T>): ReactElement<T>;
export {};
