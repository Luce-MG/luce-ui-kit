import React from 'react';
export interface DashboardCsvConfirmDialogProps {
    reportTitle: string;
    totalCount: number;
    filters: {
        label: string;
        value: string;
    }[];
    search?: string;
    downloading?: boolean;
    onConfirm(): void;
    onClose(): void;
}
export declare const DashboardCsvConfirmDialog: React.FC<DashboardCsvConfirmDialogProps>;
export default DashboardCsvConfirmDialog;
