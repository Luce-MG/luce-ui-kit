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
exports.DateFnsUtils = exports.PickersUtilsProvider = exports.KeyboardTimePicker = exports.KeyboardDatePicker = exports.TimePicker = void 0;
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
exports.DateFnsUtils = date_fns_1.default;
var styles_1 = require("@material-ui/core/styles");
var pickers_1 = require("@material-ui/pickers");
Object.defineProperty(exports, "PickersUtilsProvider", { enumerable: true, get: function () { return pickers_1.MuiPickersUtilsProvider; } });
var React = __importStar(require("react"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            borderRadius: 3,
            padding: 0,
            '& > .MuiInputAdornment-positionEnd': {
                padding: theme.spacing(2.5),
                margin: 0
            },
            '& button': {
                padding: theme.spacing(1),
                position: 'absolute',
                right: theme.spacing(1)
            },
            '& svg': {
                width: theme.spacing(2.5),
                height: theme.spacing(2.5)
            }
        },
        input: __assign({ padding: theme.spacing(1, 1.5) }, theme.typography.body2),
        muiInputInput: {
            padding: 0
        },
        muiInputFocus: {
            border: 'inherits'
        },
        muiInputLabelRoot: __assign(__assign({}, theme.typography.overline), { marginBottom: theme.spacing(0.5), '&.shrink': {
                transform: 'inherit'
            } }),
        MuiFormHelperTextRoot: __assign(__assign({}, theme.typography.caption), { marginTop: theme.spacing(0.5) }),
        muiInputLabelFormControl: {
            position: 'static'
        },
        iconButton: {
            '& > div > div > button': {
                padding: theme.spacing(0.5),
                marginRight: theme.spacing(-0.5)
            }
        }
    });
});
var inputProps = function (classes) { return ({
    classes: {
        root: classes.root,
        input: classes.input
    },
    notched: false
}); };
var inputLabelProps = function (classes) { return ({
    classes: {
        root: classes.muiInputLabelRoot,
        formControl: classes.muiInputLabelFormControl,
        shrink: 'shrink'
    },
    shrink: true
}); };
var formHelperTextProps = function (classes, FormHelperTextProps) {
    var formHelperTextPropsClasses = FormHelperTextProps.classes;
    return __assign(__assign({}, FormHelperTextProps), { classes: __assign({ root: classes.MuiFormHelperTextRoot }, formHelperTextPropsClasses) });
};
var TimePicker = function (props) {
    var classes = useStyles();
    var _a = props.FormHelperTextProps, FormHelperTextProps = _a === void 0 ? {} : _a, children = props.children, rest = __rest(props, ["FormHelperTextProps", "children"]);
    return (React.createElement(pickers_1.TimePicker, __assign({ InputProps: inputProps(classes), InputLabelProps: inputLabelProps(classes), FormHelperTextProps: formHelperTextProps(classes, FormHelperTextProps), inputVariant: "outlined" }, rest), children));
};
exports.TimePicker = TimePicker;
var KeyboardDatePicker = function (props) {
    var _a = props.FormHelperTextProps, FormHelperTextProps = _a === void 0 ? {} : _a, children = props.children, rest = __rest(props, ["FormHelperTextProps", "children"]);
    var classes = useStyles();
    return (React.createElement(pickers_1.KeyboardDatePicker, __assign({ InputProps: inputProps(classes), InputLabelProps: inputLabelProps(classes), FormHelperTextProps: formHelperTextProps(classes, FormHelperTextProps), className: classes.iconButton, inputVariant: "outlined" }, rest), children));
};
exports.KeyboardDatePicker = KeyboardDatePicker;
var KeyboardTimePicker = function (props) {
    var _a = props.FormHelperTextProps, FormHelperTextProps = _a === void 0 ? {} : _a, children = props.children, rest = __rest(props, ["FormHelperTextProps", "children"]);
    var classes = useStyles();
    return (React.createElement(pickers_1.KeyboardTimePicker, __assign({ InputProps: inputProps(classes), InputLabelProps: inputLabelProps(classes), FormHelperTextProps: formHelperTextProps(classes, FormHelperTextProps), className: classes.iconButton, inputVariant: "outlined" }, rest), children));
};
exports.KeyboardTimePicker = KeyboardTimePicker;
exports.default = TimePicker;
//# sourceMappingURL=Pickers.js.map