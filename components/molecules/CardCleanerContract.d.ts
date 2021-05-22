import * as React from 'react';
import { AccordionScheduleProps } from '../accordion/AccordionScheduleDay';
interface CleanerContract {
    id: number;
    startDate: string;
    salary: number;
    periodSalary: string;
    cleanerType: string;
}
export declare type CardCleanerContractProps = {
    contracts: CleanerContract;
    onClick(id: number): void;
} & AccordionScheduleProps;
declare const CardCleanerContract: React.FC<CardCleanerContractProps>;
export default CardCleanerContract;
