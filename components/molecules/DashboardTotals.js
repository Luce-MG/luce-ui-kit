"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardTotals = void 0;
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    strip: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: 'minmax(180px, max-content)',
        border: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        borderRadius: 4
    },
    cell: {
        padding: theme.spacing(1.5, 3),
        '& + &': {
            borderLeft: "1px solid " + dashboard_1.DASHBOARD_COLORS.border
        }
    },
    label: {
        color: dashboard_1.DASHBOARD_COLORS.subtle
    }
}); });
// The totals over the whole filtered set, in one bordered strip.
var DashboardTotals = function (_a) {
    var totals = _a.totals;
    var classes = useStyles();
    if (!totals.length)
        return null;
    return (react_1.default.createElement(Box_1.default, { className: classes.strip }, totals.map(function (total) { return (react_1.default.createElement(Box_1.default, { key: total.key, className: classes.cell },
        react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium", className: classes.label }, total.label),
        react_1.default.createElement(Typography_1.default, { bodyVariants: "mdBold" }, dashboard_1.formatDashboardNumber(total.value)))); })));
};
exports.DashboardTotals = DashboardTotals;
exports.default = exports.DashboardTotals;
//# sourceMappingURL=DashboardTotals.js.map