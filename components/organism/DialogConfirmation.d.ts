import * as React from 'react';
import { DialogProps } from './Dialog';
export declare type DialogConfirmationProps = {
    contentText?: string;
    cancelLabel?: string;
    confirmLabel?: string;
    isBtnConfirmDisabled?: boolean;
    isBtnCancelDisabled?: boolean;
    dialogStyle?: string;
    maxWidth?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    onCancel?(): void;
    onConfirm?(): void;
} & DialogProps;
declare const DialogConfirmation: React.FC<DialogConfirmationProps>;
export default DialogConfirmation;
