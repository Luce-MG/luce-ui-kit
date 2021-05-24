import * as React from 'react';
import { KeyboardDatePickerProps as MuiKeyboardDatePickerProps } from '../../atom/Pickers';
declare type ReactHookDatePickerProps = {
    name: string;
};
export declare type FormDatePickerProps = ReactHookDatePickerProps & Omit<MuiKeyboardDatePickerProps, 'value' | 'onChange'>;
declare const FormDatePicker: React.FC<FormDatePickerProps>;
export default FormDatePicker;
