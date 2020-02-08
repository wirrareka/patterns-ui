import { ReactElement } from 'react';
import { Column } from '../data-table';
import { FilterComparator } from '../filter-renderer';
interface Props<T> {
    column: Column<T>;
    setFilterValue: (column: Column<T>, value: string) => void;
    setFilterActive: (column: Column<T>, active: boolean) => void;
    setFilterComparator: (column: Column<T>, value: FilterComparator) => void;
}
export default function TextFilter<T>({ column, setFilterValue, setFilterActive, setFilterComparator }: Props<T>): ReactElement<T>;
export {};
