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
// import InputAdornment from '@material-ui/core/InputAdornment'
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            padding: theme.spacing(1, 1.5),
            border: "1px solid " + theme.palette.grey[600],
            borderRadius: 3
        },
        svg: {
            '& > svg': {
                marginLeft: theme.spacing(-3),
                pointerEvents: 'none'
            }
        }
    });
});
var Select = function (props) {
    var classes = useStyles(props);
    var icon = props.icon, rest = __rest(props, ["icon"]);
    var iconComponent = React.createElement(Icons_1.default, { iconName: icon ? icon : 'ArrowBottomIcon' });
    return (React.createElement(Select_1.default, __assign({ disableUnderline: true, classes: { root: classes.root }, className: classes.svg, IconComponent: function () { return iconComponent; } }, rest)));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map