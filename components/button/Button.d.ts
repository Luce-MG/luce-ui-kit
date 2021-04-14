import { ButtonProps as Props } from '@material-ui/core/Button';
import * as React from 'react';
export declare type ButtonVariants = 'primary' | 'cta' | 'ghost' | 'basic';
export declare type StyledButton = {
    variants?: ButtonVariants;
    customSize?: 'xs' | 'small' | 'medium' | 'large';
};
export declare type ButtonProps = Props & StyledButton;
declare const Button: React.FC<ButtonProps>;
export default Button;
