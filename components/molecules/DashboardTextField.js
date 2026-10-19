"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardTextField = void 0;
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var DashboardFilterField_1 = __importStar(require("./DashboardFilterField"));
var useStyles = ThemeProvider_1.makeStyles({
    input: {
        width: 200
    }
});
// A free text filter, for a filter without options.
var DashboardTextField = function (_a) {
    var label = _a.label, values = _a.values, _b = _a.multiple, multiple = _b === void 0 ? false : _b, _c = _a.range, range = _c === void 0 ? false : _c, _d = _a.numeric, numeric = _d === void 0 ? false : _d, onChange = _a.onChange;
    var classes = useStyles();
    var controlClasses = DashboardFilterField_1.useDashboardControlStyles();
    var className = clsx_1.default(controlClasses.control, classes.input);
    var inputType = numeric ? 'number' : 'text';
    if (range) {
        var _e = values[0], from_1 = _e === void 0 ? '' : _e, _f = values[1], to_1 = _f === void 0 ? '' : _f;
        return (react_1.default.createElement(DashboardFilterField_1.default, { label: label },
            react_1.default.createElement(TextField_1.default, { className: className, variant: "outlined", size: "small", type: inputType, placeholder: "From", value: from_1, onChange: function (event) { return onChange([event.target.value, to_1]); } }),
            react_1.default.createElement(TextField_1.default, { className: className, variant: "outlined", size: "small", type: inputType, placeholder: "To", value: to_1, onChange: function (event) { return onChange([from_1, event.target.value]); } })));
    }
    return (react_1.default.createElement(DashboardFilterField_1.default, { label: label },
        react_1.default.createElement(TextField_1.default, { className: className, variant: "outlined", size: "small", type: multiple ? 'text' : inputType, placeholder: multiple ? 'Comma separated' : '', value: values.join(','), onChange: function (event) {
                return onChange(multiple ? event.target.value.split(',') : [event.target.value]);
            } })));
};
exports.DashboardTextField = DashboardTextField;
exports.default = exports.DashboardTextField;
//# sourceMappingURL=DashboardTextField.js.map