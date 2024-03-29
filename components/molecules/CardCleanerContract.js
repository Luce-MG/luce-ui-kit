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
var AccordionScheduleDay_1 = __importDefault(require("../accordion/AccordionScheduleDay"));
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
        verticalLine: {
            borderLeft: 'solid 3px #2D9CDB',
            paddingLeft: theme.spacing(1),
            borderRadius: '0px'
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
        endDateLabel: {
            marginRight: theme.spacing(1.9)
        },
        salaryLabel: {
            marginRight: theme.spacing(4.1)
        }
    });
});
var CardCleanerContract = function (props) {
    var _a;
    var contracts = props.contracts, onClick = props.onClick;
    var classes = useStyles();
    var _b = React.useState(false), expanded = _b[0], setExpanded = _b[1];
    var accordionOpen = function (event) {
        setExpanded(!expanded);
        event.stopPropagation();
    };
    return (React.createElement(core_1.CardActionArea, { onClick: function () { return onClick(contracts.id); }, className: classes.root },
        React.createElement(core_1.Card, { className: expanded ? classes.verticalLine : '', elevation: 0 },
            React.createElement(core_1.CardHeader, { className: classes.cardHeader, title: React.createElement(core_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center" },
                    React.createElement(Typography_1.default, { children: "Contract " + contracts.id, variant: "subtitle2" }),
                    React.createElement(Tags_1.default, { customVariant: "officeCleaning", sizes: "xs", label: contracts.cleanerType })) }),
            React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" },
                React.createElement(core_1.Box, { display: "flex", marginBottom: 0.5 },
                    React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.nameLabel, variant: "overline", children: "Start Date:" }),
                    React.createElement(Typography_1.default, { bodyVariants: "xsMedium", children: contracts.startDate })),
                contracts.endDate && (React.createElement(core_1.Box, { display: "flex", marginBottom: 0.5 },
                    React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.endDateLabel, variant: "overline", children: "End Date:" }),
                    React.createElement(Typography_1.default, { bodyVariants: "xsMedium", children: contracts.endDate }))),
                React.createElement(core_1.Box, { display: "flex", marginBottom: 0.5 },
                    React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.salaryLabel, variant: "overline", children: "Salary:" }),
                    React.createElement(Typography_1.default, { bodyVariants: "xsMedium", children: "$" + contracts.salary + " / " + contracts.periodSalary })),
                !!((_a = contracts.schedule) === null || _a === void 0 ? void 0 : _a.length) && (React.createElement(core_1.Box, { onClick: accordionOpen },
                    React.createElement(AccordionScheduleDay_1.default, { children: "", marginTop: 1, marginBottom: 0.5, sizes: "small", labelVariant: "overline", schedule: contracts.schedule })))))));
};
exports.default = CardCleanerContract;
//# sourceMappingURL=CardCleanerContract.js.map