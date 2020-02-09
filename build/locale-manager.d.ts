import { Locale } from './types';
export declare class LocaleManager {
    locale: string;
    locales: {
        [id: string]: Locale;
    };
    constructor();
    t: (key: string) => any;
    tc: (key: string, count: number) => any;
    setLocale(code: string, locale?: Locale): void;
}
export declare const localeManager: LocaleManager;
export declare const t: (key: string) => any;
export declare const tc: (key: string, count: number) => any;
