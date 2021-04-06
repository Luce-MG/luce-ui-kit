import { ButtonProps as Props } from '@material-ui/core/Button';
import * as React from 'react';
export declare type StyledButton = {
    variants?: 'primary' | 'cta' | 'ghost' | 'basic';
    customSize?: 'xs' | 'small' | 'medium' | 'large';
};
export declare type ButtonProps = Props & StyledButton;
declare const Button: React.FC<ButtonProps>;
export default Button;
