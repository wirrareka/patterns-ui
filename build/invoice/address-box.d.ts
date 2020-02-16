import { ReactElement } from 'react';
import Contact from '../models/contact';
interface Props {
    contact: Contact;
    header: string;
    onChange: (contact: Contact) => void;
    disabled?: boolean;
    fetch: (query: string) => Promise<Contact[]>;
}
export default function AddressBox({ contact, header, onChange, fetch, disabled }: Props): ReactElement;
export {};
