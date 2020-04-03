import { Component } from 'react';
import '../item_document/item_document.scss';
import { Contact, Currency, Order } from '../../models';
import Named from '../../interfaces/named';
export interface Props {
    editableCode: boolean;
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
export default class OrderView extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    renderVatRecap(currency: Currency): JSX.Element;
    renderTotal(currency: Currency): JSX.Element;
    render(): JSX.Element;
}
