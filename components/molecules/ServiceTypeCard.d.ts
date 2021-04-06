import * as React from 'react';
import Icons from '../../stories/assets/icons';
export declare type ServiceTypeCardProps = {
    isSelected: boolean;
    onClick(): void;
    iconName: keyof typeof Icons;
    label: string;
};
declare const ServiceTypeCard: React.FC<ServiceTypeCardProps>;
export default ServiceTypeCard;
