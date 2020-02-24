import { ReactElement } from 'react';
import DocumentItem from '../../models/document_item';
import { Currency } from '../../models';
interface Props {
    currency: Currency;
    item: DocumentItem;
    onChange: (item: DocumentItem) => void;
    showVat: boolean;
}
export default function InvoiceItemView({ currency, item, onChange, showVat }: Props): ReactElement;
export {};
