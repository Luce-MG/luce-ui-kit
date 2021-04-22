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
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var BaseColor_1 = __importDefault(require("../../components/base/BaseColor"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            background: BaseColor_1.default.baseColor.modalOverlay
        },
        paper: {
            width: 365,
            padding: theme.spacing(5),
            position: 'relative'
        },
        title: {
            padding: 0,
            marginBottom: theme.spacing(2)
        },
        content: {
            padding: 0,
            marginBottom: theme.spacing(9)
        },
        action: {
            justifyContent: 'center',
            gridGap: theme.spacing(1),
            padding: 0
        },
        closeIcon: {
            position: 'absolute',
            top: 0,
            right: 0
        },
        titleText: __assign({}, theme.typography.h4)
    });
});
var Dialog = function (props) {
    var children = props.children, title = props.title, content = props.content, action = props.action, open = props.open, _a = props.onCancel, onCancel = _a === void 0 ? function () { } : _a, rest = __rest(props, ["children", "title", "content", "action", "open", "onCancel"]);
    var classes = useStyles();
    return (React.createElement(core_1.Box, null,
        children,
        React.createElement(Dialog_1.default, __assign({}, rest, { open: open ? open : false, classes: { root: classes.root, paper: classes.paper }, onClose: function () { return onCancel(); } }),
            React.createElement(DialogTitle_1.default, { classes: { root: classes.title } },
                React.createElement(IconButton_1.default, { onClick: function () { return onCancel(); }, className: classes.closeIcon },
                    React.createElement(Icons_1.default, { iconName: "CloseIcon", size: "small" })),
                React.createElement(core_1.Box, { className: classes.titleText }, title ? title : 'No Title')),
            React.createElement(DialogContent_1.default, { classes: { root: classes.content } }, content ? content : 'No Content'),
            React.createElement(DialogActions_1.default, { classes: { root: classes.action } }, action ? action : 'No Actions'))));
};
exports.default = Dialog;
//# sourceMappingURL=Dialog.js.map