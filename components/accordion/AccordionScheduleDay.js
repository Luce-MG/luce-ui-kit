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
var Accordion_1 = __importDefault(require("@material-ui/core/Accordion"));
var AccordionDetails_1 = __importDefault(require("@material-ui/core/AccordionDetails"));
var AccordionSummary_1 = __importDefault(require("@material-ui/core/AccordionSummary"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: '100%',
            background: 'transparent',
            outline: 'none',
            boxShadow: 'none',
            '::before': {
                background: 'transparent'
            }
        },
        accordionSummary: {
            minHeight: 0,
            margin: 0,
            height: theme.spacing(2.1),
            padding: '8px 0px',
            color: '#2F80ED'
        },
        expandSummary: {
            position: 'relative',
            top: -11
        },
        accordionDetail: {
            padding: 0,
            position: 'relative',
            bottom: 40
        },
        spaceLeft: {
            marginLeft: theme.spacing(1)
        },
        textColor: {
            color: theme.palette.grey[800]
        },
        scheduleLabel: {
            marginRight: 12
        },
        tag: {
            padding: '3px 0px',
            width: '34px'
        }
    });
});
var Accordion = function (props) {
    var schedule = props.schedule, sizes = props.sizes, marginBottom = props.marginBottom, marginTop = props.marginTop, labelVariant = props.labelVariant;
    var classes = useStyles();
    return (React.createElement(Accordion_1.default, { square: true, className: classes.root },
        React.createElement(AccordionSummary_1.default, { classes: {
                root: classes.accordionSummary,
                expanded: classes.expandSummary
            }, expandIcon: React.createElement(core_1.Box, { color: "#2F80ED" },
                React.createElement(Icons_1.default, { iconName: "ArrowBottomIcon", size: "small" })), "aria-controls": "panel1a-content", id: "panel1a-header" },
            React.createElement(core_1.Box, null,
                React.createElement(Typography_1.default, { className: classes.textColor + " " + classes.scheduleLabel, variant: labelVariant ? labelVariant : 'caption', children: "Schedule:" }),
                React.createElement(Typography_1.default, { variant: labelVariant ? labelVariant : 'caption', children: "View Schedule" }))),
        React.createElement(AccordionDetails_1.default, { className: classes.accordionDetail },
            React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" }, schedule.map(function (days, index) {
                return (React.createElement(core_1.Box, { key: "scheduleDay-" + index, marginTop: index === 0 ? marginTop : 0, marginBottom: index === schedule.length - 1 ? -5 : marginBottom },
                    React.createElement(Tags_1.default, { customVariant: "secondary", sizes: sizes ? sizes : 'xs', label: days.day, className: classes.tag }),
                    React.createElement(Typography_1.default, { className: classes.spaceLeft, variant: labelVariant ? labelVariant : 'caption', children: days.startTime + " - " + days.endTime })));
            })))));
};
exports.default = Accordion;
//# sourceMappingURL=AccordionScheduleDay.js.map