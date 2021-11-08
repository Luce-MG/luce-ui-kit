import React from 'react';
import { CheckboxProps as Props } from '../../controls/Checkbox';
declare type ReactHookCheckboxProps = {
    name: string;
};
export declare type FormCheckboxProps = Props & ReactHookCheckboxProps;
declare const FormCheckbox: React.FC<FormCheckboxProps>;
export default FormCheckbox;
