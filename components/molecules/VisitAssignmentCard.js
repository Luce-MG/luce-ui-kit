"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var PackageJobVisitLink_1 = __importDefault(require("../button/PackageJobVisitLink"));
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
    var visit = props.visit, tags = props.tags, data = props.data, onClick = props.onClick, packageJobVisit = props.packageJobVisit;
    var classes = useStyles();
    var menuOpenPopover = function (event) {
        event.stopPropagation();
    };
    return (React.createElement(Card_2.CardActionArea, { onClick: onClick, classes: { root: classes.card } },
        React.createElement(Card_1.default, { elevation: 1 },
            React.createElement(CardContent_1.default, { className: classes.cardContent },
                React.createElement(Box_1.default, { className: classes.cardContentHeader },
                    React.createElement(Typography_1.default, { variant: "subtitle2" }, " Visit Details "),
                    React.createElement(Box_1.default, { display: "flex", alignItems: "center" },
                        React.createElement(PackageJobVisitLink_1.default, __assign({}, packageJobVisit, { visitId: visit === null || visit === void 0 ? void 0 : visit.id })),
                        React.createElement(Typography_1.default, { variant: "caption" }, " | " + visit.packageCode))),
                visit.cleaner && (React.createElement(Box_1.default, { className: classes.cardContentCleaner },
                    React.createElement(Icons_1.default, { iconName: "CleaningIcon", size: "small" }),
                    React.createElement(Typography_1.default, { variant: "overline", children: visit.cleaner }))),
                React.createElement(Box_1.default, { className: classes.cardContentBody },
                    React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption" }, "Client:"),
                    React.createElement(Typography_1.default, { variant: "caption" }, visit.client),
                    React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption" }, "Address:"),
                    React.createElement(Box_1.default, { minHeight: "40px" },
                        React.createElement(Typography_1.default, { variant: "caption" }, visit.address)),
                    React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption" }, "Date:"),
                    React.createElement(Typography_1.default, { variant: "caption" },
                        " ",
                        visit.date,
                        " "),
                    React.createElement(Typography_1.default, { className: classes.textColor, variant: "caption" }, "Time:"),
                    React.createElement(Typography_1.default, { variant: "caption" }, visit.time))),
            React.createElement(CardActions_1.default, { className: classes.cardAction },
                React.createElement(Box_1.default, { display: "flex", gridGap: 4 }, tags.map(function (tag, index) {
                    return (React.createElement(Box_1.default, { key: "tag-" + index },
                        React.createElement(Tags_1.default, { customVariant: tag ? tag.variant : 'homeCleaning', label: tag.label, sizes: "xs" })));
                })),
                React.createElement(Box_1.default, { onClick: menuOpenPopover },
                    React.createElement(CardPopover_1.default, { data: data }))))));
};
exports.default = VisitAssignmentCard;
//# sourceMappingURL=VisitAssignmentCard.js.map