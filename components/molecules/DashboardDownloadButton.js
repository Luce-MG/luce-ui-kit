"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardDownloadButton = void 0;
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Menu_1 = __importDefault(require("@material-ui/core/Menu"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var react_1 = __importStar(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var CircularProgress_1 = __importDefault(require("../atom/CircularProgress"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = ThemeProvider_1.makeStyles({
    button: {
        border: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        borderRadius: 4,
        padding: 6,
        color: dashboard_1.DASHBOARD_COLORS.text
    },
    option: {
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.text
    }
});
// The download control of the dashboard table and chart.
var DashboardDownloadButton = function (_a) {
    var options = _a.options, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.downloading, downloading = _c === void 0 ? false : _c;
    var classes = useStyles();
    var _d = react_1.useState(null), anchor = _d[0], setAnchor = _d[1];
    var single = options[0];
    var title = options.length === 1 ? single.label : 'Download';
    var handleClick = function (event) {
        if (options.length === 1) {
            single.onClick();
        }
        else {
            setAnchor(event.currentTarget);
        }
    };
    var choose = function (option) {
        setAnchor(null);
        option.onClick();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Tooltip_1.default, { title: title },
            react_1.default.createElement("span", null,
                react_1.default.createElement(IconButton_1.default, { "aria-label": title, className: classes.button, disabled: disabled || downloading || options.length === 0, onClick: handleClick }, downloading ? (react_1.default.createElement(CircularProgress_1.default, { size: 18 })) : (react_1.default.createElement(Icons_1.default, { iconName: "DownloadIcon", size: "small" }))))),
        react_1.default.createElement(Menu_1.default, { anchorEl: anchor, open: Boolean(anchor), onClose: function () { return setAnchor(null); }, getContentAnchorEl: null, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, transformOrigin: { vertical: 'top', horizontal: 'right' } }, options.map(function (option) { return (react_1.default.createElement(MenuItem_1.default, { key: option.label, className: classes.option, onClick: function () { return choose(option); } }, option.label)); }))));
};
exports.DashboardDownloadButton = DashboardDownloadButton;
exports.default = exports.DashboardDownloadButton;
//# sourceMappingURL=DashboardDownloadButton.js.map