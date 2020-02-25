export declare type Observer = (event?: string, data?: any, observable?: Observable) => any;
export default class Observable {
    _observers: Observer[];
    observe(observer: Observer): void;
    cancel(observer: Observer): void;
    notify(event?: string, data?: any): void;
}
