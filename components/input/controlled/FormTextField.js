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
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var ThemeProvider_1 = require("../../../themes/ThemeProvider");
var Input_1 = __importDefault(require("../Input"));
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
var FormTextField = function (props) {
    var classes = useStyles(props);
    var _a = react_hook_form_1.useFormContext(), control = _a.control, errors = _a.errors;
    var name = props.name, label = props.label, defaultValue = props.defaultValue, rest = __rest(props, ["name", "label", "defaultValue"]);
    var formHelperTextProps = {
        classes: {
            contained: classes.MuiFormHelperTextContained
        }
    };
    return (react_1.default.createElement(react_hook_form_1.Controller, { control: control, name: name, defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : '', render: function (_a) {
            var _b;
            var onChange = _a.onChange, value = _a.value;
            return (react_1.default.createElement(Input_1.default, __assign({ fullWidth: true, value: value, onChange: onChange, label: label ? label : undefined, placeholder: label ? "Enter " + label : undefined, helperText: (_b = errors["" + name]) === null || _b === void 0 ? void 0 : _b.message, error: !!errors["" + name], FormHelperTextProps: formHelperTextProps, inputProps: { 'data-testid': { name: name } }, className: classes.root }, rest)));
        } }));
};
exports.default = FormTextField;
//# sourceMappingURL=FormTextField.js.map