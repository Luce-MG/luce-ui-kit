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
var core_1 = require("@material-ui/core");
var Collapse_1 = __importDefault(require("@material-ui/core/Collapse"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var ListItemIcon_1 = __importDefault(require("@material-ui/core/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Color_1 = __importDefault(require("../base/Color"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            color: theme.palette.common.black,
            background: theme.palette.common.white,
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
            paddingRight: theme.spacing(3),
            marginLeft: theme.spacing(3),
            width: 290,
            position: 'relative',
            '&:hover': {
                background: 'transparent'
            }
        },
        itemSelected: {
            '&.Mui-selected': {
                backgroundColor: theme.palette.common.white,
                '&:hover': {
                    background: 'transparent'
                }
            }
        },
        iconStyle: {
            color: theme.palette.common.black,
            minWidth: theme.spacing(0),
            marginRight: theme.spacing(2)
        },
        listTextPrimary: __assign({}, theme.typography.subtitle1),
        lineSelected: {
            background: theme.palette.primary.main,
            width: theme.spacing(0.5),
            height: 24,
            position: 'absolute',
            left: 0,
            borderRadius: theme.spacing(1)
        },
        collpase: {
            background: Color_1.default.primary[300]
        },
        collapseItem: {
            color: theme.palette.common.black,
            borderBottom: "1px solid " + Color_1.default.primary[500],
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
            paddingLeft: theme.spacing(5.25),
            '&:hover': {
                background: 'transparent'
            }
        },
        linkColor: {
            color: theme.palette.info.main
        }
    });
});
var MenuButton = function (props) {
    var menus = props.menus, onClick = props.onClick, urlOnClick = props.urlOnClick, activeRoute = props.activeRoute;
    var classes = useStyles();
    var _a = React.useState(0), menuIndex = _a[0], setMenuIndex = _a[1];
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    React.useEffect(function () {
        console.log(activeRoute);
        if (activeRoute === 'daily' || activeRoute === 'weekly') {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    }, [activeRoute]);
    return (React.createElement("div", null, menus.map(function (menu, index) {
        return (React.createElement(core_1.Box, { key: "menu-button-" + index },
            React.createElement(ListItem_1.default, { onClick: function (event) {
                    if (menu.isExpand) {
                        setOpen(!open);
                    }
                    onClick(event, index),
                        setMenuIndex(index),
                        urlOnClick(event, menu.url, menu.isExpand);
                }, selected: menuIndex === index, button: true, disableRipple: true, classes: { root: classes.root, selected: classes.itemSelected } },
                React.createElement(core_1.Box, { className: (activeRoute === menu.url && !open) || (open && menu.isExpand)
                        ? classes.lineSelected
                        : '' }),
                React.createElement(ListItemIcon_1.default, { classes: { root: classes.iconStyle } },
                    React.createElement(Icons_1.default, { size: "medium", iconName: menus && menu.icon ? menu.icon : 'ArrowRightIcon' })),
                React.createElement(ListItemText_1.default, { classes: { primary: classes.listTextPrimary }, primary: menus ? menu.label : 'Menu' }),
                menu.isExpand ? (open && menuIndex === index ? (React.createElement(Icons_1.default, { iconName: "ArrowBottomIcon", size: "small" })) : (React.createElement(Icons_1.default, { iconName: "ArrowLeftIcon", size: "small" }))) : ('')),
            menu.isExpand && menuIndex === index ? (React.createElement(Collapse_1.default, { in: open, className: classes.collpase }, menu.subMenu
                ? menu.subMenu.map(function (menuSub, indexSub) {
                    return (React.createElement(ListItem_1.default, { key: "sub-menu-" + indexSub, button: true, component: "a", href: menu.subMenu ? menuSub.url : '#', classes: { root: classes.collapseItem } },
                        React.createElement(ListItemText_1.default, { className: "/" + activeRoute === menuSub.url
                                ? classes.linkColor
                                : '', primary: menu.subMenu ? menuSub.label : 'Sub Menu' })));
                })
                : null)) : ('')));
    })));
};
exports.default = MenuButton;
//# sourceMappingURL=MenuButton.js.map