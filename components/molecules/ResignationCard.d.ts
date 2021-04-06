import * as React from 'react';
import { CardPopoverProps } from '../molecules/CardPopover';
import { TagInterface } from '../tags/Tags';
export interface Cleaner {
    name: string;
    phone: string;
    type: string;
    nationality: string;
    lastDay: string;
    offboardedDate: string;
}
export declare type ResignationCardProps = {
    cleaner: Cleaner;
    tag: TagInterface;
    data: CardPopoverProps['data'];
};
declare const ResignationCard: React.FC<ResignationCardProps>;
export default ResignationCard;
