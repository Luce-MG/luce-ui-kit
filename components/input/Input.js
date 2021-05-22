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
var InputAdornment_1 = __importDefault(require("@material-ui/core/InputAdornment"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        muiInputRoot: {
            borderRadius: 3,
            '& > svg': {
                position: 'absolute',
                right: theme.spacing(1),
                pointerEvents: 'none'
            }
        },
        muiInputRootSmall: {
            padding: theme.spacing(1.125, 1.5)
        },
        muiInputRootMedium: {
            padding: theme.spacing(1, 1.5)
        },
        muiInputRootLarge: {
            padding: theme.spacing(1.5, 1.875)
        },
        muiInputFocus: {
            border: 'inherits'
        },
        muiInputmultiline: {
            padding: 0
        },
        muiInputLabelRoot: __assign(__assign({}, theme.typography.overline), { marginBottom: theme.spacing(0.5), '&.shrink': {
                transform: 'inherit'
            } }),
        MuiFormHelperTextRoot: __assign(__assign({}, theme.typography.caption), { marginTop: theme.spacing(0.5) }),
        MuiFormHelperTextContained: {
            marginLeft: 0
        },
        muiInputLabelFormControl: {
            position: 'static'
        }
    });
});
var TextField = function (props) {
    var theme = styles_1.useTheme();
    var classes = useStyles(props);
    var customSize = props.customSize, readOnly = props.readOnly, icon = props.icon, select = props.select, InputProps = props.InputProps, SelectProps = props.SelectProps, _a = props.FormHelperTextProps, FormHelperTextProps = _a === void 0 ? {} : _a, rest = __rest(props, ["customSize", "readOnly", "icon", "select", "InputProps", "SelectProps", "FormHelperTextProps"]);
    var getSizeInputRoot = function () {
        if (customSize === 'small') {
            return classes.muiInputRootSmall;
        }
        if (customSize === 'large') {
            return classes.muiInputRootLarge;
        }
        return classes.muiInputRootMedium;
    };
    var getSizeInputInput = function () {
        if (customSize === 'small') {
            return theme.typography.overline;
        }
        if (customSize === 'large') {
            return theme.typography.body1;
        }
        return theme.typography.body2;
    };
    var inputProps = __assign(__assign(__assign({ readOnly: readOnly }, InputProps), { classes: {
            root: classes.muiInputRoot,
            input: getSizeInputRoot() + " " + getSizeInputInput(),
            focused: classes.muiInputFocus,
            multiline: classes.muiInputmultiline
        }, notched: false }), (icon &&
        !select && {
        startAdornment: (React.createElement(InputAdornment_1.default, { position: "start" },
            React.createElement(Icons_1.default, { iconName: icon, size: "small" })))
    }));
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
    var selectProps = __assign({ displayEmpty: true, IconComponent: function () { return (React.createElement(Icons_1.default, { iconName: icon ? icon : 'ArrowBottomIcon', size: "small" })); } }, SelectProps);
    return (React.createElement(TextField_1.default, __assign({ rows: 4, select: select, InputProps: inputProps, InputLabelProps: inputLabelProps, FormHelperTextProps: formHelperTextProps, SelectProps: selectProps, variant: "outlined" }, rest)));
};
exports.default = TextField;
//# sourceMappingURL=Input.js.map