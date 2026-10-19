import React from 'react';
export interface DashboardDownloadOption {
    label: string;
    onClick(): void;
}
export interface DashboardDownloadButtonProps {
    options: DashboardDownloadOption[];
    disabled?: boolean;
    downloading?: boolean;
}
export declare const DashboardDownloadButton: React.FC<DashboardDownloadButtonProps>;
export default DashboardDownloadButton;
