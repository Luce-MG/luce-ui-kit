import React from 'react';
import { DashboardReport } from '../../lib/dashboard';
export interface DashboardReportCardProps {
    report: DashboardReport;
    onOpen(path: string): void;
}
export declare const DashboardReportCard: React.FC<DashboardReportCardProps>;
export default DashboardReportCard;
