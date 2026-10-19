"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardFilterField = exports.useDashboardControlStyles = void 0;
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var BoxRow_1 = __importDefault(require("../atom/BoxRow"));
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
// Shared by the filter controls: one height and font for every input.
exports.useDashboardControlStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    control: {
        '& .MuiOutlinedInput-root': {
            height: dashboard_1.DASHBOARD_CONTROL_HEIGHT,
            fontSize: 14,
            background: theme.palette.common.white
        },
        '& .MuiOutlinedInput-input': {
            paddingTop: 0,
            paddingBottom: 0
        },
        '& .MuiAutocomplete-inputRoot': {
            flexWrap: 'nowrap',
            overflow: 'hidden',
            paddingTop: 0,
            paddingBottom: 0
        },
        '& .MuiIconButton-root': {
            padding: 4
        }
    }
}); });
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    label: {
        height: 20,
        marginBottom: theme.spacing(0.75),
        color: dashboard_1.DASHBOARD_COLORS.heading,
        whiteSpace: 'nowrap'
    }
}); });
// A label above one or more filter controls.
var DashboardFilterField = function (_a) {
    var label = _a.label, children = _a.children;
    var classes = useStyles();
    return (react_1.default.createElement(Box_1.default, null,
        react_1.default.createElement(Typography_1.default, { bodyVariants: "xsBold", className: classes.label }, label || ' '),
        react_1.default.createElement(BoxRow_1.default, { gap: 1 }, children)));
};
exports.DashboardFilterField = DashboardFilterField;
exports.default = exports.DashboardFilterField;
//# sourceMappingURL=DashboardFilterField.js.map