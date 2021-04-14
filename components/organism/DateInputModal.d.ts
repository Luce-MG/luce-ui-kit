import { DialogProps } from '@material-ui/core/Dialog';
import * as React from 'react';
import { StyledButton } from '../button/Button';
export declare type DateInputModalProps = {
    title?: string;
    description?: string;
    inputLabel?: string;
    cancelLabel?: string;
    confirmLabel?: string;
    onCancel(): void;
    onConfirm(): void;
    btnVariantConfirm?: StyledButton;
    btnVariantCancel?: StyledButton;
} & DialogProps;
declare const DateInputModal: React.FC<DateInputModalProps>;
export default DateInputModal;
