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
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Card_2 = require("../base/Card");
var Typography_1 = __importDefault(require("../base/Typography"));
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
            justifyContent: 'space-between',
            marginBottom: theme.spacing(2)
        },
        cardContentBody: {
            display: 'grid',
            gridTemplateColumns: 'min-content 1fr',
            gridColumnGap: theme.spacing(3),
            marginBottom: theme.spacing(3)
        },
        cardContentFooter: {
            display: 'grid',
            gridRowGap: theme.spacing(0.5)
        },
        cardActionRoot: {
            padding: 0,
            justifyContent: 'flex-end'
        },
        textColor: {
            color: theme.palette.grey[800]
        }
    });
});
var ResignationCard = function (props) {
    var resignedCleaner = props.resignedCleaner, data = props.data, tagLabel = props.tagLabel, labelVariant = props.labelVariant, onClick = props.onClick;
    var classes = useStyles();
    var menuOpenPopover = function (event) {
        event.stopPropagation();
    };
    return (React.createElement(Card_2.CardActionArea, { onClick: onClick, className: classes.card },
        React.createElement(Card_1.default, { elevation: 1 },
            React.createElement(CardContent_1.default, { className: classes.cardContent },
                React.createElement(Box_1.default, { className: classes.cardContentHeader },
                    React.createElement(Typography_1.default, { variant: "subtitle2", children: resignedCleaner.firstName + " " + resignedCleaner.lastName }),
                    React.createElement(Tags_1.default, { customVariant: labelVariant, label: tagLabel, sizes: "xs" })),
                React.createElement(Box_1.default, { className: classes.cardContentBody },
                    React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption", children: "Phone:" }),
                    React.createElement(Typography_1.default, { variant: "caption", children: resignedCleaner.contactNumber }),
                    React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption", children: "Type:" }),
                    React.createElement(Typography_1.default, { variant: "caption", children: resignedCleaner.workerType }),
                    React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption", children: "Nationality:" }),
                    React.createElement(Typography_1.default, { variant: "caption", children: resignedCleaner.nationality })),
                React.createElement(Box_1.default, { className: classes.cardContentFooter },
                    React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption", children: "Last Working Day" }),
                    React.createElement(Typography_1.default, { variant: "caption", children: resignedCleaner.lastWorkingDay }))),
            data && (React.createElement(CardActions_1.default, { onClick: menuOpenPopover, classes: { root: classes.cardActionRoot } },
                React.createElement(CardPopover_1.default, { data: data }))))));
};
exports.default = ResignationCard;
//# sourceMappingURL=ResignationCard.js.map