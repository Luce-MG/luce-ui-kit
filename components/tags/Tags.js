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
exports.TagsChip = void 0;
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var XS = {
    height: 'auto',
    fontWeight: 700,
    fontSize: '0.5rem',
    lineHeight: '1.5em',
    alignItems: 'center',
    padding: '3px 6px'
};
var Small = {
    height: 'auto',
    fontWeight: 700,
    fontSize: '0.7rem',
    lineHeight: '1.45em',
    alignItems: 'center',
    padding: '3px 12px'
};
var Medium = {
    height: 'auto',
    fontWeight: 700,
    fontSize: '0.7rem',
    lineHeight: '1.45em',
    alignItems: 'center',
    padding: '6px 12px'
};
var Large = {
    height: 'auto',
    fontWeight: 500,
    fontSize: '0.8rem',
    lineHeight: '1.38em',
    alignItems: 'center',
    padding: '7px 16px'
};
var getSize = function (sizes) {
    if (sizes === 'xs') {
        return XS;
    }
    if (sizes === 'small') {
        return Small;
    }
    if (sizes === 'medium') {
        return Medium;
    }
    if (sizes === 'large') {
        return Large;
    }
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        Primary: function (props) { return (__assign({ background: '#829AEE', color: theme.palette.primary.main, borderRadius: 4, '& .MuiChip-label': {
                padding: 0
            } }, getSize(props.sizes))); },
        Secondary: function (props) { return (__assign({ background: '#EDF1F4', color: theme.palette.primary.main, borderRadius: 4, '& .MuiChip-label': {
                padding: 0
            } }, getSize(props.sizes))); },
        OfficeCleaning: function (props) { return (__assign({ background: '#2D9CDB', color: theme.palette.common.white, borderRadius: 2, '& .MuiChip-label': {
                padding: 0
            } }, getSize(props.sizes))); },
        HomeCleaning: function (props) { return (__assign({ background: '#27AE60', color: theme.palette.common.white, borderRadius: 2, '& .MuiChip-label': {
                padding: 0
            } }, getSize(props.sizes))); },
        Percentage: function (props) { return (__assign({ background: '#E8ECFA', color: '#52798F', borderRadius: 2, '& .MuiChip-label': {
                padding: 0
            } }, getSize(props.sizes))); },
        HourlyRate: function (props) { return (__assign({ background: '#7A98AA', color: theme.palette.common.white, borderRadius: 2, '& .MuiChip-label': {
                padding: 0
            } }, getSize(props.sizes))); },
        Casual: function (props) { return (__assign({ background: theme.palette.grey[800], color: theme.palette.common.white, borderRadius: 2, '& .MuiChip-label': {
                padding: 0
            } }, getSize(props.sizes))); }
    });
});
var TagsChip = function (props) {
    var classes = useStyles(props);
    var label = props.label, customVariant = props.customVariant;
    var getClasses = function () {
        if (customVariant === 'primary') {
            return { root: classes.Primary };
        }
        if (customVariant === 'secondary') {
            return { root: classes.Secondary };
        }
        if (customVariant === 'officeCleaning') {
            return { root: classes.OfficeCleaning };
        }
        if (customVariant === 'homeCleaning') {
            return { root: classes.HomeCleaning };
        }
        if (customVariant === 'percentage') {
            return { root: classes.Percentage };
        }
        if (customVariant === 'hourlyRate') {
            return { root: classes.HourlyRate };
        }
        if (customVariant === 'casual') {
            return { root: classes.Casual };
        }
    };
    return React.createElement(Chip_1.default, { classes: getClasses(), label: label });
};
exports.TagsChip = TagsChip;
exports.default = exports.TagsChip;
//# sourceMappingURL=Tags.js.map