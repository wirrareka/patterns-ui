import { Contactable } from "../interfaces";
import { Currency } from "../models";
import PaymentMethod from "../models/payment_method";
import { FormatDateType, ParseDateType, FormatPriceType } from '../types';
export declare type PatternSettings = {
    name: string;
    logo: string;
    bank: {
        name: string;
        code: string;
        swift: string;
        account: string;
    };
    company: Contactable;
    currency: {
        defaultCurrency: Currency;
        currencies: Currency[];
    };
    payment: {
        defaultMethod: PaymentMethod;
        methods: PaymentMethod[];
    };
    format: {
        date: FormatDateType;
        parseDate: ParseDateType;
        price: FormatPriceType;
    };
    invoices: {
        showVat: boolean;
    };
    orders: {
        showVat: boolean;
    };
};
