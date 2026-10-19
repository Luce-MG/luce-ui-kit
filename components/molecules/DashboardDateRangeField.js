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
exports.DashboardDateRangeField = void 0;
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
var pickers_1 = require("@material-ui/pickers");
var clsx_1 = __importDefault(require("clsx"));
var date_fns_2 = require("date-fns");
var react_1 = __importDefault(require("react"));
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var DashboardFilterField_1 = __importStar(require("./DashboardFilterField"));
var ISO_DATE = 'yyyy-MM-dd';
var useStyles = ThemeProvider_1.makeStyles({
    picker: {
        width: 160
    }
});
var toDate = function (value) {
    if (!value)
        return null;
    var date = date_fns_2.parseISO(value);
    return Number.isNaN(date.getTime()) ? null : date;
};
// Two date pickers for a date range filter. It brings its own utils provider,
// so it works whichever provider the page has.
var DashboardDateRangeField = function (_a) {
    var _b, _c;
    var label = _a.label, values = _a.values, onChange = _a.onChange;
    var classes = useStyles();
    var controlClasses = DashboardFilterField_1.useDashboardControlStyles();
    var _d = values[0], from = _d === void 0 ? '' : _d, _e = values[1], to = _e === void 0 ? '' : _e;
    // A half typed date is invalid; it is ignored rather than stored, so the
    // picker keeps the text being typed.
    var setEnd = function (index, date) {
        if (date && Number.isNaN(date.getTime()))
            return;
        var next = [from, to];
        next[index] = date ? date_fns_2.format(date, ISO_DATE) : '';
        onChange(next);
    };
    return (react_1.default.createElement(pickers_1.MuiPickersUtilsProvider, { utils: date_fns_1.default },
        react_1.default.createElement(DashboardFilterField_1.default, { label: label },
            react_1.default.createElement(pickers_1.KeyboardDatePicker, { className: clsx_1.default(controlClasses.control, classes.picker), inputVariant: "outlined", size: "small", format: ISO_DATE, placeholder: "From", value: toDate(from), onChange: function (date) { return setEnd(0, date); }, maxDate: (_b = toDate(to)) !== null && _b !== void 0 ? _b : undefined, views: ['date'] }),
            react_1.default.createElement(pickers_1.KeyboardDatePicker, { className: clsx_1.default(controlClasses.control, classes.picker), inputVariant: "outlined", size: "small", format: ISO_DATE, placeholder: "To", value: toDate(to), onChange: function (date) { return setEnd(1, date); }, minDate: (_c = toDate(from)) !== null && _c !== void 0 ? _c : undefined, views: ['date'] }))));
};
exports.DashboardDateRangeField = DashboardDateRangeField;
exports.default = exports.DashboardDateRangeField;
//# sourceMappingURL=DashboardDateRangeField.js.map