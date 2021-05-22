import React from 'react';
import { TextFieldProps as Props } from '../Input';
export declare type MultiSelectOption = {
    value: string;
    label: string;
};
export declare type MultiSelectOptions = MultiSelectOption[];
declare type ReactHookMultiSelectProps = {
    name: string;
    options: MultiSelectOptions;
};
export declare type FormMultiSelectProps = Props & ReactHookMultiSelectProps;
export declare const FormMultiSelect: React.FC<FormMultiSelectProps>;
export {};
