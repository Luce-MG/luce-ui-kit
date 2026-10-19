import React from 'react';
import { DashboardColumn, DashboardRow } from '../../lib/dashboard';
export interface DashboardTableProps {
    dashboardKey: string;
    columns: DashboardColumn[];
    rows: DashboardRow[];
    loading: boolean;
    generated: boolean;
    emptyMessage: string;
    sortBy: string;
    sortAscending: boolean;
    onSort(column: string): void;
    page: number;
    rowsPerPage: number;
    totalCount: number;
    onChangePage(page: number): void;
    search: string;
    onSearch(value: string): void;
    onDownloadCsv(): void;
    downloading: boolean;
}
export declare const DashboardTable: React.FC<DashboardTableProps>;
export default DashboardTable;
