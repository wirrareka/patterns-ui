import { ReactElement } from 'react';
import DocumentItem from '../../models/document_item';
import { Currency } from '../../models';
interface Props {
    editableCode: boolean;
    currency: Currency;
    item: DocumentItem;
    onChange: (item: DocumentItem) => void;
    showVat: boolean;
    free?: boolean;
}
export default function InvoiceItemView({ currency, editableCode, item, onChange, showVat, free }: Props): ReactElement;
export {};
