import * as React from 'react';
import { AccordionScheduleProps } from '../accordion/AccordionScheduleDay';
interface CleanerContract {
    id: number;
    startDate: string;
    salary: number;
    periodSalary: string;
    cleanerType: string;
    endDate?: string;
}
export declare type CardCleanerContractProps = {
    contracts: CleanerContract;
    onClick(id: number): void;
} & Partial<AccordionScheduleProps>;
declare const CardCleanerContract: React.FC<CardCleanerContractProps>;
export default CardCleanerContract;
