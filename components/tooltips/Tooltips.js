"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        colorTooltips: {
            background: theme.palette.common.black,
            padding: '14px 16px 10px 16px',
            fontSize: '14px',
            lineHeight: '24px'
        },
        arrow: {
            fontSize: 16,
            textAlign: 'center',
            '&::before': {
                backgroundColor: theme.palette.common.black
            }
        }
    });
});
var Tooltip = function (props) {
    var classes = useStyles();
    var children = props.children, rest = __rest(props, ["children"]);
    return (React.createElement(Tooltip_1.default, __assign({}, rest, { classes: { tooltip: classes.colorTooltips, arrow: classes.arrow }, arrow: true }), children));
};
exports.default = Tooltip;
//# sourceMappingURL=Tooltips.js.map