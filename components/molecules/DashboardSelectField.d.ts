import React from 'react';
import { DashboardFilterOption } from '../../lib/dashboard';
export interface DashboardSelectFieldProps {
    label: string;
    options: DashboardFilterOption[];
    values: string[];
    multiple: boolean;
    onChange(values: string[]): void;
}
export declare const DashboardSelectField: React.FC<DashboardSelectFieldProps>;
export default DashboardSelectField;
