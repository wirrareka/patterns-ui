import { ReactElement } from 'react';
import Contact from '../models/contact';
interface Props {
    contact: Contact;
    simple: boolean;
}
export default function ContactForm({ contact, simple }: Props): ReactElement;
export {};
