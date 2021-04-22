import { AvatarProps as Props } from '@material-ui/core/Avatar';
import * as React from 'react';
export declare type AvatarProps = {
    customSize?: 'small' | 'medium' | 'large' | 'xl';
    imageAvatar?: boolean;
} & Props;
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
