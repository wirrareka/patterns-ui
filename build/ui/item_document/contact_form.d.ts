import React from 'react';
import { Contact } from '../../models';
interface Props {
    contact: Contact;
    header: string;
    disabled?: boolean;
    fetch: (query: string) => Promise<Contact[]>;
    onChange: <K extends keyof Contact>(property: K, value: Contact[K]) => void;
    onReplace: (contact: Contact) => void;
}
interface State {
    results: Contact[];
    query: string;
}
export default class ContactForm extends React.Component<Props, State> {
    state: {
        query: string;
        results: any[];
    };
    constructor(props: Props);
    renderSuggestItem(contact: any, options: any): JSX.Element;
    renderSuggest(): JSX.Element;
    renderName(): JSX.Element;
    render(): JSX.Element;
}
export {};
