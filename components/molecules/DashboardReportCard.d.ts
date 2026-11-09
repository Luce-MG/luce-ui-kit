import React from 'react';
import { DashboardReport } from '../../lib/dashboard';
export interface DashboardReportCardProps {
    report: DashboardReport;
    onOpen(path: string): void;
    favorite?: boolean;
    onToggleFavorite?(favorite: boolean): void;
}
export declare const DashboardReportCard: React.FC<DashboardReportCardProps>;
export default DashboardReportCard;
