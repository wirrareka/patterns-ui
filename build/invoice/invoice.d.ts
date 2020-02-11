import { Component } from 'react';
import { FormatDateType, ParseDateType, FormatPriceType } from '../types';
import Invoice from '../models/invoice';
import PaymentMethod from '../models/payment-method';
import './invoice.scss';
export declare const DefaultPaymentMethods: PaymentMethod[];
interface Props {
    formatDate: FormatDateType;
    parseDate: ParseDateType;
    formatPrice: FormatPriceType;
    invoice: Invoice;
    logo: string;
    onChange: (invoice: Invoice) => void;
    paymentMethods: PaymentMethod[];
}
export default class InvoiceDocument extends Component<Props> {
    constructor(props: Props);
    onChange(invoice: Invoice): void;
    render(): JSX.Element;
}
export {};
