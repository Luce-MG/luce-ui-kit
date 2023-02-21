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
exports.CardUpgradeService = void 0;
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Avatar_1 = __importDefault(require("../avatar/Avatar"));
var Box_1 = __importDefault(require("../base/Box"));
var Card_1 = require("../base/Card");
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    cardRoot: {
        position: 'relative',
        overflow: 'visible',
        border: 'solid 1px',
        borderColor: theme.palette.grey[600],
        borderRadius: theme.spacing(1)
    },
    selectedCard: {
        backgroundColor: styles_1.fade(theme.palette.secondary.main, 0.06),
        borderColor: theme.palette.secondary.main
    },
    cardImage: {
        height: 160,
        borderRadius: theme.spacing(1)
    },
    avatarRoot: {
        position: 'absolute',
        top: -8,
        right: -8,
        background: theme.palette.secondary.main,
        zIndex: 2
    }
}); });
var CardUpgradeService = function (props) {
    var title = props.title, imgUrl = props.imgUrl, subtitle = props.subtitle, description = props.description, onClick = props.onClick, disabled = props.disabled, isSelected = props.isSelected;
    var classes = useStyles();
    return (React.createElement(Card_1.Card, { classes: { root: classes.cardRoot }, className: isSelected ? classes.selectedCard : '' },
        isSelected && (React.createElement(Avatar_1.default, { className: classes.avatarRoot, customSize: "small" },
            React.createElement(Icons_1.default, { iconName: "TickIcon", size: "small" }))),
        React.createElement(Card_1.CardActionArea, { onClick: onClick, disabled: disabled },
            React.createElement(Card_1.CardMedia, { className: classes.cardImage, image: imgUrl }),
            React.createElement(Card_1.CardContent, null,
                React.createElement(Box_1.default, { mb: 2 },
                    React.createElement(Typography_1.default, { variant: "subtitle1", color: "primary", align: "center", children: title }),
                    React.createElement(Typography_1.default, { bodyVariants: "xsBold", color: "secondary", align: "center", children: subtitle })),
                React.createElement(Typography_1.default, { variant: "body2", color: "primary", align: "center", children: description })))));
};
exports.CardUpgradeService = CardUpgradeService;
//# sourceMappingURL=CardUpgradeService.js.map