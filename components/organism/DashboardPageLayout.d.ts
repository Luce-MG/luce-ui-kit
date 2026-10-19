import React from 'react';
export interface DashboardPageLayoutProps {
    backLabel?: string;
    onBack(): void;
    loading?: boolean;
    emptyMessage?: string;
    children?: React.ReactNode;
}
export declare const DashboardPageLayout: React.FC<DashboardPageLayoutProps>;
export default DashboardPageLayout;
