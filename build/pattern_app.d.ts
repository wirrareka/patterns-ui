import { PatternSettings } from "./types";
import { Currency, PaymentMethod } from './models';
export declare class PatternApp {
    settings: PatternSettings;
    configure(settings: PatternSettings): void;
    get format(): {
        date: import("./types").FormatDateType;
        parseDate: import("./types").ParseDateType;
        price: import("./types").FormatPriceType;
    };
    getCurrency(code: string): Currency;
    getPaymentMethod(code: string): PaymentMethod;
}
declare const instance: PatternApp;
export default instance;
