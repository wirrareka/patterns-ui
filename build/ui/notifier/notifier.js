import React from 'react';
import { Toaster, Position, ProgressBar } from '@blueprintjs/core';
import './notifier.scss';
import { FlexColumn } from '../../components';
import { t } from '../../locale_manager';
export var PatternAppToaster = Toaster.create({
    className: "patterns-notifier",
    position: Position.TOP,
});
var Notifier = /** @class */ (function () {
    function Notifier() {
    }
    Notifier.success = function (message, icon) {
        if (icon === void 0) { icon = 'tick'; }
        PatternAppToaster.show({ message: message, intent: 'success', icon: icon });
    };
    Notifier.failure = function (message, icon) {
        if (icon === void 0) { icon = 'disable'; }
        PatternAppToaster.show({ message: message, intent: 'danger', icon: icon });
    };
    Notifier.loader = function (icon) {
        return PatternAppToaster.show({
            message: React.createElement(FlexColumn, { style: { alignItems: 'center' } },
                React.createElement(ProgressBar, { intent: "primary" }),
                React.createElement("div", { className: "patterns-notifier-message" }, t('pleaseWait'))),
            icon: icon,
            intent: 'none',
            timeout: 0
        });
    };
    Notifier.upload = function () {
        return this.loader('upload');
    };
    Notifier.download = function () {
        return this.loader('download');
    };
    Notifier.stopLoading = function (key) {
        PatternAppToaster.dismiss(key);
    };
    Notifier.clear = function () {
        PatternAppToaster.clear();
    };
    return Notifier;
}());
export default Notifier;
//# sourceMappingURL=notifier.js.map