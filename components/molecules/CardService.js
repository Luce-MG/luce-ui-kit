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
exports.CardService = void 0;
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var React = __importStar(require("react"));
var Avatar_1 = __importDefault(require("../avatar/Avatar"));
var Card_1 = require("../base/Card");
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("../button/Button"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    cardRoot: {
        border: 'solid 1px',
        borderColor: theme.palette.secondary.main,
        position: 'relative',
        overflow: 'visible'
    },
    selectedCard: {
        backgroundColor: colorManipulator_1.fade(theme.palette.secondary.main, 0.06)
    },
    fontWeight700: {
        fontWeight: 700
    },
    avatarRoot: {
        position: 'absolute',
        top: -8,
        right: -8,
        background: theme.palette.secondary.main
    }
}); });
var CardService = function (props) {
    var title = props.title, subtitle = props.subtitle, disabled = props.disabled, isSelected = props.isSelected, actionButton = props.actionButton, onClick = props.onClick, onClickAction = props.onClickAction;
    var classes = useStyles();
    return (React.createElement(Card_1.Card, { classes: { root: classes.cardRoot }, className: isSelected ? classes.selectedCard : '' },
        isSelected && (React.createElement(Avatar_1.default, { className: classes.avatarRoot, customSize: "small" },
            React.createElement(Icons_1.default, { iconName: "TickIcon", size: "small" }))),
        React.createElement(Card_1.CardActionArea, { onClick: onClick, disabled: disabled },
            React.createElement(Card_1.CardContent, null,
                React.createElement(Typography_1.default, { bodyVariants: "lgMedium", color: "primary", align: "center", children: title }),
                React.createElement(Typography_1.default, { bodyVariants: "xsBold", color: "secondary", align: "center", children: subtitle }))),
        React.createElement(Card_1.CardActions, null, actionButton !== null && actionButton !== void 0 ? actionButton : (React.createElement(Button_1.default, { onClick: onClickAction, fullWidth: true, variants: "ghost", className: classes.fontWeight700, disabled: disabled }, "View Detail")))));
};
exports.CardService = CardService;
//# sourceMappingURL=CardService.js.map