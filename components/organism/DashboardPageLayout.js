"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPageLayout = void 0;
var react_1 = __importDefault(require("react"));
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var CircularProgress_1 = __importDefault(require("../atom/CircularProgress"));
var HistoryBack_1 = __importDefault(require("../atom/HistoryBack"));
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    page: {
        padding: theme.spacing(4, 6)
    },
    back: {
        marginBottom: theme.spacing(3)
    },
    state: {
        padding: theme.spacing(10, 0),
        textAlign: 'center'
    }
}); });
// A report page: a back link to the dashboards page above its sections.
var DashboardPageLayout = function (_a) {
    var _b = _a.backLabel, backLabel = _b === void 0 ? 'Dashboards' : _b, onBack = _a.onBack, _c = _a.loading, loading = _c === void 0 ? false : _c, _d = _a.emptyMessage, emptyMessage = _d === void 0 ? 'This report is not available' : _d, children = _a.children;
    var classes = useStyles();
    var empty = react_1.default.Children.count(children) === 0;
    return (react_1.default.createElement(Box_1.default, { className: classes.page },
        react_1.default.createElement(Box_1.default, { className: classes.back },
            react_1.default.createElement(HistoryBack_1.default, { goBack: onBack, label: backLabel, variant: "h6" })),
        loading && (react_1.default.createElement(Box_1.default, { className: classes.state },
            react_1.default.createElement(CircularProgress_1.default, null))),
        !loading && empty && (react_1.default.createElement(Box_1.default, { className: classes.state },
            react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium" }, emptyMessage))),
        !loading && children));
};
exports.DashboardPageLayout = DashboardPageLayout;
exports.default = exports.DashboardPageLayout;
//# sourceMappingURL=DashboardPageLayout.js.map