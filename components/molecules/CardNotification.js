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
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var BaseColor_1 = __importDefault(require("../base/BaseColor"));
var Typography_1 = __importDefault(require("../base/Typography"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        notif: {
            padding: theme.spacing(2),
            width: 363
        },
        notifText: {
            color: theme.palette.common.black,
            textAlign: 'left'
        },
        notifBadge: {
            marginLeft: theme.spacing(1.5)
        },
        badgeColor: {
            background: theme.palette.error.main
        }
    });
});
var CardNotification = function (props) {
    var classes = useStyles();
    var notification = props.notification, onRead = props.onRead, isRead = props.isRead;
    return (React.createElement(core_1.Box, { className: classes.notif, bgcolor: isRead ? BaseColor_1.default.primaryColor[300] : 'white' },
        React.createElement(core_1.Badge, { anchorOrigin: {
                vertical: 'top',
                horizontal: 'left'
            }, classes: { badge: classes.badgeColor }, color: "primary", variant: "dot", invisible: isRead ? isRead : false },
            React.createElement(core_1.Link, { component: "button", onClick: function () { return onRead(notification.id); }, underline: "none", variant: "overline", classes: { root: classes.notifText }, className: classes.notifBadge }, notification ? notification.label : 'No Notifications')),
        React.createElement(core_1.Box, { display: "flex", justifyContent: "flex-end", marginTop: 1 },
            React.createElement(Typography_1.default, { color: "primary", variant: "caption", children: notification ? notification.date : 'mm dd, yyyy' }))));
};
exports.default = CardNotification;
//# sourceMappingURL=CardNotification.js.map