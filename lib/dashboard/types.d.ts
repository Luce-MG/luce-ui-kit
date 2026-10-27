export declare const DashboardColumnType: {
    STRING: string;
    IDENTIFIER: string;
    NUMBER: string;
    CURRENCY: string;
    PERCENT: string;
    DATE: string;
};
export declare const DashboardChartType: {
    LINE: string;
    BAR: string;
};
export interface DashboardColumn {
    key: string;
    label: string;
    type: string;
}
export declare type DashboardRow = Record<string, unknown>;
export interface DashboardChartConfig {
    key: string;
    type: string;
    x: string;
    y: string;
    title?: string | null;
    yTitle?: string | null;
    splitBy?: string | null;
    tooltipColumns: string[];
}
export interface DashboardChartSeries {
    key: string;
    name: string | null;
    x: string[];
    y: (number | null)[];
    provisional: boolean[] | null;
    customdata: any;
}
export declare const DashboardFilterOperator: {
    IN: string;
    BETWEEN: string;
};
export declare const DashboardFilterType: {
    STRING: string;
    NUMBER: string;
    DATE: string;
};
export interface DashboardFilterOption {
    value: string;
    label: string;
}
export interface DashboardFilter {
    key: string;
    label: string;
    type: string;
    operator: string;
    multiple: boolean;
    required: boolean;
    options: DashboardFilterOption[] | null;
}
export declare type DashboardFilterValues = Record<string, string[]>;
export interface DashboardAggregate {
    key: string;
    label: string;
    value: number | null;
}
export interface DashboardReport {
    title: string;
    description: string;
    category: string;
    path: string;
    keywords: string[];
}
