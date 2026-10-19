"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardReportCard = void 0;
var ButtonBase_1 = __importDefault(require("@material-ui/core/ButtonBase"));
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        textAlign: 'left',
        minHeight: 140,
        padding: theme.spacing(2, 2.5),
        border: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        borderRadius: 6,
        background: theme.palette.common.white,
        '&:hover, &:focus-visible': {
            borderColor: dashboard_1.DASHBOARD_COLORS.primary,
            boxShadow: '0 1px 4px rgba(17, 24, 28, 0.08)'
        }
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: dashboard_1.DASHBOARD_COLORS.heading
    },
    description: {
        flex: 1,
        marginTop: theme.spacing(0.75),
        fontSize: 14,
        lineHeight: '20px',
        color: dashboard_1.DASHBOARD_COLORS.subtle
    },
    category: {
        marginTop: theme.spacing(2),
        fontSize: 13,
        color: dashboard_1.DASHBOARD_COLORS.subtle
    }
}); });
// A report on the dashboards page; the whole card opens it.
var DashboardReportCard = function (_a) {
    var report = _a.report, onOpen = _a.onOpen;
    var classes = useStyles();
    return (react_1.default.createElement(ButtonBase_1.default, { className: classes.card, onClick: function () { return onOpen(report.path); } },
        react_1.default.createElement("span", { className: classes.title }, report.title),
        react_1.default.createElement("span", { className: classes.description }, report.description),
        react_1.default.createElement("span", { className: classes.category }, report.category)));
};
exports.DashboardReportCard = DashboardReportCard;
exports.default = exports.DashboardReportCard;
//# sourceMappingURL=DashboardReportCard.js.map