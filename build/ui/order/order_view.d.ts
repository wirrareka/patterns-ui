import { Component } from 'react';
import '../item_document/item_document.scss';
import { Contact, Currency, Order } from '../../models';
export interface Props {
    document: Order;
    logo?: string;
    onChange: <K extends keyof Order>(property: K, value: Order[K]) => void;
    fetch: (query: string) => Promise<Contact[]>;
}
export default class OrderView extends Component<Props> {
    constructor(props: Props);
    renderVatRecap(currency: Currency): JSX.Element;
    renderTotal(currency: Currency): JSX.Element;
    render(): JSX.Element;
}
