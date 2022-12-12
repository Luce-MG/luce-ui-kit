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
exports.SkillSetAutoComplete = void 0;
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var AutoComplete_1 = require("../base/AutoComplete");
var Color_1 = __importDefault(require("../base/Color"));
var Checkbox_1 = __importDefault(require("../controls/Checkbox"));
var Input_1 = __importDefault(require("../input/Input"));
var tags_1 = __importDefault(require("../tags"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            background: '#F8FAFB'
        },
        chip: {
            background: '#ECECEC',
            color: '#222222',
            borderRadius: '4px'
        },
        inputRoot: {
            padding: '10px 8px'
        },
        placeholder: {
            '::placeholder': {
                color: Color_1.default.primary[800]
            }
        },
        checkbox: {
            padding: '4px'
        }
    });
});
var SkillSetAutoComplete = function (props) {
    var dataSkillSets = props.dataSkillSets, options = props.options, renderInput = props.renderInput, size = props.size, rest = __rest(props, ["dataSkillSets", "options", "renderInput", "size"]);
    var classes = useStyles();
    return (React.createElement(AutoComplete_1.Autocomplete, __assign({ multiple: true, className: classes.root, options: dataSkillSets, disableCloseOnSelect: true, getOptionLabel: function (option) { return option.label; }, renderOption: function (option, _a) {
            var selected = _a.selected;
            return (React.createElement(Checkbox_1.default, { className: classes.checkbox, checked: selected, label: option.label }));
        }, renderInput: function (params) { return React.createElement(Input_1.default, __assign({ placeholder: "Search" }, params)); }, renderTags: function (values, getTagProps) {
            return values.map(function (item, index) { return (React.createElement(tags_1.default, __assign({ label: item.label, key: item.value, customVariant: "autocomplete" }, getTagProps({ index: index })))); });
        } }, rest)));
};
exports.SkillSetAutoComplete = SkillSetAutoComplete;
//# sourceMappingURL=SkillSetAutoComplete.js.map