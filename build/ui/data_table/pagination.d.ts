import { ReactElement } from 'react';
interface Props {
    page: number;
    size: number;
    total: number;
    onChange: (page: number, size: number) => void;
}
export default function Pagination({ page, size, total, onChange }: Props): ReactElement;
export {};
