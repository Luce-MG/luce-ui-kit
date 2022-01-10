import * as React from 'react';
export interface NoCountTablePaginationProps {
    dataLength?: number;
    onChange(page: number): void;
    onChangeRowsPerPage?(rows: number): void;
    rowsPerPage: number;
    rowsPerPageOptions?: number[];
    count: number;
    page: number;
}
declare const NoCountTablePagination: React.FC<NoCountTablePaginationProps>;
export default NoCountTablePagination;
