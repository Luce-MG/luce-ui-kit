import * as React from 'react';
import { StyledButton } from '../button/Button';
import { DialogProps } from './Dialog';
import { DialogConfirmationProps } from './DialogConfirmation';
export declare type DialogInfoProps = DialogProps & StyledButton & DialogConfirmationProps;
declare const DialogInfo: React.FC<DialogInfoProps>;
export default DialogInfo;
