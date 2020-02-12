import { Component } from 'react';
import { FormatDateType, ParseDateType, FormatPriceType } from '../types';
import Offer from '../models/offer';
import PaymentMethod from '../models/payment-method';
import './offer.scss';
export declare const DefaultPaymentMethods: PaymentMethod[];
interface Props {
    formatDate: FormatDateType;
    parseDate: ParseDateType;
    formatPrice: FormatPriceType;
    offer: Offer;
    logo: string;
    onChange: (offer: Offer) => void;
    paymentMethods: PaymentMethod[];
}
export default class OfferDocument extends Component<Props> {
    constructor(props: Props);
    onChange(offer: Offer): void;
    render(): JSX.Element;
}
export {};
