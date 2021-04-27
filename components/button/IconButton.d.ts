import { IconButtonProps as Props } from '@material-ui/core/IconButton';
import * as React from 'react';
import { IconsProps } from '../icons/Icons';
export declare type IconButtonProps = {
    btnSize?: 'small' | 'medium';
} & Props & IconsProps;
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
