import React from 'react';
import * as IconList from '../../stories/assets/icons';
export declare type IconName = keyof typeof IconList;
export { IconList };
export declare type IconsProps = {
    iconName: IconName;
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
} & React.SVGProps<SVGSVGElement>;
declare const Icon: React.FC<IconsProps>;
export default Icon;
