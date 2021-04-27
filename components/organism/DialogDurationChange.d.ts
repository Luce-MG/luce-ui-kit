import * as React from 'react';
import { DialogConfirmationProps } from './DialogConfirmation';
export declare type DialogDurationChangeProps = {
    billing?: number;
    payroll?: number;
} & DialogConfirmationProps;
declare const DialogDurationChange: React.FC<DialogDurationChangeProps>;
export default DialogDurationChange;
