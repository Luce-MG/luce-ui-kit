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
var react_1 = __importStar(require("react"));
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
        linkSubMenu: {
            color: theme.palette.common.black,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'none'
            }
        },
        linkColorInfo: {
            color: theme.palette.info.main,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'none'
            }
        }
    });
});
var ListItem = function (_a) {
    var _b;
    var menu = _a.menu, activeRoute = _a.activeRoute;
    var classes = useStyles();
    var _c = react_1.useState(false), isOpen = _c[0], setOpen = _c[1];
    var subMenuActive = react_1.useMemo(function () { return menu.subMenu && menu.subMenu.find(function (menu) { return menu.url === activeRoute; }); }, [activeRoute]);
    react_1.useEffect(function () {
        if (!!subMenuActive && !isOpen) {
            setOpen(true);
        }
    }, [!!subMenuActive]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ListItem_1.default, { button: true, disableRipple: true, component: menu.subMenu ? 'li' : core_1.Link, onClick: function () {
                if (menu.subMenu) {
                    setOpen(!isOpen);
                }
            }, href: menu.url ? "/" + menu.url : undefined, classes: { root: classes.root, selected: classes.itemSelected } },
            (activeRoute === menu.url || !!subMenuActive) && (react_1.default.createElement(core_1.Box, { className: classes.lineSelected })),
            react_1.default.createElement(ListItemIcon_1.default, { classes: { root: classes.iconStyle } },
                react_1.default.createElement(Icons_1.default, { size: "medium", iconName: (_b = menu.icon) !== null && _b !== void 0 ? _b : 'MenuIcon' })),
            react_1.default.createElement(ListItemText_1.default, { classes: { primary: classes.listTextPrimary }, primary: menu.label }),
            menu.subMenu &&
                (isOpen ? (react_1.default.createElement(Icons_1.default, { iconName: "ArrowBottomIcon", size: "small" })) : (react_1.default.createElement(Icons_1.default, { iconName: "ArrowLeftIcon", size: "small" })))),
        menu.subMenu && (react_1.default.createElement(Collapse_1.default, { in: isOpen, className: classes.collpase }, menu.subMenu.map(function (menuSub, indexSub) {
            return (react_1.default.createElement(ListItem_1.default, { key: "sub-menu-" + indexSub, button: true, classes: { root: classes.collapseItem } },
                react_1.default.createElement(core_1.Link, { className: activeRoute === menuSub.url
                        ? classes.linkColorInfo
                        : classes.linkSubMenu, href: "/" + menuSub.url },
                    react_1.default.createElement(ListItemText_1.default, { primary: menuSub.label }))));
        })))));
};
var MenuButton = function (props) {
    var menus = props.menus, activeRoute = props.activeRoute;
    return (react_1.default.createElement(core_1.List, null, menus.map(function (menu, index) { return (react_1.default.createElement(ListItem, { key: index, menu: menu, activeRoute: activeRoute !== null && activeRoute !== void 0 ? activeRoute : '' })); })));
};
exports.default = MenuButton;
//# sourceMappingURL=MenuButton.js.map