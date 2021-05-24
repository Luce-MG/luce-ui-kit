import React from 'react';
import { TextFieldProps as Props } from '../Input';
declare type ReactHookFormProps = {
    name: string;
};
export declare type FormTextFieldProps = Props & ReactHookFormProps;
declare const FormTextField: React.FC<FormTextFieldProps>;
export default FormTextField;
