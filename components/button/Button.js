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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var smTypography = {
    fontSize: 13,
    lineHeight: '20px',
    letterSpacing: '-0.01em',
    fontWeight: 700
};
var mdTypography = {
    fontSize: 15,
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    fontWeight: 500
};
var AllSizes = {
    XS: __assign({ paddingTop: 6, paddingBottom: 6, paddingRight: 8, paddingLeft: 8 }, smTypography),
    Small: __assign({ paddingTop: 10, paddingBottom: 10, paddingRight: 8, paddingLeft: 8 }, smTypography),
    Medium: __assign({ paddingTop: 10, paddingBottom: 10, paddingRight: 12, paddingLeft: 12 }, mdTypography),
    Large: __assign({ paddingTop: 14, paddingBottom: 14, paddingRight: 16, paddingLeft: 16 }, mdTypography)
};
var getSize = function (size) {
    switch (size) {
        case 'xs':
            return AllSizes.XS;
        case 'small':
            return AllSizes.Small;
        case 'medium':
            return AllSizes.Medium;
        case 'large':
            return AllSizes.Large;
        default:
            return AllSizes.Medium;
    }
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        Primary: function (props) { return (__assign({ background: theme.palette.primary.main, color: theme.palette.common.white, '&:hover': {
                background: '#12354a'
            } }, getSize(props.customSize))); },
        CallToAction: function (props) { return (__assign({ background: '#32C27D', color: theme.palette.common.white, '&:hover': {
                background: '#238757'
            } }, getSize(props.customSize))); },
        Ghost: function (props) { return (__assign({ background: '#EDF1F4', color: theme.palette.primary.main, '&:hover': {
                background: '#a5a8aa'
            } }, getSize(props.customSize))); },
        Basic: {
            background: 'transparent',
            color: theme.palette.primary.main
        },
        Text: {
            fontWeight: 500
        }
    });
});
var Button = function (props) {
    var classes = useStyles(props);
    var variants = props.variants, customSize = props.customSize, children = props.children, rest = __rest(props, ["variants", "customSize", "children"]);
    var getClasses = function () {
        switch (variants) {
            case 'primary':
                return { root: classes.Primary };
            case 'cta':
                return { root: classes.CallToAction };
            case 'ghost':
                return { root: classes.Ghost };
            case 'basic':
                return { root: classes.Basic, text: classes.Text };
            default:
                return { root: classes.Primary };
        }
    };
    return (React.createElement(Button_1.default, __assign({ classes: getClasses() }, rest), children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map