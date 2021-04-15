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
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var Link_1 = __importDefault(require("@material-ui/core/Link"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var CardPopover_1 = __importDefault(require("../molecules/CardPopover"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        card: {
            width: theme.spacing(30),
            maxWidth: '100%',
            borderRadius: 4
        },
        cardContent: {
            paddingBottom: 0
        },
        cardContentHeader: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(2)
        },
        cardContentCleaner: {
            display: 'grid',
            gridTemplateColumns: 'min-content 1fr',
            color: theme.palette.primary.main,
            marginBottom: theme.spacing(2),
            gridColumnGap: theme.spacing(1)
        },
        cardContentBody: {
            display: 'grid',
            gridTemplateColumns: 'min-content 1fr',
            gridColumnGap: theme.spacing(3)
        },
        cardContentFooter: {
            display: 'grid',
            gridRowGap: theme.spacing(0.5)
        },
        cardAction: {
            paddingLeft: theme.spacing(2),
            justifyContent: 'space-between'
        },
        textColor: {
            color: theme.palette.grey[800]
        }
    });
});
var VisitAssignmentCard = function (props) {
    var visit = props.visit, tag = props.tag, data = props.data;
    var classes = useStyles();
    return (React.createElement(Card_1.default, { elevation: 1, classes: { root: classes.card } },
        React.createElement(CardContent_1.default, { className: classes.cardContent },
            React.createElement(Box_1.default, { className: classes.cardContentHeader },
                React.createElement(Typography_1.default, { variant: "subtitle2", children: "Visit Details" }),
                React.createElement(Typography_1.default, { variant: "caption" },
                    React.createElement(Link_1.default, { href: '#' + visit.id }, '#' + visit.id),
                    ' | ' + visit.packageCode)),
            visit.cleaner ? (React.createElement(Box_1.default, { className: classes.cardContentCleaner },
                React.createElement(Icons_1.default, { iconName: "CleaningIcon", size: "small" }),
                React.createElement(Typography_1.default, { variant: "overline", children: visit.cleaner }))) : (false),
            React.createElement(Box_1.default, { className: classes.cardContentBody },
                React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption", children: "Client:" }),
                React.createElement(Typography_1.default, { variant: "caption", children: visit.client }),
                React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption", children: "Address:" }),
                React.createElement(Typography_1.default, { variant: "caption", children: visit.address }),
                React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption", children: "Date:" }),
                React.createElement(Typography_1.default, { variant: "caption", children: visit.date }),
                React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption", children: "Time:" }),
                React.createElement(Typography_1.default, { variant: "caption", children: visit.time }))),
        React.createElement(CardActions_1.default, { className: classes.cardAction },
            React.createElement(Tags_1.default, { customVariant: tag.variant, label: tag.label, sizes: "xs" }),
            React.createElement(CardPopover_1.default, { data: data }))));
};
exports.default = VisitAssignmentCard;
//# sourceMappingURL=VisitAssignmentCard.js.map