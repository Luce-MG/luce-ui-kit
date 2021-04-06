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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var bodyLargeStyle = {
    fontSize: 18,
    lineHeight: 1.44,
    fontStyle: 'normal'
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        bodyLarge: __assign({}, bodyLargeStyle),
        bodyLgMedium: __assign(__assign({}, bodyLargeStyle), { fontWeight: 500 }),
        bodyLgBold: __assign(__assign({}, bodyLargeStyle), { fontWeight: 700 }),
        bodyMdBold: __assign(__assign({}, theme.typography.body1), { fontWeight: 700 }),
        bodySmBold: __assign(__assign({}, theme.typography.body2), { fontWeight: 700 }),
        bodyXsMedium: __assign(__assign({}, theme.typography.overline), { fontWeight: 500 }),
        bodyXsBold: __assign(__assign({}, theme.typography.overline), { fontWeight: 700 }),
        bodyXxsMedium: __assign(__assign({}, theme.typography.caption), { fontWeight: 500 }),
    });
});
var Typography = function (props) {
    var classes = useStyles();
    var bodyVariants = props.bodyVariants, children = props.children, rest = __rest(props, ["bodyVariants", "children"]);
    var getClasses = function () {
        if (bodyVariants === 'lg') {
            return { root: classes.bodyLarge };
        }
        else if (bodyVariants === 'lgMedium') {
            return { root: classes.bodyLgMedium };
        }
        else if (bodyVariants === 'lgBold') {
            return { root: classes.bodyLgBold };
        }
        else if (bodyVariants === 'mdBold') {
            return { root: classes.bodyMdBold };
        }
        else if (bodyVariants === 'smBold') {
            return { root: classes.bodySmBold };
        }
        else if (bodyVariants === 'xsMedium') {
            return { root: classes.bodyXsMedium };
        }
        else if (bodyVariants === 'xsBold') {
            return { root: classes.bodyXsBold };
        }
        else if (bodyVariants === 'xxsMedium') {
            return { root: classes.bodyXxsMedium };
        }
    };
    return (React.createElement(Typography_1.default, __assign({ classes: getClasses() }, rest),
        " ",
        children,
        " "));
};
exports.default = Typography;
//# sourceMappingURL=Typography.js.map