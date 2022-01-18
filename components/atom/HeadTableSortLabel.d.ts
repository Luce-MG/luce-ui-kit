import React from 'react';
export interface HeadTableCell {
    valueName: string;
    label: string;
    isNotSortAble?: boolean;
}
export declare type Order = 'asc' | 'desc';
export declare type HeadTableSortLabelProps = {
    headCells: HeadTableCell[];
    order: Order;
    orderBy: string;
    onRequestSort: (property: string) => void;
    isCheckboxShow?: boolean;
    onSelectAllList?(): void;
    selectAllList?: boolean;
};
export declare function descendingComparator<T>(a: T, b: T, orderBy: keyof T): 1 | -1 | 0;
export declare function getComparator<T>(order: Order, orderBy: keyof T): (a: T, b: T) => number;
export declare function stableSort<T>(array: any[], comparator: (a: T, b: T) => any): T[];
declare const HeadTableSortLabel: React.FC<HeadTableSortLabelProps>;
export default HeadTableSortLabel;
