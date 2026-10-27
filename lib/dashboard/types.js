"use strict";
// Shapes of the dashboard query (luce-backend AnalyticComponent) that the
// dashboard components render. Typed structurally, so the generated GraphQL
// types of an app can be passed in as they are.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardFilterType = exports.DashboardFilterOperator = exports.DashboardChartType = exports.DashboardColumnType = void 0;
// How a column's values are formatted. An identifier is printed as is.
exports.DashboardColumnType = {
    STRING: 'STRING',
    IDENTIFIER: 'IDENTIFIER',
    NUMBER: 'NUMBER',
    CURRENCY: 'CURRENCY',
    PERCENT: 'PERCENT',
    DATE: 'DATE'
};
exports.DashboardChartType = {
    LINE: 'LINE',
    BAR: 'BAR'
};
exports.DashboardFilterOperator = {
    IN: 'IN',
    BETWEEN: 'BETWEEN'
};
exports.DashboardFilterType = {
    STRING: 'STRING',
    NUMBER: 'NUMBER',
    DATE: 'DATE'
};
//# sourceMappingURL=types.js.map