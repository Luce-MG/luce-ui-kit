import { GridProps as Props } from '@material-ui/core/Grid';
import * as React from 'react';
export declare type StyledGrid = {
    customSpacing: 'spacing-xs' | 'spacing-s' | 'spacing-m' | 'spacing-l' | 'spacing-xl' | 'spacing-2x-l';
};
export declare type GridProps = Props & StyledGrid;
export declare const GridSpacing: React.FC<GridProps>;
export default GridSpacing;
