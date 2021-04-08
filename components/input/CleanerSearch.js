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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var styles_1 = require("@material-ui/core/styles");
var Autocomplete_1 = __importDefault(require("@material-ui/lab/Autocomplete"));
var React = __importStar(require("react"));
var avatar_icon_svg_1 = __importDefault(require("../../stories/assets/avatar-icon.svg"));
var Avatar_1 = __importDefault(require("../avatar/Avatar"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Input_1 = __importDefault(require("./Input"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: 271,
            background: '#F8FAFB',
            border: 'none'
        },
        avatar: {
            marginRight: theme.spacing(2)
        },
        placeholder: {
            '::placeholder': {
                color: '#52798F'
            }
        }
    });
});
var CleanerSearch = function (props) {
    var dataCleaner = props.dataCleaner, loading = props.loading, onSelect = props.onSelect;
    var classes = useStyles();
    var onChange = function (event, value, empty) {
        if (empty === 'clear') {
            return;
        }
        onSelect(value);
    };
    return (React.createElement(Autocomplete_1.default, { freeSolo: true, disableClearable: true, classes: { root: classes.root }, options: dataCleaner, getOptionLabel: function (option) { return option.name; }, onChange: onChange, loading: loading, renderOption: function (option) { return (React.createElement(Box_1.default, { display: "flex", alignItems: "center", color: "#222", padding: 1 },
            React.createElement(Avatar_1.default, { className: classes.avatar, imageAvatar: true, customSize: "medium", src: option.imgUrl ? option.imgUrl : avatar_icon_svg_1.default }),
            React.createElement(Typography_1.default, { variant: "body2", children: option.name }))); }, renderInput: function (params) { return (React.createElement(Input_1.default, __assign({}, params, { data: { test: '' }, className: classes.placeholder, customSize: "medium", placeholder: "Add another cleaner to the list", readOnly: false, icon: "SearchIcon", InputProps: __assign(__assign({}, params.InputProps), { type: 'search' }) }))); } }));
};
exports.default = CleanerSearch;
//# sourceMappingURL=CleanerSearch.js.map