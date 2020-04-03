import { Component } from 'react';
import '../item_document/item_document.scss';
import { Contact, Currency, Invoice } from '../../models';
import Named from '../../interfaces/named';
export interface Props {
    editableCode: boolean;
    document: Invoice;
    logo?: string;
    signature?: string;
    onChange: <K extends keyof Invoice>(property: K, value: Invoice[K]) => void;
    fetch: (query: string) => Promise<Contact[]>;
    fetchNames: (query: string) => Promise<Named[]>;
}
export interface State {
    people: Named[];
}
export default class InvoiceView extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    renderVatRecap(currency: Currency): JSX.Element;
    renderTotal(currency: Currency): JSX.Element;
    render(): JSX.Element;
}
