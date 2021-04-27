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
var React = __importStar(require("react"));
var Checkbox_1 = __importDefault(require("../controls/Checkbox"));
var DialogConfirmation_1 = __importDefault(require("./DialogConfirmation"));
var DialogAddNewDays = function (props) {
    var onChange = props.onChange, days = props.days, contentText = props.contentText, rest = __rest(props, ["onChange", "days", "contentText"]);
    return (React.createElement(DialogConfirmation_1.default, __assign({ content: React.createElement(core_1.Box, null,
            React.createElement(core_1.DialogContentText, { variant: "subtitle1" }, contentText ? contentText : 'Choose Day:'),
            React.createElement(core_1.Box, { marginLeft: 0.4 },
                React.createElement(core_1.FormControl, null, days
                    ? days.map(function (day, index) {
                        return (React.createElement(core_1.Box, { key: "day-" + index },
                            React.createElement(Checkbox_1.default, { label: day.label, name: day.name, value: day.name, disabled: day.disabled, onChange: function (event) { return onChange(event, index); } })));
                    })
                    : 'No Days'))) }, rest)));
};
exports.default = DialogAddNewDays;
//# sourceMappingURL=DialogAddNewDays.js.map