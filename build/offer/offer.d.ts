import { Component } from 'react';
import { FormatDateType, ParseDateType, FormatPriceType } from '../types';
import Contact from '../models/contact';
import Offer from '../models/offer';
import PaymentMethod from '../models/payment-method';
import './offer.scss';
export declare const DefaultPaymentMethods: PaymentMethod[];
export interface Props {
    formatDate: FormatDateType;
    parseDate: ParseDateType;
    formatPrice: FormatPriceType;
    offer: Offer;
    logo?: string;
    onChange: (offer: Offer) => void;
    paymentMethods: PaymentMethod[];
    fetch: (query: string) => Promise<Contact[]>;
}
export default class OfferDocument extends Component<Props> {
    constructor(props: Props);
    onChange(offer: Offer): void;
    render(): JSX.Element;
}
