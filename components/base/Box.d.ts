import { BoxProps as Props } from '@material-ui/core/Box';
import * as React from 'react';
export declare type CustomBoxProps = {
    modalOverlay?: boolean;
    colorSystem?: 'primary' | 'secondary' | 'cta' | 'black' | 'white' | 'success' | 'error' | 'link' | 'additional1' | 'additional2' | 'base1' | 'base2' | 'base3' | 'tint1' | 'tint2' | 'tint3';
};
export declare type BoxProps = Props & CustomBoxProps;
declare const Box: React.FC<BoxProps>;
export default Box;
