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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var ThemeProvider_1 = require("../../../themes/ThemeProvider");
var Pickers_1 = require("../../atom/Pickers");
var useStyles = ThemeProvider_1.makeStyles(function (theme) {
    return ThemeProvider_1.createStyles({
        root: {
            marginBottom: theme.spacing(2.5)
        },
        MuiFormHelperTextContained: {
            marginLeft: 0,
            position: 'absolute',
            bottom: theme.spacing(-2.5)
        }
    });
});
var FormTimePicker = function (props) {
    var classes = useStyles(props);
    var _a = react_hook_form_1.useFormContext(), control = _a.control, errors = _a.errors;
    var name = props.name, label = props.label, rest = __rest(props, ["name", "label"]);
    var formHelperTextProps = {
        classes: {
            contained: classes.MuiFormHelperTextContained
        }
    };
    return (React.createElement(react_hook_form_1.Controller, { control: control, name: name, defaultValue: null, render: function (_a) {
            var _b;
            var onChange = _a.onChange, value = _a.value;
            return (React.createElement(Pickers_1.KeyboardTimePicker, __assign({ autoOk: true, value: value, label: label, minutesStep: 5 }, rest, { onChange: onChange, fullWidth: true, variant: "inline", InputAdornmentProps: { position: 'end' }, helperText: (_b = errors["" + name]) === null || _b === void 0 ? void 0 : _b.message, error: !!errors["" + name], FormHelperTextProps: formHelperTextProps, className: classes.root })));
        } }));
};
exports.default = FormTimePicker;
//# sourceMappingURL=FormTimePicker.js.map