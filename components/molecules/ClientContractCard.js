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
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        card: {
            width: theme.spacing(30),
            maxWidth: '100%',
            borderRadius: 4,
            border: "1px solid " + theme.palette.grey[300]
        },
        cardActionArea: {
            padding: theme.spacing(2),
            display: 'flex'
        },
        cardSelected: {
            background: theme.palette.grey[300],
            border: "1px solid " + theme.palette.grey[500]
        },
        cardLine: {
            background: theme.palette.secondary.main,
            width: theme.spacing(0.5),
            marginRight: theme.spacing(1),
            borderRadius: 4,
            alignSelf: 'stretch'
        },
        cardContent: {
            width: '100%'
        },
        cardContentHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(1)
        },
        cardContentBottom: {
            color: theme.palette.grey[800],
            marginRight: theme.spacing(2)
        }
    });
});
var ClientContractCard = function (props) {
    var _a = props.name, name = _a === void 0 ? '-' : _a, _b = props.startDate, startDate = _b === void 0 ? '-' : _b, _c = props.totalPackage, totalPackage = _c === void 0 ? 0 : _c, _d = props.isSelected, isSelected = _d === void 0 ? false : _d, onClick = props.onClick;
    var classes = useStyles();
    return (React.createElement(Card_1.default, { elevation: 1, classes: { root: classes.card }, className: isSelected ? classes.cardSelected : '', onClick: function () {
            onClick();
        } },
        React.createElement(CardActionArea_1.default, { classes: { root: classes.cardActionArea }, onClick: function () {
                onClick();
            } },
            isSelected ? React.createElement(Box_1.default, { className: classes.cardLine }) : '',
            React.createElement(Box_1.default, { className: classes.cardContent },
                React.createElement(Box_1.default, { className: classes.cardContentHeader },
                    React.createElement(Typography_1.default, { variant: "subtitle1", children: name }),
                    React.createElement(Tags_1.default, { customVariant: "officeCleaning", label: totalPackage + (totalPackage > 1 ? ' Packages' : ' Package'), sizes: "xs" })),
                React.createElement(Box_1.default, null,
                    React.createElement(Typography_1.default, { className: classes.cardContentBottom, variant: "caption", children: "Start Date:" }),
                    React.createElement(Typography_1.default, { variant: "caption", children: startDate }))))));
};
exports.default = ClientContractCard;
//# sourceMappingURL=ClientContractCard.js.map