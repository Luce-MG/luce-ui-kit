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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("../button/Button"));
var Dialog_1 = __importDefault(require("./Dialog"));
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
        },
        actionBtn: {
            width: '50%'
        }
    });
});
var DialogDurationChange = function (props) {
    var classes = useStyles();
    var billing = props.billing, payroll = props.payroll, children = props.children, open = props.open, _a = props.onConfirm, onConfirm = _a === void 0 ? function () { } : _a, _b = props.onCancel, onCancel = _b === void 0 ? function () { } : _b, content = props.content, title = props.title;
    return (React.createElement(Dialog_1.default, { open: open, title: title, onCancel: function () { return onCancel(); }, children: children, content: React.createElement(core_1.Box, null,
            React.createElement(core_1.DialogContentText, { variant: "body2" }, content),
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
                        React.createElement(Typography_1.default, { variant: "subtitle1", children: "$" + (payroll ? payroll : 0) }))))), action: React.createElement(React.Fragment, null,
            React.createElement(Button_1.default, { onClick: function () { return onCancel(); }, variants: "ghost", customSize: "medium", children: "Cancel", className: classes.actionBtn }),
            React.createElement(Button_1.default, { onClick: function () { return onConfirm(); }, variants: "cta", customSize: "medium", children: "Confirm", size: "medium", className: classes.actionBtn })) }));
};
exports.default = DialogDurationChange;
//# sourceMappingURL=DialogDurationChange.js.map