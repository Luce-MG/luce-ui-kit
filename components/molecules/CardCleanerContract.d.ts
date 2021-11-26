import * as React from 'react';
import { Schedule } from '../accordion/AccordionScheduleDay';
interface CleanerContract {
    id: string;
    startDate: string;
    salary: number;
    periodSalary: string;
    cleanerType: string;
    endDate?: string;
    schedule?: Schedule[];
}
export declare type CardCleanerContractProps = {
    contracts: CleanerContract;
    onClick(id: string): void;
};
declare const CardCleanerContract: React.FC<CardCleanerContractProps>;
export default CardCleanerContract;
