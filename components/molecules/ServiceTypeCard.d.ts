import { CardProps } from '@material-ui/core/Card';
import * as React from 'react';
import { IconList, IconsProps } from '../icons/Icons';
export declare type ServiceTypeCardProps = {
    isSelected: boolean;
    onClick(): void;
    iconName: keyof typeof IconList;
    label: string;
    className?: string;
    iconProps?: IconsProps;
    cardProps?: CardProps;
};
declare const ServiceTypeCard: React.FC<ServiceTypeCardProps>;
export default ServiceTypeCard;
