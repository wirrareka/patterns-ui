import { IconName } from '@blueprintjs/core';
import './notifier.scss';
export declare const PatternAppToaster: any;
export default class Notifier {
    static success(message: string, icon?: IconName): void;
    static failure(message: string, icon?: IconName): void;
    static loader(icon: IconName): any;
    static upload(): any;
    static download(): any;
    static stopLoading(key: string): void;
    static clear(): void;
}
