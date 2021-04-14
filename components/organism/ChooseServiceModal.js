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
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var BaseColor_1 = __importDefault(require("../../components/base/BaseColor"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("../button/Button"));
var ServiceTypeCard_1 = __importDefault(require("../molecules/ServiceTypeCard"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            background: BaseColor_1.default.baseColor.modalOverlay
        },
        paper: {
            padding: theme.spacing(5),
            position: 'relative',
            maxWidth: '100%'
        },
        title: {
            padding: 0,
            marginBottom: theme.spacing(3),
            textAlign: 'center'
        },
        content: {
            paddingTop: theme.spacing(1),
            marginBottom: theme.spacing(4),
            display: 'grid',
            gridGap: theme.spacing(2),
            gridAutoFlow: 'column'
        },
        action: {
            display: 'grid',
            gridGap: theme.spacing(2),
            gridAutoFlow: 'column',
            justifyContent: 'center',
            padding: 0
        },
        actionBtn: {
            width: 125
        }
    });
});
var ChooseServiceModal = function (props) {
    var children = props.children, _a = props.title, title = _a === void 0 ? 'Please choose the type of service' : _a, cancelLabel = props.cancelLabel, confirmLabel = props.confirmLabel, onCancel = props.onCancel, onConfirm = props.onConfirm, btnVariantConfirm = props.btnVariantConfirm, btnVariantCancel = props.btnVariantCancel, _b = props.data, data = _b === void 0 ? [{ iconName: 'HouseIcon', label: 'Home' }] : _b, rest = __rest(props, ["children", "title", "cancelLabel", "confirmLabel", "onCancel", "onConfirm", "btnVariantConfirm", "btnVariantCancel", "data"]);
    var classes = useStyles();
    var _c = React.useState(''), selectedCard = _c[0], setSelectedCard = _c[1];
    return (React.createElement("div", null,
        children,
        React.createElement(Dialog_1.default, __assign({ classes: { root: classes.root, paper: classes.paper }, onClose: function () { return onCancel(); }, scroll: "body" }, rest),
            React.createElement(DialogTitle_1.default, { disableTypography: true, classes: { root: classes.title } },
                React.createElement(Typography_1.default, { variant: "h4" }, title)),
            React.createElement(DialogContent_1.default, { classes: { root: classes.content } }, data.map(function (item, index) { return (React.createElement(ServiceTypeCard_1.default, { key: index, isSelected: selectedCard === item.label, onClick: function () { return setSelectedCard(item.label); }, iconName: item.iconName, label: item.label })); })),
            React.createElement(DialogActions_1.default, { classes: { root: classes.action } },
                React.createElement(Button_1.default, { onClick: function () { return onCancel(); }, variants: btnVariantCancel ? btnVariantCancel.variants : 'ghost', customSize: "medium", children: cancelLabel ? cancelLabel : 'No', className: classes.actionBtn }),
                React.createElement(Button_1.default, { onClick: function () { return onConfirm(); }, variant: "contained", variants: btnVariantConfirm ? btnVariantConfirm.variants : 'primary', disabled: !selectedCard, customSize: "medium", children: confirmLabel ? confirmLabel : 'Yes', size: "medium", className: classes.actionBtn })))));
};
exports.default = ChooseServiceModal;
//# sourceMappingURL=ChooseServiceModal.js.map