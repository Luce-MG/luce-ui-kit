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
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            minWidth: 200,
            borderRadius: theme.spacing(1),
            boxShadow: 'none',
            overflow: 'visible',
            border: "none",
            background: colorManipulator_1.fade(theme.palette.primary.main, 0.03)
        },
        content: {
            paddingBottom: 0
        },
        action: {
            padding: theme.spacing(0.5),
            paddingTop: 0,
            justifyContent: 'flex-end'
        },
        typography: {
            marginTop: theme.spacing(0.5),
            color: theme.palette.grey[700]
        },
        icon: {
            padding: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
            color: theme.palette.grey[700]
        }
    });
});
var PayrollCard = function (props) {
    var month = props.month, amount = props.amount;
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
    return (React.createElement(Card_1.default, { classes: { root: classes.root } },
        React.createElement(CardContent_1.default, { classes: { root: classes.content } },
            React.createElement(Typography_1.default, { variant: "subtitle2" }, month),
            React.createElement(Typography_1.default, { classes: { root: classes.typography }, variant: "h3" },
                "$",
                amount)),
        React.createElement(CardActions_1.default, { classes: { root: classes.action } },
            React.createElement(IconButton_1.default, { classes: { root: classes.icon }, color: "primary", component: "small", onClick: handleClick },
                React.createElement(Icons_1.default, { iconName: "OptionsIcon", size: "medium" }))),
        React.createElement(Popover_1.default, { id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }, elevation: 3 },
            React.createElement(Typography_1.default, null, "Should create an atom for Popover element"))));
};
exports.default = PayrollCard;
//# sourceMappingURL=PayrollCard.js.map