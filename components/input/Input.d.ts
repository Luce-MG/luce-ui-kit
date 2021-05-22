import { TextFieldProps as Props } from '@material-ui/core/TextField';
import * as React from 'react';
import { IconList } from '../icons/Icons';
export declare type customProps = {
    customSize?: 'small' | 'medium' | 'large';
    readOnly?: boolean;
    icon?: keyof typeof IconList;
};
export declare type TextFieldProps = Props & customProps;
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
