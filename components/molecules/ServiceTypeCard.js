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
var CardActionArea_1 = __importDefault(require("@material-ui/core/CardActionArea"));
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var React = __importStar(require("react"));
var Avatar_1 = __importDefault(require("../avatar/Avatar"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        cardRoot: {
            color: theme.palette.primary.main,
            width: 156,
            boxShadow: 'none',
            position: 'relative',
            overflow: 'visible'
        },
        default: {
            border: "1px solid " + theme.palette.grey[600],
            background: theme.palette.common.white
        },
        selected: {
            border: "1px solid " + theme.palette.secondary.main,
            background: colorManipulator_1.fade(theme.palette.secondary.main, 0.06)
        },
        cardActionAreaRoot: {
            padding: 24,
            flex: 1,
            textAlign: 'center'
        },
        avatarRoot: {
            position: 'absolute',
            top: -8,
            right: -8,
            background: theme.palette.secondary.main
        },
        typographyRoot: {
            marginTop: 8
        }
    });
});
var ServiceTypeCard = function (props) {
    var isSelected = props.isSelected, onClick = props.onClick, iconName = props.iconName, label = props.label;
    var classes = useStyles();
    var Button;
    if (isSelected) {
        Button = (React.createElement(Avatar_1.default, { className: classes.avatarRoot, imageAvatar: true, customSize: "small" },
            React.createElement(Icons_1.default, { iconName: "TickIcon", size: "small" })));
    }
    return (React.createElement(Card_1.default, { classes: { root: classes.cardRoot }, className: isSelected ? classes.selected : classes.default },
        Button,
        React.createElement(CardActionArea_1.default, { onClick: function () {
                onClick();
            }, classes: { root: classes.cardActionAreaRoot } },
            React.createElement(Icons_1.default, { iconName: iconName, size: "extraLarge" }),
            React.createElement(Typography_1.default, { className: classes.typographyRoot, bodyVariants: "lgMedium" }, label))));
};
exports.default = ServiceTypeCard;
//# sourceMappingURL=ServiceTypeCard.js.map