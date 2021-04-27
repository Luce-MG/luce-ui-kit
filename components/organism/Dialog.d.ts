import { DialogProps as Props } from '@material-ui/core/Dialog';
import MuiDialogActions, { DialogActionsProps as MuiDialogActionsProps } from '@material-ui/core/DialogActions';
import MuiDialogContent, { DialogContentProps as MuiDialogContentProps } from '@material-ui/core/DialogContent';
import { DialogContentTextProps as MuiDialogContentTextProps } from '@material-ui/core/DialogContentText';
import MuiDialogTitle, { DialogTitleProps as MuiDialogTitleProps } from '@material-ui/core/DialogTitle';
import * as React from 'react';
export declare type DialogActionsProps = MuiDialogActionsProps;
export declare type DialogContentProps = MuiDialogContentProps;
export declare type DialogContentTextProps = MuiDialogContentTextProps;
export declare type DialogTitleProps = MuiDialogTitleProps;
export declare type DialogProps = {
    showCloseIcon?: boolean;
    title?: string;
    content?: React.ReactNode;
    action?: React.ReactNode;
} & Props;
export declare const DialogActions: typeof MuiDialogActions;
export declare const DialogContent: typeof MuiDialogContent;
export declare const DialogContentText: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core/DialogContentText").DialogContentTextTypeMap<{}, "span">>;
export declare const DialogTitle: typeof MuiDialogTitle;
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
