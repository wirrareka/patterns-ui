import { ReactElement } from 'react';
import InvoiceItem from '../models/invoice-item';
interface Props {
    item: InvoiceItem;
    onChange: (item: InvoiceItem) => void;
}
export default function InvoiceItemView({ item, onChange }: Props): ReactElement;
export {};
