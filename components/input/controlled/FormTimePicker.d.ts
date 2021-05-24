import * as React from 'react';
import { KeyboardTimePickerProps as MuiKeyboardTimePickerProps } from '../../atom/Pickers';
declare type ReactHookTimePickerProps = {
    name: string;
};
export declare type FormTimePickerProps = ReactHookTimePickerProps & Omit<MuiKeyboardTimePickerProps, 'value' | 'onChange'>;
declare const FormTimePicker: React.FC<FormTimePickerProps>;
export default FormTimePicker;
