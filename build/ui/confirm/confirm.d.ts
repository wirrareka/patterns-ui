import React from 'react';
import { IconName } from '@blueprintjs/core';
interface Props {
}
interface State {
    isOpen: boolean;
    title?: string;
    description?: string;
    action?: React.ReactElement;
    icon: IconName;
}
export default class Confirm extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onConfirm(event?: string, data?: any): void;
    render(): JSX.Element;
}
export {};
