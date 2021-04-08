import { TextFieldProps as Props } from '@material-ui/core/TextField';
import * as React from 'react';
import Icons from '../../stories/assets/icons';
export declare type customProps = {
    customSize?: 'small' | 'medium' | 'large';
    readOnly?: boolean;
    icon?: keyof typeof Icons;
    data?: {
        [key: string]: string;
    };
};
export declare type TextFieldProps = Props & customProps;
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
