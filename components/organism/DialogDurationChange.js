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
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var DialogConfirmation_1 = __importDefault(require("./DialogConfirmation"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        labelGrey: {
            color: theme.palette.grey[700]
        },
        priceDuration: {
            marginTop: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    });
});
var DialogDurationChange = function (props) {
    var classes = useStyles();
    var billing = props.billing, payroll = props.payroll, contentText = props.contentText, rest = __rest(props, ["billing", "payroll", "contentText"]);
    return (React.createElement(DialogConfirmation_1.default, __assign({ content: React.createElement(core_1.Box, null,
            React.createElement(core_1.DialogContentText, { variant: "body2" }, contentText),
            React.createElement(core_1.Box, null,
                React.createElement(core_1.Box, null,
                    React.createElement(Typography_1.default, { color: "primary", variant: "subtitle1", children: "Billing Adjustments" }),
                    React.createElement(core_1.Box, { className: classes.priceDuration },
                        React.createElement(Typography_1.default, { className: classes.labelGrey, variant: "body1", children: "Duration Change:" }),
                        React.createElement(Typography_1.default, { variant: "subtitle1", children: "$" + (billing ? billing : 0) }))),
                React.createElement(core_1.Box, { marginTop: 2 },
                    React.createElement(Typography_1.default, { color: "primary", variant: "subtitle1", children: "Payroll Adjustmens" }),
                    React.createElement(core_1.Box, { className: classes.priceDuration },
                        React.createElement(Typography_1.default, { className: classes.labelGrey, variant: "body1", children: "Duration Change:" }),
                        React.createElement(Typography_1.default, { variant: "subtitle1", children: "$" + (payroll ? payroll : 0) }))))) }, rest)));
};
exports.default = DialogDurationChange;
//# sourceMappingURL=DialogDurationChange.js.map