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
var core_1 = require("@material-ui/core");
var Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var MenuButton_1 = __importDefault(require("../button/MenuButton"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            '& .MuiBackdrop-root': {
                background: 'transparent'
            }
        }
    });
});
var SideNav = function (props) {
    var classes = useStyles();
    var toggleClick = props.toggleClick, menus = props.menus, isOpen = props.isOpen, onClick = props.onClick, children = props.children, rest = __rest(props, ["toggleClick", "menus", "isOpen", "onClick", "children"]);
    return (React.createElement(core_1.Box, null,
        children,
        React.createElement(Drawer_1.default, __assign({ elevation: 2, className: classes.root, open: isOpen, onClose: function () { return toggleClick(isOpen); } }, rest),
            React.createElement(MenuButton_1.default, { menus: menus, onClick: function () { return onClick; } }))));
};
exports.default = SideNav;
//# sourceMappingURL=SideNav.js.map