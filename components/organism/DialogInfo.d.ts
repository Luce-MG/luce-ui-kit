import * as React from 'react';
import { DialogProps } from './Dialog';
export declare type DialogInfoProps = {
    contentText?: string;
    confirmLabel?: string;
    onCancel?(): void;
    onConfirm?(): void;
} & DialogProps;
declare const DialogInfo: React.FC<DialogInfoProps>;
export default DialogInfo;
