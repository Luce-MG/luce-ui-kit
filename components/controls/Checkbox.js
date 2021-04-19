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
var core_1 = require("@material-ui/core");
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var check_svg_1 = __importDefault(require("../../stories/assets/check.svg"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            '&:hover': {
                backgroundColor: 'transparent'
            },
            '&.Mui-disabled': {
                background: theme.palette.grey[500],
                borderRadius: 2,
                width: 18,
                height: 18,
                margin: 9
            }
        },
        icon: {
            borderRadius: 2,
            width: 18,
            height: 18,
            boxShadow: "inset 0 0 0 1px " + theme.palette.grey[600] + ", inset 0 -1px 0 " + theme.palette.grey[600],
            backgroundColor: theme.palette.common.white
        },
        checkedIcon: {
            borderRadius: 2,
            backgroundColor: theme.palette.primary.main,
            '&:before': {
                display: 'block',
                width: 18,
                height: 18,
                backgroundImage: "url(" + check_svg_1.default + ")",
                content: '""',
                backgroundPosition: '50% 20%'
            }
        },
        boxDisabled: {},
        label: __assign(__assign({}, theme.typography.body2), { color: theme.palette.grey[900] })
    });
});
var Checkbox = function (props) {
    var classes = useStyles();
    var label = props.label, rest = __rest(props, ["label"]);
    return (React.createElement("div", null,
        React.createElement(core_1.FormControlLabel, { classes: { label: classes.label }, control: React.createElement(Checkbox_1.default, __assign({ classes: { root: classes.root }, checkedIcon: rest.disabled ? (React.createElement("span", null)) : (React.createElement("span", { className: classes.checkedIcon })), icon: React.createElement("span", { className: classes.icon }) }, rest)), label: label })));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map