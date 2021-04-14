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
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var BaseColor_1 = __importDefault(require("../../components/base/BaseColor"));
var Button_1 = __importDefault(require("../button/Button"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            background: BaseColor_1.default.baseColor.modalOverlay
        },
        paper: {
            width: 308,
            padding: theme.spacing(5),
            position: 'relative'
        },
        title: {
            padding: 0,
            marginBottom: theme.spacing(3)
        },
        content: {
            padding: 0,
            marginBottom: theme.spacing(9)
        },
        action: {
            justifyContent: 'center',
            padding: 0
        },
        actionBtn: {
            width: '100%'
        },
        closeBtn: {
            position: 'absolute',
            top: 0,
            right: 0
        }
    });
});
var DialogInfo = function (props) {
    var classes = useStyles();
    var children = props.children, onConfirm = props.onConfirm, onCancel = props.onCancel, title = props.title, content = props.content, btnLabel = props.btnLabel, btnVariant = props.btnVariant, rest = __rest(props, ["children", "onConfirm", "onCancel", "title", "content", "btnLabel", "btnVariant"]);
    return (React.createElement("div", null,
        children,
        React.createElement(Dialog_1.default, __assign({ classes: { root: classes.root, paper: classes.paper }, onClose: function () { return onCancel(); } }, rest),
            React.createElement(DialogTitle_1.default, { classes: { root: classes.title } },
                React.createElement(IconButton_1.default, { onClick: function () { return onCancel(); }, className: classes.closeBtn },
                    React.createElement(Icons_1.default, { iconName: "CloseIcon", size: "small" })),
                title ? title : 'No Title'),
            React.createElement(DialogContent_1.default, { classes: { root: classes.content } },
                React.createElement(DialogContentText_1.default, { variant: "body2" }, content ? content : 'No Description Content')),
            React.createElement(DialogActions_1.default, { classes: { root: classes.action } },
                React.createElement(Button_1.default, { onClick: function () { return onConfirm(); }, variants: btnVariant ? btnVariant.variants : 'primary', customSize: "medium", children: btnLabel ? btnLabel : 'Ok', size: "medium", className: classes.actionBtn })))));
};
exports.default = DialogInfo;
//# sourceMappingURL=DialogInfo.js.map