import * as React from 'react';
interface NoCountTablePaginationProps {
    dataLength: number;
    onChange(page: number): void;
    onChangeRowsPerPage?(rows: number): void;
    rowsPerPage: number;
    rowsPerPageOptions?: number[];
    count: number;
}
export declare type NoCountPaginationProps = {
    count: number;
    rowsPerPage: number;
    onChange(page: number): void;
    onChangeRowsPerPage?(rows: number): void;
};
export declare function getCount(count: number, rowsPerPage: number): number;
declare const NoCountTablePagination: React.FC<NoCountTablePaginationProps>;
export default NoCountTablePagination;
