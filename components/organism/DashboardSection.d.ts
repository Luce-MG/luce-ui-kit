import React from 'react';
import { DashboardAggregate, DashboardFilter, DashboardFilterValues } from '../../lib/dashboard';
export interface DashboardSectionProps {
    title: string;
    filters: DashboardFilter[];
    filterValues: DashboardFilterValues;
    onChangeFilter(key: string, values: string[]): void;
    onGenerate(): void;
    generating?: boolean;
    blockingLabels?: string[];
    hint?: string;
    meta?: string;
    totals?: DashboardAggregate[];
    children?: React.ReactNode;
}
export declare const DashboardSection: React.FC<DashboardSectionProps>;
export default DashboardSection;
