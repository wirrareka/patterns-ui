import Currency from './models/currency';
export declare const DEFAULT_HOUR = 3;
export declare const DAY_MS: number;
export declare const DateFormat = "DD.MM.YYYY";
export declare const DateTimeFormat = "DD.MM.YYYY HH:mm";
export declare const TimeFormat = "hh:mm";
export declare const today: () => Date;
export declare const yesterday: () => Date;
export declare const weekAgo: () => Date;
export declare const tommorow: () => Date;
export declare const formatDate: (date: string | Date) => string;
export declare const parseDate: (date: string) => Date;
export declare const formatTime: (date: string | Date) => string;
export declare const formatDateTime: (date: string | Date) => string;
export declare const formatPrice: (price: number, currency: Currency) => string;
export declare const hasString: (string: string, minLength?: number) => boolean;
export declare const hasStrings: (strings: string[], minLength?: number) => boolean;
