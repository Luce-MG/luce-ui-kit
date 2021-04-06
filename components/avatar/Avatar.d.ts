import { AvatarProps as Props } from '@material-ui/core/Avatar';
import * as React from 'react';
export declare type StyledAvatar = {
    customSize?: 'small' | 'medium' | 'large' | 'xl';
    imageAvatar: boolean;
};
export declare type AvatarProps = Props & StyledAvatar;
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
