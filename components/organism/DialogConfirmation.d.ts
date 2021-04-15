import { DialogProps as Props } from '@material-ui/core/Dialog';
import * as React from 'react';
import { StyledButton } from '../button/Button';
export declare type StyledDialogConfirmation = {
    title?: string;
    content?: string;
    cancelLabel?: string;
    confirmLabel?: string;
    btnVariantConfirm?: StyledButton;
    btnVariantCancel?: StyledButton;
    onCancel?(): void;
    onConfirm?(): void;
};
export declare type DialogConfirmationProps = Props & StyledDialogConfirmation;
declare const DialogConfirmation: React.FC<DialogConfirmationProps>;
export default DialogConfirmation;
