"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPanel = void 0;
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var CircularProgress_1 = __importDefault(require("../atom/CircularProgress"));
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    panel: {
        border: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        borderRadius: 4,
        padding: theme.spacing(2)
    },
    empty: {
        padding: theme.spacing(10, 0),
        textAlign: 'center',
        color: dashboard_1.DASHBOARD_COLORS.muted
    }
}); });
// The bordered box a chart sits in, with its waiting and empty states.
var DashboardPanel = function (_a) {
    var message = _a.message, _b = _a.loading, loading = _b === void 0 ? false : _b, children = _a.children;
    var classes = useStyles();
    var placeholder = loading || message;
    return (react_1.default.createElement(Box_1.default, { className: classes.panel }, placeholder ? (react_1.default.createElement(Box_1.default, { className: classes.empty }, loading ? (react_1.default.createElement(CircularProgress_1.default, null)) : (react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium" }, message)))) : (children)));
};
exports.DashboardPanel = DashboardPanel;
exports.default = exports.DashboardPanel;
//# sourceMappingURL=DashboardPanel.js.map