import * as React from 'react';
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
};
declare const CardCleanerContract: React.FC<CardCleanerContractProps>;
export default CardCleanerContract;
