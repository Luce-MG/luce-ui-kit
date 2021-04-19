import * as React from 'react';
import { AccordionProps } from '../accordion/AccordionScheduleDay';
import { TagInterface } from '../tags/Tags';
import { CardPopoverProps } from './CardPopover';
export interface JobAssignment {
    id: number;
    packageCode: string;
    cleaner?: string;
    client: string;
    startDate: string;
    endDate: string;
}
export declare type CardJobAssignmentProps = {
    job: JobAssignment;
    tags: TagInterface[];
} & AccordionProps & CardPopoverProps;
declare const CardJobAssignment: React.FC<CardJobAssignmentProps>;
export default CardJobAssignment;
