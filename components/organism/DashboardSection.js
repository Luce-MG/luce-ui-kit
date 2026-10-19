"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardSection = void 0;
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var BoxRow_1 = __importDefault(require("../atom/BoxRow"));
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("../button/Button"));
var DashboardFilterField_1 = __importDefault(require("../molecules/DashboardFilterField"));
var DashboardTotals_1 = __importDefault(require("../molecules/DashboardTotals"));
var DashboardFilterBar_1 = __importDefault(require("./DashboardFilterBar"));
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    section: {
        marginBottom: theme.spacing(6)
    },
    title: {
        marginBottom: theme.spacing(1)
    },
    card: {
        background: theme.palette.common.white,
        padding: theme.spacing(4),
        marginTop: theme.spacing(2),
        '& > * + *': {
            marginTop: theme.spacing(3)
        }
    },
    hint: {
        color: dashboard_1.DASHBOARD_COLORS.text
    },
    error: {
        color: theme.palette.error.main
    },
    meta: {
        color: dashboard_1.DASHBOARD_COLORS.subtle
    },
    generateButton: {
        width: 200,
        height: dashboard_1.DASHBOARD_CONTROL_HEIGHT,
        flexShrink: 0,
        background: dashboard_1.DASHBOARD_COLORS.primary,
        color: theme.palette.common.white,
        '&:hover': {
            background: dashboard_1.DASHBOARD_COLORS.primaryHover
        }
    }
}); });
// One dashboard as a card, laid out like the Tooljet pages: the title above,
// then the filters with Generate Data, a hint row, the totals, and the charts
// and table passed as children.
var DashboardSection = function (_a) {
    var title = _a.title, filters = _a.filters, filterValues = _a.filterValues, onChangeFilter = _a.onChangeFilter, onGenerate = _a.onGenerate, _b = _a.generating, generating = _b === void 0 ? false : _b, _c = _a.blockingLabels, blockingLabels = _c === void 0 ? [] : _c, hint = _a.hint, meta = _a.meta, _d = _a.totals, totals = _d === void 0 ? [] : _d, children = _a.children;
    var classes = useStyles();
    var blocked = blockingLabels.length > 0;
    return (react_1.default.createElement(Box_1.default, { className: classes.section },
        react_1.default.createElement(Typography_1.default, { variant: "h4", className: classes.title }, title),
        react_1.default.createElement(Box_1.default, { className: classes.card },
            react_1.default.createElement(Box_1.default, null,
                react_1.default.createElement(BoxRow_1.default, { justifyContent: "space-between", align: "flex-start", gap: 3 },
                    react_1.default.createElement(DashboardFilterBar_1.default, { filters: filters, values: filterValues, onChange: onChangeFilter }),
                    react_1.default.createElement(DashboardFilterField_1.default, { label: "" },
                        react_1.default.createElement(Button_1.default, { variants: "primary", className: classes.generateButton, disabled: blocked || generating, onClick: onGenerate }, "Generate Data"))),
                react_1.default.createElement(BoxRow_1.default, { justifyContent: "space-between", align: "center", mt: 1.5 },
                    blocked ? (react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium", className: classes.error }, "Fill in: " + blockingLabels.join(', '))) : (react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium", className: classes.hint }, hint)),
                    meta && (react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium", className: classes.meta }, meta)))),
            totals.length > 0 && react_1.default.createElement(DashboardTotals_1.default, { totals: totals }),
            children)));
};
exports.DashboardSection = DashboardSection;
exports.default = exports.DashboardSection;
//# sourceMappingURL=DashboardSection.js.map