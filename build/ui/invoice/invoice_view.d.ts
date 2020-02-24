import { Component } from 'react';
import '../item_document/item_document.scss';
import { Contact, Currency, Invoice } from '../../models';
export interface Props {
    document: Invoice;
    logo?: string;
    onChange: <K extends keyof Invoice>(property: K, value: Invoice[K]) => void;
    fetch: (query: string) => Promise<Contact[]>;
}
export default class InvoiceView extends Component<Props> {
    constructor(props: Props);
    renderVatRecap(currency: Currency): JSX.Element;
    renderTotal(currency: Currency): JSX.Element;
    render(): JSX.Element;
}
