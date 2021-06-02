import * as React from 'react';
import { CardPopoverProps } from '../molecules/CardPopover';
import { CustomVariant } from '../tags/Tags';
export interface CleanerReasignation {
    id: number;
    name: string;
    phone: string;
    type: string;
    nationality: string;
    lastDay?: string;
    offboardedDate?: string;
    tag: CustomVariant;
    tagLabel: string;
}
export declare type ResignationCardProps = {
    cleaner: CleanerReasignation;
    data: CardPopoverProps['data'];
    hidePopover?: boolean;
    viewCleanerDetail(id: number): void;
};
declare const ResignationCard: React.FC<ResignationCardProps>;
export default ResignationCard;
