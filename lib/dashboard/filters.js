"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardFilterLabel = exports.isDashboardDateRangeFilter = void 0;
var types_1 = require("./types");
function isDashboardDateRangeFilter(filter) {
    return (filter.operator === types_1.DashboardFilterOperator.BETWEEN &&
        filter.type === types_1.DashboardFilterType.DATE);
}
exports.isDashboardDateRangeFilter = isDashboardDateRangeFilter;
// A required filter's label carries a star.
function dashboardFilterLabel(filter) {
    return filter.required ? filter.label + " *" : filter.label;
}
exports.dashboardFilterLabel = dashboardFilterLabel;
//# sourceMappingURL=filters.js.map