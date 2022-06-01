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
var Button_1 = __importDefault(require("../button/Button"));
var Dialog_1 = __importDefault(require("./Dialog"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        actionBtn: {
            width: '50%'
        },
        dialogSize: {
            '& .MuiDialog-paperWidthXs': {
                maxWidth: 396
            }
        }
    });
});
var DialogConfirmation = function (props) {
    var contentText = props.contentText, cancelLabel = props.cancelLabel, confirmLabel = props.confirmLabel, isBtnCancelDisabled = props.isBtnCancelDisabled, isBtnConfirmDisabled = props.isBtnConfirmDisabled, maxWidth = props.maxWidth, dialogStyle = props.dialogStyle, _a = props.onCancel, onCancel = _a === void 0 ? function () { } : _a, _b = props.onConfirm, onConfirm = _b === void 0 ? function () { } : _b, rest = __rest(props, ["contentText", "cancelLabel", "confirmLabel", "isBtnCancelDisabled", "isBtnConfirmDisabled", "maxWidth", "dialogStyle", "onCancel", "onConfirm"]);
    var classes = useStyles();
    return (React.createElement(Dialog_1.default, __assign({ className: dialogStyle ? dialogStyle : classes.dialogSize, maxWidth: maxWidth ? maxWidth : 'xs', content: React.createElement(core_1.DialogContentText, { variant: "body1" }, contentText ? contentText : 'Are you sure?'), action: React.createElement(React.Fragment, null,
            React.createElement(Button_1.default, { onClick: function () { return onCancel(); }, variants: "ghost", disabled: isBtnCancelDisabled, children: cancelLabel ? cancelLabel : 'No', className: classes.actionBtn }),
            React.createElement(Button_1.default, { onClick: function () { return onConfirm(); }, variants: "primary", disabled: isBtnConfirmDisabled, children: confirmLabel ? confirmLabel : 'Yes', className: classes.actionBtn })) }, rest)));
};
exports.default = DialogConfirmation;
//# sourceMappingURL=DialogConfirmation.js.map