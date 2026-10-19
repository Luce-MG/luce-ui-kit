import React from 'react';
export interface DashboardFilterFieldProps {
    label: string;
    children: React.ReactNode;
}
export declare const useDashboardControlStyles: (props?: any) => Record<"control", string>;
export declare const DashboardFilterField: React.FC<DashboardFilterFieldProps>;
export default DashboardFilterField;
