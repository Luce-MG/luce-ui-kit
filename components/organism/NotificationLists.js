"use strict";
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
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Color_1 = __importDefault(require("../base/Color"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var CardNotification_1 = __importDefault(require("../molecules/CardNotification"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        notif: {
            borderTopRightRadius: theme.spacing(1),
            borderTopLeftRadius: theme.spacing(1)
        },
        lastStyle: {
            borderBottomLeftRadius: theme.spacing(1),
            borderBottomRightRadius: theme.spacing(1),
            borderBottom: 'none'
        },
        notifText: {
            color: theme.palette.common.black
        },
        notifBadge: {
            marginLeft: theme.spacing(1.5)
        },
        badgeNotif: {
            background: theme.palette.error.main
        },
        iconNotif: {
            color: theme.palette.common.white
        },
        iconBadge: {
            background: theme.palette.common.white
        }
    });
});
var NotificationLists = function (props) {
    var classes = useStyles();
    var notifications = props.notifications, allIsRead = props.allIsRead;
    var _a = React.useState(false), read = _a[0], setRead = _a[1];
    var _b = React.useState(0), id = _b[0], setId = _b[1];
    var _c = React.useState(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleIsRead = function (props) {
        setId(props);
        setRead(true);
    };
    var open = Boolean(anchorEl);
    return (React.createElement(core_1.Box, null,
        React.createElement(core_1.Badge, { anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }, color: "primary", variant: "dot", classes: { badge: classes.iconBadge }, invisible: allIsRead },
            React.createElement(core_1.IconButton, { onClick: handleClick, size: "small", className: classes.iconNotif },
                React.createElement(Icons_1.default, { iconName: "NotificationIcon", size: "medium" }))),
        React.createElement(Popover_1.default, { open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'right'
            } },
            React.createElement(core_1.Box, { overflow: "auto", maxHeight: 340 }, notifications ? (notifications.map(function (notif, index) {
                return (React.createElement(core_1.Box, { key: "notif-" + index, borderBottom: "1px solid " + Color_1.default.primary[500], className: "\n              " + classes.notif + " \n              " + (index === notifications.length - 1 ? classes.lastStyle : '') + "\n              " },
                    React.createElement(CardNotification_1.default, { notification: {
                            id: notif.id,
                            date: notif.date,
                            label: notif.label,
                            link: notif.link
                        }, isRead: id === notif.id ? read : false, onRead: handleIsRead })));
            })) : (React.createElement(core_1.Box, { padding: 2 }, " No Notifications "))))));
};
exports.default = NotificationLists;
//# sourceMappingURL=NotificationLists.js.map