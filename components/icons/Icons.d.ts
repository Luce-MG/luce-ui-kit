import React from 'react';
import Icons from '../../stories/assets/icons';
export declare type IconsProps = {
    iconName: keyof typeof Icons;
    size: 'small' | 'medium' | 'large' | 'extraLarge';
};
declare const Icon: React.FC<IconsProps>;
export default Icon;
