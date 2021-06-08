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
exports.TagsChip = void 0;
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Color_1 = __importDefault(require("../base/Color"));
var typography = {
    xsMedium: {
        fontSize: 13,
        lineHeight: 1.38,
        fontWeight: 500,
        alignItems: 'center'
    },
    xxsBold: {
        fontSize: 11,
        lineHeight: 1.45,
        fontWeight: 700,
        alignItems: 'center'
    },
    tagsXs: {
        fontWeight: 700,
        fontSize: 8,
        lineHeight: 1.5,
        alignItems: 'center'
    }
};
var LabelStyle = {
    '& .MuiChip-label': {
        padding: 0
    },
    '& .MuiChip-deleteIcon': {
        display: 'none'
    }
};
var XS = __assign({ height: 'auto', padding: '3px 6px', borderRadius: 2 }, typography.tagsXs);
var Small = __assign({ height: 'auto', padding: '3px 12px', borderRadius: 4 }, typography.xxsBold);
var Medium = __assign({ height: 'auto', padding: '6px 12px', borderRadius: 4 }, typography.xxsBold);
var Large = __assign({ height: 'auto', padding: '7px 16px', borderRadius: 4 }, typography.xsMedium);
var getSize = function (sizes) {
    if (sizes === 'xs') {
        return XS;
    }
    else if (sizes === 'small') {
        return Small;
    }
    else if (sizes === 'medium') {
        return Medium;
    }
    else if (sizes === 'large') {
        return Large;
    }
    else {
        return Medium;
    }
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        primary: function (props) { return (__assign(__assign({ background: Color_1.default.base.firstBase, color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        secondary: function (props) { return (__assign(__assign({ background: Color_1.default.primary[400], color: theme.palette.primary.main }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        officeCleaning: function (props) { return (__assign(__assign({ background: Color_1.default.base.secondBlue, color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        homeCleaning: function (props) { return (__assign(__assign({ background: Color_1.default.base.secondGreen, color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        percentage: function (props) { return (__assign(__assign({ background: Color_1.default.base.firstTint, color: Color_1.default.primary[800] }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        hourlyRate: function (props) { return (__assign(__assign({ background: Color_1.default.primary[700], color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        casual: function (props) { return (__assign(__assign({ background: theme.palette.grey[800], color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        error: function (props) { return (__assign(__assign({ background: theme.palette.error.main, color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        assigned: function (props) { return (__assign(__assign({ background: Color_1.default.base.thirdGreen, color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        changed: function (props) { return (__assign(__assign({ background: Color_1.default.base.secondPurple, color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); },
        unassigned: function (props) { return (__assign(__assign({ background: Color_1.default.base.thirdBase, color: theme.palette.common.white }, LabelStyle), getSize(props.sizes ? props.sizes : 'medium'))); }
    });
});
var TagsChip = function (props) {
    var classes = useStyles(props);
    var label = props.label, customVariant = props.customVariant, rest = __rest(props, ["label", "customVariant"]);
    var getClasses = function (variant) {
        if (customVariant === undefined) {
            return { root: classes.primary };
        }
        else if (customVariant === variant) {
            return { root: classes[variant] };
        }
    };
    return (React.createElement(Chip_1.default, __assign({}, rest, { classes: getClasses(customVariant), label: label })));
};
exports.TagsChip = TagsChip;
exports.default = exports.TagsChip;
//# sourceMappingURL=Tags.js.map