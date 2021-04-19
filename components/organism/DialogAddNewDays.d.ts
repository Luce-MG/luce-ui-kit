import * as React from 'react';
import { DialogProps } from './Dialog';
export interface Days {
    id?: number;
    label?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare type DialogAddNewDaysProps = {
    days: Days[];
    isSelected?: string[];
    onChange(event: React.ChangeEvent<HTMLInputElement>, index: number): void;
} & DialogProps;
declare const DialogAddNewDays: React.FC<DialogAddNewDaysProps>;
export default DialogAddNewDays;
