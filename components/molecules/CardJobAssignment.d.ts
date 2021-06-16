import * as React from 'react';
import { AccordionScheduleProps } from '../accordion/AccordionScheduleDay';
import { PackageJobVisitProps } from '../button/PackageJobVisitLink';
import { TagInterface } from '../tags/Tags';
import { CardPopoverProps } from './CardPopover';
export interface JobAssignment {
    id: string;
    packageCode: string;
    cleaner?: string;
    client: string;
    startDate: string;
    endDate: string;
}
export declare type CardJobAssignmentProps = {
    job: JobAssignment;
    tags: TagInterface[];
} & AccordionScheduleProps & CardPopoverProps & PackageJobVisitProps;
declare const CardJobAssignment: React.FC<CardJobAssignmentProps>;
export default CardJobAssignment;
