import { ReactElement } from 'react';
import { Column, FilterComparator, FilterState } from '../../types';
interface Props<T> {
    column: Column<T>;
    filterState: FilterState;
    setFilterValue: (column: Column<T>, value: number, secondary?: boolean) => void;
    setFilterActive: (column: Column<T>, active: boolean) => void;
    setFilterComparator: (column: Column<T>, value: FilterComparator) => void;
}
export default function NumberFilter<T>({ column, filterState, setFilterValue, setFilterActive, setFilterComparator }: Props<T>): ReactElement<T>;
export {};
