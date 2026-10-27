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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardSelectField = void 0;
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var Autocomplete_1 = __importDefault(require("@material-ui/lab/Autocomplete"));
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var DashboardFilterField_1 = __importStar(require("./DashboardFilterField"));
// Tooljet's wording when every option is ticked, which filters nothing.
var ALL_SELECTED = 'All items are selected.';
var NONE_SELECTED = 'No items selected';
// The "Select all" row at the top of a multiple choice list.
var SELECT_ALL = {
    value: '__select_all__',
    label: 'Select all'
};
var useStyles = ThemeProvider_1.makeStyles({
    // Wide enough for "All items are selected." or a long name before the
    // ellipsis; the search input next to the summary keeps only a sliver, so
    // the summary gets the width.
    select: {
        width: 300,
        '& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
            flexGrow: 0,
            width: 24,
            minWidth: 24
        }
    },
    summary: {
        flex: '1 1 auto',
        minWidth: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.heading
    },
    option: {
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.text
    },
    checkbox: {
        padding: 4,
        marginRight: 8
    }
});
// A searchable dropdown for a filter with options. A multiple choice filter
// is a checkbox list: any subset can be ticked, Select all ticks or unticks
// everything, and the box sums up the choice.
var DashboardSelectField = function (_a) {
    var label = _a.label, options = _a.options, values = _a.values, multiple = _a.multiple, onChange = _a.onChange;
    var classes = useStyles();
    var controlClasses = DashboardFilterField_1.useDashboardControlStyles();
    var className = clsx_1.default(controlClasses.control, classes.select);
    // Same rule as the table, so a dropdown reads like the column it filters.
    var enumLabels = dashboard_1.isDashboardEnumColumn(options.map(function (option) { return ({ label: option.label }); }), 'label');
    var optionLabel = function (option) {
        return option === SELECT_ALL || !enumLabels
            ? option.label
            : dashboard_1.formatDashboardEnum(option.label);
    };
    var sameOption = function (option, value) { return option.value === value.value; };
    if (!multiple) {
        var selected = options.find(function (option) { return values.includes(option.value); });
        return (react_1.default.createElement(DashboardFilterField_1.default, { label: label },
            react_1.default.createElement(Autocomplete_1.default, { className: className, options: options, value: selected !== null && selected !== void 0 ? selected : null, getOptionLabel: optionLabel, getOptionSelected: sameOption, onChange: function (_event, chosen) {
                    return onChange(chosen ? [chosen.value] : []);
                }, renderInput: function (params) { return (react_1.default.createElement(TextField_1.default, __assign({}, params, { variant: "outlined", size: "small" }))); } })));
    }
    var ticked = options.filter(function (option) { return values.includes(option.value); });
    var allTicked = options.length > 0 && ticked.length === options.length;
    var summary = (function () {
        if (allTicked)
            return ALL_SELECTED;
        if (ticked.length === 0)
            return NONE_SELECTED;
        if (ticked.length === 1)
            return optionLabel(ticked[0]);
        return ticked.length + " selected";
    })();
    var handleChange = function (chosen, reason) {
        if (reason === 'clear') {
            onChange([]);
            return;
        }
        // Select all is never part of the value, so it is only in `chosen` when
        // it was just clicked: it ticks everything, or unticks everything when
        // all is already ticked.
        if (chosen.includes(SELECT_ALL)) {
            onChange(allTicked ? [] : options.map(function (option) { return option.value; }));
            return;
        }
        onChange(chosen.map(function (option) { return option.value; }));
    };
    return (react_1.default.createElement(DashboardFilterField_1.default, { label: label },
        react_1.default.createElement(Autocomplete_1.default, { multiple: true, disableCloseOnSelect: true, className: className, options: __spreadArrays([SELECT_ALL], options), value: ticked, getOptionLabel: optionLabel, getOptionSelected: sameOption, onChange: function (_event, chosen, reason) {
                return handleChange(chosen, reason);
            }, renderTags: function () { return (react_1.default.createElement("span", { className: classes.summary }, summary)); }, renderOption: function (option, _a) {
                var selected = _a.selected;
                return (react_1.default.createElement("span", { className: classes.option },
                    react_1.default.createElement(Checkbox_1.default, { size: "small", color: "primary", className: classes.checkbox, checked: option === SELECT_ALL ? allTicked : selected }),
                    optionLabel(option)));
            }, renderInput: function (params) { return (react_1.default.createElement(TextField_1.default, __assign({}, params, { variant: "outlined", size: "small", 
                // With nothing ticked there is no summary tag to show.
                placeholder: ticked.length ? '' : NONE_SELECTED, 
                // Backspace in an empty search box would remove the last ticked
                // option, as it removes the last chip of a plain Autocomplete.
                // The box shows a summary, not chips, so the key stops here.
                onKeyDown: function (event) {
                    var input = event.target;
                    if (event.key === 'Backspace' && input.value === '') {
                        event.stopPropagation();
                    }
                } }))); } })));
};
exports.DashboardSelectField = DashboardSelectField;
exports.default = exports.DashboardSelectField;
//# sourceMappingURL=DashboardSelectField.js.map