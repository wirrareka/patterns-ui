import { IconName } from '@blueprintjs/core';
import './notifier.scss';
export declare const PatternAppToaster: import("@blueprintjs/core").IToaster;
export default class Notifier {
    static success(message: string, icon?: IconName): void;
    static failure(message: string, icon?: IconName): void;
    static loader(icon: IconName): string;
    static upload(): string;
    static download(): string;
    static stopLoading(key: string): void;
    static clear(): void;
}
