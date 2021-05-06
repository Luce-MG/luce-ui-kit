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
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var IconButton_1 = __importDefault(require("../button/IconButton"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        icon: {
            transform: 'rotate(180deg)',
            color: theme.palette.common.black
        }
    });
});
var HistoryBack = function (props) {
    var classes = useStyles();
    var _a = props.goBack, goBack = _a === void 0 ? function () { } : _a, label = props.label, iconSize = props.iconSize, size = props.size, variant = props.variant, space = props.space, rest = __rest(props, ["goBack", "label", "iconSize", "size", "variant", "space"]);
    return (React.createElement(Box_1.default, __assign({ display: "flex", alignItems: "center" }, rest),
        React.createElement(Box_1.default, { marginRight: space ? space : 2 },
            React.createElement(IconButton_1.default, { onClick: function () { return goBack(); }, className: classes.icon, iconSize: iconSize ? iconSize : 'large', size: size ? size : 'small', iconName: "ArrowRightLongIcon" })),
        React.createElement(Typography_1.default, { children: label ? label : 'Label', variant: variant ? variant : 'h4' })));
};
exports.default = HistoryBack;
//# sourceMappingURL=HistoryBack.js.map