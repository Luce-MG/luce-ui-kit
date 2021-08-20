import React from 'react';
import { BoxProps } from '../base/Box';
export declare type BoxRowProps = {
    children: React.ReactNode;
    gap?: number;
    width?: string | number;
    direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse' | 'revert' | 'unset';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
} & BoxProps;
declare const BoxRow: React.FC<BoxRowProps>;
export default BoxRow;
