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
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Table_1 = require("../atom/Table");
var Color_1 = __importDefault(require("../base/Color"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: '100%'
        },
        container: {
            borderRadius: '8px 8px 0px 0px',
            height: '100%'
        },
        head: {
            background: Color_1.default.primary[300],
            '& .MuiTableCell-root': {
                borderBottom: 'none'
            }
        }
    });
});
var TableList = function (props) {
    var classes = useStyles();
    var head = props.head, body = props.body, footer = props.footer, classContainer = props.classContainer, rest = __rest(props, ["head", "body", "footer", "classContainer"]);
    return (React.createElement(Table_1.TableContainer, { className: classContainer, classes: { root: classes.container } },
        React.createElement(Table_1.Table, __assign({ classes: { root: classes.root } }, rest),
            head && React.createElement(Table_1.TableHead, { classes: { root: classes.head } }, head),
            body && React.createElement(Table_1.TableBody, null, body),
            footer && React.createElement(Table_1.TableFooter, null, footer))));
};
exports.default = TableList;
//# sourceMappingURL=TableList.js.map