import * as React from 'react';
import { AccordionProps } from '../accordion/AccordionScheduleDay';
import { TagInterface } from '../tags/Tags';
export interface JobAssignment {
    id: number;
    jobType: string;
    client: string;
    startDate: string;
    endDate: string;
}
export declare type StyledJobAssignmentCard = {
    job: JobAssignment;
    tag: TagInterface;
};
export declare type CardJobAssignmentProps = StyledJobAssignmentCard & AccordionProps;
declare const CardJobAssignment: React.FC<CardJobAssignmentProps>;
export default CardJobAssignment;
