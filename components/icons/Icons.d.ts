import React from 'react';
import Icons from '../../stories/assets/icons';
export declare type IconName = keyof typeof Icons;
export declare type IconsProps = {
    iconName: IconName;
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
};
declare const Icon: React.FC<IconsProps>;
export default Icon;
