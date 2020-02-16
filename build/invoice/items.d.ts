import React from 'react';
import Invoice from '../models/invoice';
interface Props {
    invoice: Invoice;
    onChange: (invoice: Invoice) => void;
}
export default function InvoiceItems({ invoice, onChange }: Props): React.ReactElement;
export {};
