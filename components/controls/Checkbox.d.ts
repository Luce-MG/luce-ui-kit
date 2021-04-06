import { CheckboxProps as Props } from '@material-ui/core/Checkbox';
import * as React from 'react';
export declare type StyledCheckbox = {
    label: string;
};
export declare type CheckboxProps = Props & StyledCheckbox;
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
