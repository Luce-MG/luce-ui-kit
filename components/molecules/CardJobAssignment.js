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
var Icons_1 = __importDefault(require("../icons/Icons"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var CardPopover_1 = __importDefault(require("./CardPopover"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: 275,
            borderRadius: 4,
            padding: theme.spacing(2)
        },
        cardHeader: {
            padding: 0,
            marginBottom: theme.spacing(2)
        },
        cardContentCleaner: {
            display: 'grid',
            gridTemplateColumns: 'min-content 1fr',
            color: theme.palette.primary.main,
            marginBottom: theme.spacing(2),
            gridColumnGap: theme.spacing(1)
        },
        linkColor: {
            color: theme.palette.info.main
        },
        textColor: {
            color: theme.palette.grey[800]
        },
        nameLabel: {
            marginRight: theme.spacing(4)
        },
        startLabel: {
            marginRight: theme.spacing(1.2)
        },
        endLabel: {
            marginRight: theme.spacing(1.9)
        },
        hideDisplay: {
            display: 'none'
        }
    });
});
var CardJobAssignment = function (props) {
    var schedule = props.schedule, job = props.job, tags = props.tags, data = props.data;
    var classes = useStyles();
    return (React.createElement(core_1.Card, { elevation: 1, classes: { root: classes.root } },
        React.createElement(core_1.CardHeader, { className: classes.cardHeader, title: React.createElement(core_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center" },
                React.createElement(Typography_1.default, { variant: "subtitle2", children: "Job Details" }),
                React.createElement(core_1.Box, null,
                    React.createElement(core_1.Link, { className: classes.linkColor, underline: "always", variant: "caption", href: "#" },
                        "#",
                        job ? job.id : 'Missing'),
                    React.createElement(Typography_1.default, { variant: "caption", children: "| " + (job ? job.packageCode : 'Missing') }))) }),
        React.createElement(core_1.Box, { className: job.cleaner ? classes.cardContentCleaner : classes.hideDisplay },
            React.createElement(Icons_1.default, { iconName: "CleaningIcon", size: "small" }),
            React.createElement(Typography_1.default, { variant: "overline", children: job.cleaner })),
        React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" },
            React.createElement(core_1.Box, null,
                React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.nameLabel, variant: "caption", children: "Client:" }),
                React.createElement(Typography_1.default, { variant: "caption", children: job ? job.client : 'Name Missing' })),
            React.createElement(core_1.Box, null,
                React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.startLabel, variant: "caption", children: "Start Date:" }),
                React.createElement(Typography_1.default, { variant: "caption", children: job ? job.startDate : 'mm dd, yyyy' })),
            React.createElement(core_1.Box, null,
                React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.endLabel, variant: "caption", children: "End Date:" }),
                React.createElement(Typography_1.default, { variant: "caption", children: job ? job.endDate : 'mm dd, yyyy' })),
            React.createElement(core_1.Box, null,
                React.createElement(AccordionScheduleDay_1.default, { sizes: "xs", children: "", schedule: schedule }))),
        React.createElement(core_1.Box, { marginTop: 2, display: "flex", justifyContent: "space-between", alignItems: "center" },
            React.createElement(core_1.Box, { display: "flex" }, tags.map(function (tag, index) {
                return (React.createElement(core_1.Box, { key: "tag-" + index, marginRight: 0.5 },
                    React.createElement(Tags_1.default, { customVariant: tag ? tag.variant : 'homeCleaning', label: tag ? tag.label : 'Missing', sizes: "xs" })));
            })),
            React.createElement(CardPopover_1.default, { data: data }))));
};
exports.default = CardJobAssignment;
//# sourceMappingURL=CardJobAssignment.js.map