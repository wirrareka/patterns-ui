import React from 'react';
interface Props {
}
interface State {
    isOpen: boolean;
    title?: string;
    description?: string;
    action?: React.ReactElement;
}
export default class Confirm extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onConfirm(event?: string, data?: any): void;
    render(): JSX.Element;
}
export {};
