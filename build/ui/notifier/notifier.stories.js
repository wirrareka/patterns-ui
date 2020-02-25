import React from "react";
import { Button } from '@blueprintjs/core';
import Notifier from './notifier';
import { FlexColumn } from "../../components";
export default {
    title: "Notifier"
};
export var AllFeatures = function () {
    var _a = React.useState(''), key = _a[0], setKey = _a[1];
    return React.createElement(FlexColumn, null,
        React.createElement(Button, { text: "Show Success", onClick: function () { return Notifier.success("Everything went okay"); } }),
        React.createElement(Button, { text: "Show Failure", onClick: function () { return Notifier.failure("Something went wrong"); } }),
        React.createElement(Button, { text: "Show Success with Custom Icon", onClick: function () { return Notifier.success('User updated', 'user'); } }),
        React.createElement(Button, { text: "Start upload", onClick: function () {
                var key = Notifier.upload();
                setKey(key);
            } }),
        React.createElement(Button, { text: "Start download", onClick: function () {
                var key = Notifier.download();
                setKey(key);
            } }),
        React.createElement(Button, { text: "Stop loading", onClick: function () { return Notifier.stopLoading(key); } }),
        React.createElement(Button, { text: "Clear", onClick: function () { return Notifier.clear(); } }));
};
//# sourceMappingURL=notifier.stories.js.map