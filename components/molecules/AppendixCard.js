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
var Box_1 = __importDefault(require("@material-ui/core/Box"));
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
        card: {
            minWidth: theme.spacing(25),
            maxWidth: '100%',
            borderRadius: 8,
            border: "1px solid " + theme.palette.grey[600]
        },
        cardActionArea: {
            padding: theme.spacing(2)
        },
        cardActionAreaBox: {
            marginTop: theme.spacing(1),
            display: 'grid',
            gridColumnGap: theme.spacing(2),
            gridAutoFlow: 'column',
            gridAutoColumns: 'max-content'
        },
        cardActionAreaBoxLabel: {
            display: 'grid',
            gridColumnGap: theme.spacing(1),
            gridAutoFlow: 'column',
            alignItems: 'center',
            color: theme.palette.secondary.main
        },
        cardAvatar: {
            background: colorManipulator_1.fade(theme.palette.primary.main, 0.03),
            color: theme.palette.primary.main
        }
    });
});
var AppendixCard = function (props) {
    var _a = props.title, title = _a === void 0 ? 'For More Information' : _a, _b = props.label, label = _b === void 0 ? 'View Appendix' : _b, _c = props.url, url = _c === void 0 ? '#appendix' : _c;
    var classes = useStyles();
    return (React.createElement(Card_1.default, { elevation: 0, classes: { root: classes.card } },
        React.createElement(CardActionArea_1.default, { classes: { root: classes.cardActionArea }, href: url },
            React.createElement(Typography_1.default, { variant: "overline", children: title }),
            React.createElement(Box_1.default, { className: classes.cardActionAreaBox },
                React.createElement(Avatar_1.default, { className: classes.cardAvatar, imageAvatar: true, customSize: "medium" },
                    React.createElement(Icons_1.default, { iconName: "InvoiceIcon", size: "small" })),
                React.createElement(Box_1.default, { className: classes.cardActionAreaBoxLabel },
                    React.createElement(Typography_1.default, { variant: "body2", children: label }),
                    React.createElement(Icons_1.default, { iconName: "ArrowRightIcon", size: "small" }))))));
};
exports.default = AppendixCard;
//# sourceMappingURL=AppendixCard.js.map