import * as React from 'react';
import { DialogProps } from './Dialog';
export declare type DialogConfirmationProps = {
    contentText?: string;
    cancelLabel?: string;
    confirmLabel?: string;
    onCancel?(): void;
    onConfirm?(): void;
} & DialogProps;
declare const DialogConfirmation: React.FC<DialogConfirmationProps>;
export default DialogConfirmation;
