import { ReactElement } from 'react';
import { Column, FilterComparator, FilterState } from '../../types';
interface Props<T> {
    column: Column<T>;
    filterState: FilterState;
    setFilterValue: (column: Column<T>, value: string) => void;
    setFilterActive: (column: Column<T>, active: boolean) => void;
    setFilterComparator: (column: Column<T>, value: FilterComparator) => void;
}
export default function TextFilter<T>({ column, filterState, setFilterValue, setFilterActive, setFilterComparator }: Props<T>): ReactElement<T>;
export {};
