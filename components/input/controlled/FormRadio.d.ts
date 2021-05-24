import { RadioGroupProps as Props } from '@material-ui/core/RadioGroup';
import React from 'react';
declare type ReactHookRadioProps = {
    name: string;
    label: string;
};
export declare type FormRadioProps = Props & ReactHookRadioProps;
declare const FormRadio: React.FC<FormRadioProps>;
export default FormRadio;
