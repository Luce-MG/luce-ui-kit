import * as React from 'react';
import { TableProps } from '../atom/Table';
export declare type TableListProps = {
    head?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    classContainer?: string;
} & TableProps;
declare const TableList: React.FC<TableListProps>;
export default TableList;
