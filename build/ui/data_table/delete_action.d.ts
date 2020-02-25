import { ReactElement } from 'react';
interface Props {
    disabled: boolean;
    onClick: () => void;
}
export default function DeleteAction({ disabled, onClick }: Props): ReactElement;
export {};
