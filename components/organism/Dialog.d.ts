import { DialogProps as Props } from '@material-ui/core/Dialog';
import * as React from 'react';
export declare type DialogProps = {
    title?: string;
    content?: React.ReactNode;
    action?: React.ReactNode;
    open?: boolean;
    onCancel?(): void;
    onConfirm?(): void;
} & Props;
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
