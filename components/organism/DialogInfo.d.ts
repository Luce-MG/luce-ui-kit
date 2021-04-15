import { DialogProps as Props } from '@material-ui/core/Dialog';
import * as React from 'react';
import { StyledButton } from '../button/Button';
export declare type StyledDialogInfo = {
    title: string;
    content: string;
    btnLabel?: string;
    btnVariant?: StyledButton;
    onConfirm(): void;
    onCancel(): void;
};
export declare type DialogInfoProps = Props & StyledDialogInfo;
declare const DialogInfo: React.FC<DialogInfoProps>;
export default DialogInfo;
