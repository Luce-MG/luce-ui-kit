import React from 'react';
import { DashboardFilter, DashboardFilterValues } from '../../lib/dashboard';
export interface DashboardFilterBarProps {
    filters: DashboardFilter[];
    values: DashboardFilterValues;
    onChange(key: string, values: string[]): void;
}
export declare const DashboardFilterBar: React.FC<DashboardFilterBarProps>;
export default DashboardFilterBar;
