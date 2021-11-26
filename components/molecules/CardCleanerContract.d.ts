import * as React from 'react';
import { Schedule } from '../accordion/AccordionScheduleDay';
interface CleanerContract {
    id: number;
    startDate: string;
    salary: number;
    periodSalary: string;
    cleanerType: string;
    endDate?: string;
    schedule?: Schedule[];
}
export declare type CardCleanerContractProps = {
    contracts: CleanerContract;
    onClick(id: number): void;
};
declare const CardCleanerContract: React.FC<CardCleanerContractProps>;
export default CardCleanerContract;
