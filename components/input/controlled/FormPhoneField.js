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
var material_ui_phone_number_1 = __importDefault(require("material-ui-phone-number"));
var React = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var ThemeProvider_1 = require("../../../themes/ThemeProvider");
var Input_1 = require("../Input");
var useStyles = ThemeProvider_1.makeStyles(function (theme) {
    return ThemeProvider_1.createStyles({
        muiInputRoot: {
            marginBottom: theme.spacing(2.5)
        }
    });
});
var FormPhoneField = function (props) {
    var classes = Input_1.useStyles(props);
    var phoneFieldClasses = useStyles(props);
    var style = props.style, name = props.name, label = props.label, defaultCountry = props.defaultCountry, onlyCountries = props.onlyCountries, defaultValue = props.defaultValue, readOnly = props.readOnly, customSize = props.customSize, InputProps = props.InputProps, _a = props.FormHelperTextProps, FormHelperTextProps = _a === void 0 ? {} : _a, rest = __rest(props, ["style", "name", "label", "defaultCountry", "onlyCountries", "defaultValue", "readOnly", "customSize", "InputProps", "FormHelperTextProps"]);
    var _b = react_hook_form_1.useFormContext(), errors = _b.errors, control = _b.control;
    var getSizeInputRoot = function (size) {
        switch (size) {
            case 'small':
                return classes.muiInputRootSmall;
            case 'medium':
                return classes.muiInputRootMedium;
            case 'large':
                return classes.muiInputRootLarge;
            default:
                return classes.muiInputRootMedium;
        }
    };
    var inputProps = __assign(__assign({ readOnly: readOnly }, InputProps), { classes: {
            root: classes.muiInputRoot + " " + phoneFieldClasses.muiInputRoot,
            input: getSizeInputRoot(customSize),
            focused: classes.muiInputFocus,
            multiline: classes.muiInputmultiline
        }, notched: false });
    var inputLabelProps = {
        classes: {
            root: classes.muiInputLabelRoot,
            formControl: classes.muiInputLabelFormControl,
            shrink: 'shrink'
        },
        shrink: true
    };
    var formHelperTextPropsClasses = FormHelperTextProps.classes;
    var formHelperTextProps = __assign(__assign({}, FormHelperTextProps), { classes: __assign({ root: classes.MuiFormHelperTextRoot, contained: classes.MuiFormHelperTextContained }, formHelperTextPropsClasses) });
    return (React.createElement(react_hook_form_1.Controller, { name: name, control: control, defaultValue: defaultValue, render: function (_a) {
            var _b;
            var name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, value = _a.value;
            return (React.createElement(material_ui_phone_number_1.default, __assign({ InputProps: inputProps, autoFormat: false, value: value, onBlur: onBlur, onChange: onChange, defaultCountry: defaultCountry, onlyCountries: onlyCountries, style: style, label: label, variant: "outlined", helperText: (_b = errors["" + name]) === null || _b === void 0 ? void 0 : _b.message, error: !!errors["" + name], FormHelperTextProps: formHelperTextProps, inputProps: { 'data-testid': name }, InputLabelProps: inputLabelProps }, rest)));
        } }));
};
exports.default = FormPhoneField;
FormPhoneField.defaultProps = {
    label: 'Enter phone number',
    defaultCountry: 'sg',
    onlyCountries: ['sg'],
    style: { width: '100%' },
    autoFormat: true,
    readOnly: false
};
//# sourceMappingURL=FormPhoneField.js.map