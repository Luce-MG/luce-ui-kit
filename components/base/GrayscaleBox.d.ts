import * as React from 'react';
import { BoxProps } from './Box';
export interface ScaleColor {
    name: string;
    color: string;
    textColor: string;
}
export declare type StyledGrayscale = {
    primary?: boolean;
};
export declare type ScaleProps = BoxProps & StyledGrayscale;
declare const BoxGrayscale: React.FC<ScaleProps>;
export default BoxGrayscale;
