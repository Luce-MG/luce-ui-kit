import * as React from 'react';
import { DialogProps } from './Dialog';
export declare type DialogDurationChangeProps = {
    billing?: number;
    payroll?: number;
} & DialogProps;
declare const DialogDurationChange: React.FC<DialogDurationChangeProps>;
export default DialogDurationChange;
