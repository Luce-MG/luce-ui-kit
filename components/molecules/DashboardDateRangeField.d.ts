import React from 'react';
export interface DashboardDateRangeFieldProps {
    label: string;
    values: string[];
    fullWidth?: boolean;
    onChange(values: string[]): void;
}
export declare const DashboardDateRangeField: React.FC<DashboardDateRangeFieldProps>;
export default DashboardDateRangeField;
