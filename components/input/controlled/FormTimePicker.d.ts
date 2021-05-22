import * as React from 'react';
import { KeyboardTimePickerProps as MuiKeyboardTimePickerProps } from '../../atom/Pickers';
declare type ReactHookTimePickerProps = {
    name: string;
};
export declare type FormTimePickerProps = MuiKeyboardTimePickerProps & ReactHookTimePickerProps;
declare const FormTimePicker: React.FC<FormTimePickerProps>;
export default FormTimePicker;
