import { MaterialUiPhoneNumberProps } from 'material-ui-phone-number';
import * as React from 'react';
import { TextFieldProps } from '../Input';
interface Props extends MaterialUiPhoneNumberProps {
    name: string;
    label?: string;
    placeholder?: string;
    style?: object;
    readOnly?: boolean;
    autoFormat?: boolean;
}
export declare type PhoneInputProps = Props & TextFieldProps;
declare const FormPhoneField: React.FC<PhoneInputProps>;
export default FormPhoneField;
