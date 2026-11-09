"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardReportCard = void 0;
var ButtonBase_1 = __importDefault(require("@material-ui/core/ButtonBase"));
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    root: {
        position: 'relative',
        display: 'flex'
    },
    card: {
        flex: 1,
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
    titleWithStar: {
        paddingRight: theme.spacing(3.5)
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
    },
    star: {
        position: 'absolute',
        top: theme.spacing(1.5),
        right: theme.spacing(1.5),
        padding: theme.spacing(0.5),
        borderRadius: 4,
        color: dashboard_1.DASHBOARD_COLORS.muted,
        '&:hover, &:focus-visible': {
            background: dashboard_1.DASHBOARD_COLORS.rowHover
        }
    },
    starOn: {
        color: dashboard_1.DASHBOARD_COLORS.favourite
    }
}); });
// A report on the dashboards page; the whole card opens it. The star sits
// beside the card rather than inside it, so starring never opens the report.
var DashboardReportCard = function (_a) {
    var report = _a.report, onOpen = _a.onOpen, _b = _a.favorite, favorite = _b === void 0 ? false : _b, onToggleFavorite = _a.onToggleFavorite;
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(ButtonBase_1.default, { className: classes.card, onClick: function () { return onOpen(report.path); } },
            react_1.default.createElement("span", { className: clsx_1.default(classes.title, onToggleFavorite && classes.titleWithStar) }, report.title),
            react_1.default.createElement("span", { className: classes.description }, report.description),
            react_1.default.createElement("span", { className: classes.category }, report.category)),
        onToggleFavorite && (react_1.default.createElement(ButtonBase_1.default, { className: clsx_1.default(classes.star, favorite && classes.starOn), "aria-label": favorite
                ? "Remove " + report.title + " from favourites"
                : "Add " + report.title + " to favourites", "aria-pressed": favorite, onClick: function () { return onToggleFavorite(!favorite); } },
            react_1.default.createElement(Icons_1.default, { iconName: "StarIcon", size: "small", fill: favorite ? 'currentColor' : 'none' })))));
};
exports.DashboardReportCard = DashboardReportCard;
exports.default = exports.DashboardReportCard;
//# sourceMappingURL=DashboardReportCard.js.map