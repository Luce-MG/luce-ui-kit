import React from 'react';
import { DashboardChartConfig as Chart, DashboardChartSeries, DashboardColumn } from '../../lib/dashboard';
export interface DashboardChartProps {
    chart: Chart;
    columns: DashboardColumn[];
    series: DashboardChartSeries[];
    referenceLines: number[];
    onDownloadCsv?(): void;
    downloading?: boolean;
    imageFileName?: string;
}
export declare const DashboardChart: React.FC<DashboardChartProps>;
export default DashboardChart;
