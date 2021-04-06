import * as React from 'react';
import { AccordionProps } from '../accordion/AccordionScheduleDay';
export interface CleanerContract {
    id: number;
    startDate: string;
    salary: number;
    periodSalary: string;
    cleanerType: string;
}
export declare type StyledCard = {
    contracts: CleanerContract;
    onClick(id: number): void;
};
export declare type CardProps = StyledCard & AccordionProps;
declare const CardCleanerContract: React.FC<CardProps>;
export default CardCleanerContract;
