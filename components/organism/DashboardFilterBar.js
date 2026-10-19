"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardFilterBar = void 0;
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var BoxRow_1 = __importDefault(require("../atom/BoxRow"));
var DashboardDateRangeField_1 = __importDefault(require("../molecules/DashboardDateRangeField"));
var DashboardSelectField_1 = __importDefault(require("../molecules/DashboardSelectField"));
var DashboardTextField_1 = __importDefault(require("../molecules/DashboardTextField"));
// Every filter a dashboard declares, each rendered from its operator and
// type: a date range as two pickers, a filter with options as a dropdown,
// anything else as free text.
var DashboardFilterBar = function (_a) {
    var filters = _a.filters, values = _a.values, onChange = _a.onChange;
    if (!filters.length)
        return null;
    return (react_1.default.createElement(BoxRow_1.default, { gap: 3, align: "flex-start", flexWrap: "wrap" }, filters.map(function (filter) {
        var _a;
        var label = dashboard_1.dashboardFilterLabel(filter);
        var filterValues = (_a = values[filter.key]) !== null && _a !== void 0 ? _a : [];
        var handleChange = function (next) {
            return onChange(filter.key, next);
        };
        if (dashboard_1.isDashboardDateRangeFilter(filter)) {
            return (react_1.default.createElement(DashboardDateRangeField_1.default, { key: filter.key, label: label, values: filterValues, onChange: handleChange }));
        }
        if (filter.options) {
            return (react_1.default.createElement(DashboardSelectField_1.default, { key: filter.key, label: label, options: filter.options, values: filterValues, multiple: filter.multiple, onChange: handleChange }));
        }
        return (react_1.default.createElement(DashboardTextField_1.default, { key: filter.key, label: label, values: filterValues, multiple: filter.multiple, range: filter.operator === dashboard_1.DashboardFilterOperator.BETWEEN, numeric: filter.type === dashboard_1.DashboardFilterType.NUMBER, onChange: handleChange }));
    })));
};
exports.DashboardFilterBar = DashboardFilterBar;
exports.default = exports.DashboardFilterBar;
//# sourceMappingURL=DashboardFilterBar.js.map