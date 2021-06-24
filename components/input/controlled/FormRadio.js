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
var RadioGroup_1 = __importDefault(require("@material-ui/core/RadioGroup"));
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var Typography_1 = __importDefault(require("../../base/Typography"));
var FormRadio = function (props) {
    var control = react_hook_form_1.useFormContext().control;
    var name = props.name, label = props.label, children = props.children, defaultValue = props.defaultValue, rest = __rest(props, ["name", "label", "children", "defaultValue"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium" }, label),
        react_1.default.createElement(react_hook_form_1.Controller, { control: control, name: name, defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : '', render: function (_a) {
                var onBlur = _a.onBlur, onChange = _a.onChange, value = _a.value;
                return (react_1.default.createElement(RadioGroup_1.default, __assign({ onChange: onChange, "data-testid": name, value: value, onBlur: onBlur }, rest), children));
            } })));
};
exports.default = FormRadio;
//# sourceMappingURL=FormRadio.js.map