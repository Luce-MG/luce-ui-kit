import React from 'react';
export interface DashboardTextFieldProps {
    label: string;
    values: string[];
    multiple?: boolean;
    range?: boolean;
    numeric?: boolean;
    onChange(values: string[]): void;
}
export declare const DashboardTextField: React.FC<DashboardTextFieldProps>;
export default DashboardTextField;
