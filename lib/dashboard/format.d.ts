import { DashboardRow } from './types';
export declare function formatDashboardNumber(value: unknown): string;
export declare function formatDashboardDate(value: unknown): string;
export declare function isDashboardEnumColumn(rows: DashboardRow[], key: string): boolean;
export declare function formatDashboardEnum(value: unknown): string;
export declare function formatDashboardCell(value: unknown, type: string): string;
export declare function isDashboardNumericColumn(type: string): boolean;
