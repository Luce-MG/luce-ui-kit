import * as React from 'react';
import { CardPopoverProps } from '../molecules/CardPopover';
import { TagInterface } from '../tags/Tags';
export interface Visit {
    id: string;
    packageCode: string;
    cleaner: string;
    client: string;
    address: string;
    date: string;
    time: string;
}
export declare type VisitAssignmentCardProps = {
    visit: Visit;
    tag: TagInterface;
    data: CardPopoverProps['data'];
};
declare const VisitAssignmentCard: React.FC<VisitAssignmentCardProps>;
export default VisitAssignmentCard;
