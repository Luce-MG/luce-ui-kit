import { AlertProps as Props } from '@material-ui/lab/Alert';
import * as React from 'react';
export declare type AlertType = 'primary' | 'secondary' | 'error' | 'success';
export declare type AlertLuceProps = {
    type?: AlertType;
    isOpen?: boolean;
    onClose?(): void;
} & Props;
declare const Alert: React.FC<AlertLuceProps>;
export default Alert;
