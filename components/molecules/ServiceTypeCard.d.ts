import * as React from 'react';
import { IconList } from '../icons/Icons';
export declare type ServiceTypeCardProps = {
    isSelected: boolean;
    onClick(): void;
    iconName: keyof typeof IconList;
    label: string;
};
declare const ServiceTypeCard: React.FC<ServiceTypeCardProps>;
export default ServiceTypeCard;
