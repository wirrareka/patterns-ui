import React from 'react';
import { ItemDocument } from '../../models';
import DocumentItem from '../../models/document_item';
interface Props<T> {
    free?: boolean;
    document: T;
    editableCode: boolean;
    onChange: (items: DocumentItem[]) => void;
    showVat: boolean;
}
export default class DocumentItemsView<T extends ItemDocument> extends React.Component<Props<T>> {
    state: {};
    static ofType<T extends ItemDocument>(): new (props: Props<T>) => DocumentItemsView<T>;
    constructor(props: Props<T>);
    change(item: DocumentItem): void;
    trash(item: DocumentItem): void;
    duplicate(item: DocumentItem): void;
    lock(item: DocumentItem): void;
    renderItems(): JSX.Element[];
    render(): JSX.Element;
}
export {};
