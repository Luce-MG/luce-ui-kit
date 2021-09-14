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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: 265,
            padding: theme.spacing(2),
            position: 'relative',
            background: theme.palette.common.white,
            boxShadow: theme.shadows[1],
            borderRadius: theme.spacing(0.5)
        },
        cardHeader: {
            padding: 0,
            marginBottom: theme.spacing(1)
        },
        textColor: {
            color: theme.palette.grey[800]
        },
        nameLabel: {
            marginRight: theme.spacing(1.4)
        },
        salaryLabel: {
            marginRight: theme.spacing(4.1)
        }
    });
});
var CardCleanerContract = function (props) {
    var contracts = props.contracts, onClick = props.onClick;
    var classes = useStyles();
    return (React.createElement(core_1.CardActionArea, { onClick: function () { return onClick(contracts.id); }, className: classes.root },
        React.createElement(core_1.Card, { elevation: 0 },
            React.createElement(core_1.CardHeader, { className: classes.cardHeader, title: React.createElement(core_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center" },
                    React.createElement(Typography_1.default, { children: "Contract " + contracts.id, variant: "subtitle2" }),
                    React.createElement(Tags_1.default, { customVariant: "officeCleaning", sizes: "xs", label: contracts.cleanerType })) }),
            React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" },
                React.createElement(core_1.Box, { display: "flex", marginBottom: 0.5 },
                    React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.nameLabel, variant: "overline", children: "Start Date:" }),
                    React.createElement(Typography_1.default, { bodyVariants: "xsMedium", children: contracts.startDate })),
                React.createElement(core_1.Box, { display: "flex", marginBottom: 0.5 },
                    React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.salaryLabel, variant: "overline", children: "Salary:" }),
                    React.createElement(Typography_1.default, { bodyVariants: "xsMedium", children: "$" + contracts.salary + " / " + contracts.periodSalary }))))));
};
exports.default = CardCleanerContract;
//# sourceMappingURL=CardCleanerContract.js.map