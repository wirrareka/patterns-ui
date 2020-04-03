import { ReactElement } from 'react';
import { Invoice } from '../models';
interface Props {
    document: Invoice;
}
export default function InvoicePrinter({ document }: Props): ReactElement;
export {};
