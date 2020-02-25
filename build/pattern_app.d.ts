/// <reference types="react" />
import { PatternSettings } from "./types";
import { Currency, PaymentMethod } from './models';
import Observable from "./observable";
export declare class PatternApp extends Observable {
    settings: PatternSettings;
    Events: {
        Confirm: string;
        Success: string;
        Failure: string;
    };
    configure(settings: PatternSettings): void;
    get format(): {
        date: import("./types").FormatDateType;
        parseDate: import("./types").ParseDateType;
        price: import("./types").FormatPriceType;
    };
    getCurrency(code: string): Currency;
    getPaymentMethod(code: string): PaymentMethod;
    confirm(title: string, description: string, action: React.ReactElement, icon?: string): void;
    success(message: string): void;
    failure(message: string): void;
}
declare const instance: PatternApp;
export default instance;
