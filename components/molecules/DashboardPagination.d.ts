import React from 'react';
export interface DashboardPaginationProps {
    page: number;
    pageCount: number;
    disabled?: boolean;
    onChangePage(page: number): void;
}
export declare const DashboardPagination: React.FC<DashboardPaginationProps>;
export default DashboardPagination;
