import React, { Component } from 'react';
import '../item_document/item_document.scss';
import { Contact, Currency, Order } from '../../models';
import Named from '../../interfaces/named';
export interface Props {
    editableCode: boolean;
    free: boolean;
    detail: React.ReactElement;
    document: Order;
    logo?: string;
    signature?: string;
    onChange: <K extends keyof Order>(property: K, value: Order[K]) => void;
    fetch: (query: string) => Promise<Contact[]>;
    fetchNames: (query: string) => Promise<Named[]>;
}
export interface State {
    people: Named[];
    query: string;
}
export default class CustomOrderView extends Component<Props, State> {
    constructor(props: Props);
    renderVatRecap(currency: Currency): JSX.Element;
    renderTotal(currency: Currency): JSX.Element;
    render(): JSX.Element;
}
