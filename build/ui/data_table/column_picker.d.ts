import * as React from 'react';
import { Column } from '../../types';
export interface Props<T> {
    columns: Column<T>[];
    onChange: (column: Column<T>, visible: boolean) => void;
}
export default class ColumnPicker<T> extends React.Component<Props<T>> {
    static ofType<T>(): new (props: Props<T>) => ColumnPicker<T>;
    renderColumns(): JSX.Element[];
    render(): JSX.Element;
}
