import * as React from 'react';
import { ButtonProps } from '../button/Button';
import { DialogProps } from './Dialog';
export declare type DialogConfirmationProps = {
    cancelLabel?: string;
    confirmLabel?: string;
} & DialogProps & ButtonProps;
declare const DialogConfirmation: React.FC<DialogConfirmationProps>;
export default DialogConfirmation;
