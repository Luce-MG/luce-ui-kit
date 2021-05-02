import DateFnsUtils from '@date-io/date-fns';
import { TimePickerProps as MuiTimePickerProps, KeyboardDatePickerProps as MuiKeyboardDatePickerProps, MuiPickersUtilsProvider as PickersUtilsProvider } from '@material-ui/pickers';
import * as React from 'react';
export declare type TimePickerProps = MuiTimePickerProps;
export declare type KeyboardDatePickerProps = MuiKeyboardDatePickerProps;
declare const TimePicker: React.FC<TimePickerProps>;
declare const KeyboardDatePicker: React.FC<KeyboardDatePickerProps>;
export { TimePicker, KeyboardDatePicker, PickersUtilsProvider, DateFnsUtils };
export default TimePicker;
