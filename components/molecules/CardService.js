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
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("../base/Box"));
var Card_1 = require("../base/Card");
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("../button/Button"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        unSelectedCard: {
            width: '100%',
            maxWidth: '343px',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'visible'
        },
        selectedCard: {
            width: '100%',
            maxWidth: '343px',
            backgroundColor: '#4ea8dc0f',
            border: 'solid 1px #4EA8DC',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'visible'
        },
        cardContent: {
            textAlign: 'center'
        },
        cardImage: {
            height: '343px',
            width: '100%',
            borderRadius: '8px'
        },
        cardActions: {
            backgroundColor: '#EDF1F4',
            width: '100%',
            position: 'relative',
            zIndex: 2,
            fontSize: '13px',
            fontWeight: 700
        },
        descText: {
            fontSize: '14px',
            color: '#1A4D6A'
        },
        selectedIcon: {
            position: 'absolute',
            zIndex: 2,
            top: '-5px',
            right: '-5px'
        },
        unSelectedIcon: {
            display: 'none'
        }
    });
});
var CardService = function (props) {
    var title = props.title, subtitle = props.subtitle, onClick = props.onClick, disabled = props.disabled, isSelected = props.isSelected;
    var classes = useStyles();
    return (React.createElement(Card_1.Card, { className: isSelected ? classes.selectedCard : classes.unSelectedCard },
        React.createElement(Icons_1.default, { className: isSelected ? classes.selectedIcon : classes.unSelectedIcon, iconName: "ChecklistSelected", size: "small" }),
        React.createElement(Card_1.CardActionArea, { onClick: onClick, disabled: disabled },
            React.createElement(Card_1.CardContent, { className: classes.cardContent },
                React.createElement(Box_1.default, null,
                    React.createElement(Typography_1.default, { bodyVariants: "lgMedium", color: "primary", children: title }),
                    React.createElement(Typography_1.default, { bodyVariants: "xsBold", color: "secondary", children: subtitle })))),
        React.createElement(Card_1.CardActions, null,
            React.createElement(Button_1.default, { onClick: onClick, className: classes.cardActions }, "View Detail"))));
};
exports.CardService = CardService;
//# sourceMappingURL=CardService.js.map