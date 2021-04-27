import * as React from 'react';
import { DialogConfirmationProps } from './DialogConfirmation';
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
} & DialogConfirmationProps;
declare const DialogAddNewDays: React.FC<DialogAddNewDaysProps>;
export default DialogAddNewDays;
