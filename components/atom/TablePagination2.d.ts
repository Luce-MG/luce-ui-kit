import * as React from 'react';
interface TablePagination2Props {
    dataLength: number;
    onChange(page: number): void;
    onChangeRowsPerPage?(rows: number): void;
    rowsPerPage: number;
    rowsPerPageOptions?: number[];
    count: number;
}
export declare type Pagination2Props = {
    count: number;
    rowsPerPage: number;
    onChange(page: number): void;
    onChangeRowsPerPage?(rows: number): void;
};
export declare function getCount(count: number, rowsPerPage: number): number;
declare const TablePagination2: React.FC<TablePagination2Props>;
export default TablePagination2;
