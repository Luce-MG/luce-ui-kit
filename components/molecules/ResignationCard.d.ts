import * as React from 'react';
import { CardPopoverProps } from '../molecules/CardPopover';
import { CustomVariant } from '../tags/Tags';
export interface ResignedCleaner {
    name: string;
    phone: string;
    type: string;
    nationality: string;
    lastDay?: string;
    offboardedDate?: string;
}
export declare type ResignationCardProps = {
    resignedCleaner: ResignedCleaner;
    tagLabel: string;
    labelVariant: CustomVariant;
    onClick(): void;
    data?: CardPopoverProps['data'];
};
declare const ResignationCard: React.FC<ResignationCardProps>;
export default ResignationCard;
