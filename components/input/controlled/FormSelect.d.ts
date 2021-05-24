import React from 'react';
import { TextFieldProps as Props } from '../Input';
export declare type SelectOption = {
    value: string;
    label: string;
};
export declare type SelectOptions = SelectOption[];
declare type ReactHookSelectProps = {
    name: string;
    options: SelectOptions;
};
export declare type FormSelectProps = Props & ReactHookSelectProps;
declare const FormSelect: React.FC<FormSelectProps>;
export default FormSelect;
