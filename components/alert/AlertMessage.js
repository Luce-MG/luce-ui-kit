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
var Collapse_1 = __importDefault(require("@material-ui/core/Collapse"));
var styles_1 = require("@material-ui/core/styles");
var Alert_1 = __importDefault(require("@material-ui/lab/Alert"));
var React = __importStar(require("react"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: __assign(__assign({}, theme.typography.body2), { width: '100%', color: theme.palette.common.white, '& .MuiAlert-icon': {
                display: 'none'
            } }),
        primary: {
            background: theme.palette.common.black
        },
        secondary: {
            background: theme.palette.grey[400],
            color: theme.palette.common.black
        },
        error: {
            background: theme.palette.error.main
        },
        success: {
            background: theme.palette.success.main
        }
    });
});
var Alert = function (props) {
    var children = props.children, type = props.type, isOpen = props.isOpen, _a = props.onClose, onClose = _a === void 0 ? function () { } : _a, rest = __rest(props, ["children", "type", "isOpen", "onClose"]);
    var classes = useStyles();
    var getType = function (typeAlert) {
        if (typeAlert === undefined) {
            return { root: classes.primary };
        }
        else if (type === typeAlert) {
            return { root: classes[typeAlert] };
        }
    };
    return (React.createElement(Collapse_1.default, { in: isOpen },
        React.createElement(Alert_1.default, __assign({ className: classes.root, classes: getType(type), onClose: function () { return onClose(); } }, rest), children)));
};
exports.default = Alert;
//# sourceMappingURL=AlertMessage.js.map