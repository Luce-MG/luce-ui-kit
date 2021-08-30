import { TextFieldProps as Props } from '@material-ui/core/TextField';
import * as React from 'react';
import { IconList } from '../icons/Icons';
export declare type customProps = {
    customSize?: 'small' | 'medium' | 'large';
    readOnly?: boolean;
    icon?: keyof typeof IconList;
};
export declare type TextFieldProps = Props & customProps;
export declare const useStyles: (props?: any) => Record<"muiInputFocus" | "muiInputLabelRoot" | "MuiFormHelperTextRoot" | "muiInputLabelFormControl" | "muiInputRoot" | "muiInputRootSmall" | "muiInputRootMedium" | "muiInputRootLarge" | "muiInputmultiline" | "MuiFormHelperTextContained", string>;
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
