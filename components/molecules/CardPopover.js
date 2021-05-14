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
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Link_1 = __importDefault(require("@material-ui/core/Link"));
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        popover: {
            padding: theme.spacing(2) + "px " + theme.spacing(3) + "px",
            display: 'grid',
            gridGap: theme.spacing(2)
        },
        link: {
            color: theme.palette.common.black
        },
        iconRow: {
            padding: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
            color: theme.palette.grey[700]
        },
        iconColumn: {
            padding: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
            color: theme.palette.grey[700],
            transform: 'rotate(-90deg)',
            transformOrigin: '100% 50%'
        }
    });
});
var PayrollCard = function (props) {
    var data = props.data, direction = props.direction;
    var classes = useStyles();
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popover' : undefined;
    return (React.createElement(Box_1.default, null,
        React.createElement(IconButton_1.default, __assign({ classes: direction === 'column'
                ? { root: classes.iconColumn }
                : { root: classes.iconRow }, color: "primary", component: "small", onClick: handleClick }, props),
            React.createElement(Icons_1.default, { iconName: "OptionsIcon", size: "medium" })),
        React.createElement(Popover_1.default, { classes: { paper: classes.popover }, id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }, elevation: 3 }, data.map(function (item) { return (React.createElement(Typography_1.default, { key: item.label, variant: "body2" },
            React.createElement(Link_1.default, { classes: { root: classes.link }, onClick: function () {
                    item.onPress();
                    handleClose();
                } }, item.label))); }))));
};
exports.default = PayrollCard;
//# sourceMappingURL=CardPopover.js.map