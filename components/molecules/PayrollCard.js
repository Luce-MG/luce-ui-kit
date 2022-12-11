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
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("../base/Box"));
var Card_1 = require("../base/Card");
var Typography_1 = __importDefault(require("../base/Typography"));
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
        },
        spacingRight: {
            marginRight: theme.spacing(0.5)
        }
    });
});
var PayrollCard = function (props) {
    var id = props.id, year = props.year, month = props.month, amount = props.amount, onClick = props.onClick;
    var classes = useStyles();
    return (React.createElement(Card_1.CardActionArea, { onClick: onClick },
        React.createElement(Card_1.Card, { "aria-label": "card-payroll-" + id, classes: { root: classes.root } },
            React.createElement(Card_1.CardContent, { classes: { root: classes.content } },
                React.createElement(Box_1.default, { display: "flex" },
                    React.createElement(Typography_1.default, { className: classes.spacingRight, variant: "subtitle2" }, month),
                    React.createElement(Typography_1.default, { variant: "subtitle2" }, year)),
                React.createElement(Typography_1.default, { classes: { root: classes.typography }, variant: "h3" },
                    "$",
                    amount)))));
};
exports.default = PayrollCard;
//# sourceMappingURL=PayrollCard.js.map