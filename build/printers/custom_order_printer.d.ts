import { ReactElement } from 'react';
import bigDecimal from 'js-big-decimal';
import { Order } from '../models';
interface Props {
    free?: boolean;
    document: Order;
    itemsPrice: bigDecimal;
    workPrice: bigDecimal;
    quote: boolean;
}
export default function InvoicePrinter({ document, quote, itemsPrice, workPrice, free }: Props): ReactElement;
export {};
