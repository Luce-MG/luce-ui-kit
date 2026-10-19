import React from 'react';
export interface DashboardDateRangeFieldProps {
    label: string;
    values: string[];
    onChange(values: string[]): void;
}
export declare const DashboardDateRangeField: React.FC<DashboardDateRangeFieldProps>;
export default DashboardDateRangeField;
