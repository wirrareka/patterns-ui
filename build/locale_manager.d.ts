import { Locale } from './types';
export declare class LocaleManager {
    locale: string;
    locales: {
        [id: string]: Locale;
    };
    constructor();
    t: <K extends "page" | "code" | "range_from" | "range_to" | "day" | "at_day" | "older_than" | "newer_than" | "range" | "value" | "equal" | "less_than" | "greater_than" | "contains" | "starts_with" | "ends_with" | "per_page" | "selection_none" | "selection_one" | "selection_few" | "selection_many" | "items_none" | "items_one" | "items_few" | "items_many" | "first" | "last" | "datePosted" | "dateDelivered" | "dateDue" | "paymentMethod" | "bank" | "bankAccount" | "variableSymbol" | "constantSymbol" | "newItem" | "invoice.new" | "invoice.type" | "offer.new" | "offer.type" | "order.new" | "order.type" | "payment_methods.cash" | "payment_methods.cash_on_delivery" | "payment_methods.card" | "payment_methods.bank_transfer" | "payment_methods.paypal" | "name" | "street" | "street2" | "zip" | "city" | "country" | "businessId" | "vatId" | "vatPayerId" | "vendor" | "customer" | "edit" | "edit_code" | "edit_note" | "title" | "quantity" | "vat" | "vatBase" | "vatValue" | "vatPrice" | "vatRecap" | "unitPriceNoVat" | "linePriceNoVat" | "linePriceWithVat" | "signature" | "total" | "note" | "delete" | "cancel">(key: K) => Locale[K];
    tc: <K extends "page" | "code" | "range_from" | "range_to" | "day" | "at_day" | "older_than" | "newer_than" | "range" | "value" | "equal" | "less_than" | "greater_than" | "contains" | "starts_with" | "ends_with" | "per_page" | "selection_none" | "selection_one" | "selection_few" | "selection_many" | "items_none" | "items_one" | "items_few" | "items_many" | "first" | "last" | "datePosted" | "dateDelivered" | "dateDue" | "paymentMethod" | "bank" | "bankAccount" | "variableSymbol" | "constantSymbol" | "newItem" | "invoice.new" | "invoice.type" | "offer.new" | "offer.type" | "order.new" | "order.type" | "payment_methods.cash" | "payment_methods.cash_on_delivery" | "payment_methods.card" | "payment_methods.bank_transfer" | "payment_methods.paypal" | "name" | "street" | "street2" | "zip" | "city" | "country" | "businessId" | "vatId" | "vatPayerId" | "vendor" | "customer" | "edit" | "edit_code" | "edit_note" | "title" | "quantity" | "vat" | "vatBase" | "vatValue" | "vatPrice" | "vatRecap" | "unitPriceNoVat" | "linePriceNoVat" | "linePriceWithVat" | "signature" | "total" | "note" | "delete" | "cancel">(key: K, count: number) => Locale[K];
    setLocale(code: string, locale?: Locale): void;
}
export declare const localeManager: LocaleManager;
export declare const t: <K extends "page" | "code" | "range_from" | "range_to" | "day" | "at_day" | "older_than" | "newer_than" | "range" | "value" | "equal" | "less_than" | "greater_than" | "contains" | "starts_with" | "ends_with" | "per_page" | "selection_none" | "selection_one" | "selection_few" | "selection_many" | "items_none" | "items_one" | "items_few" | "items_many" | "first" | "last" | "datePosted" | "dateDelivered" | "dateDue" | "paymentMethod" | "bank" | "bankAccount" | "variableSymbol" | "constantSymbol" | "newItem" | "invoice.new" | "invoice.type" | "offer.new" | "offer.type" | "order.new" | "order.type" | "payment_methods.cash" | "payment_methods.cash_on_delivery" | "payment_methods.card" | "payment_methods.bank_transfer" | "payment_methods.paypal" | "name" | "street" | "street2" | "zip" | "city" | "country" | "businessId" | "vatId" | "vatPayerId" | "vendor" | "customer" | "edit" | "edit_code" | "edit_note" | "title" | "quantity" | "vat" | "vatBase" | "vatValue" | "vatPrice" | "vatRecap" | "unitPriceNoVat" | "linePriceNoVat" | "linePriceWithVat" | "signature" | "total" | "note" | "delete" | "cancel">(key: K) => Locale[K];
export declare const tc: <K extends "page" | "code" | "range_from" | "range_to" | "day" | "at_day" | "older_than" | "newer_than" | "range" | "value" | "equal" | "less_than" | "greater_than" | "contains" | "starts_with" | "ends_with" | "per_page" | "selection_none" | "selection_one" | "selection_few" | "selection_many" | "items_none" | "items_one" | "items_few" | "items_many" | "first" | "last" | "datePosted" | "dateDelivered" | "dateDue" | "paymentMethod" | "bank" | "bankAccount" | "variableSymbol" | "constantSymbol" | "newItem" | "invoice.new" | "invoice.type" | "offer.new" | "offer.type" | "order.new" | "order.type" | "payment_methods.cash" | "payment_methods.cash_on_delivery" | "payment_methods.card" | "payment_methods.bank_transfer" | "payment_methods.paypal" | "name" | "street" | "street2" | "zip" | "city" | "country" | "businessId" | "vatId" | "vatPayerId" | "vendor" | "customer" | "edit" | "edit_code" | "edit_note" | "title" | "quantity" | "vat" | "vatBase" | "vatValue" | "vatPrice" | "vatRecap" | "unitPriceNoVat" | "linePriceNoVat" | "linePriceWithVat" | "signature" | "total" | "note" | "delete" | "cancel">(key: K, count: number) => Locale[K];
