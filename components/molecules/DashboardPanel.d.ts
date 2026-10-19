import React from 'react';
export interface DashboardPanelProps {
    message?: string;
    loading?: boolean;
    children?: React.ReactNode;
}
export declare const DashboardPanel: React.FC<DashboardPanelProps>;
export default DashboardPanel;
