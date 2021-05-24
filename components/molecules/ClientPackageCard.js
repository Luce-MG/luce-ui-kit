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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var getPackageTag = function (status) {
    var color = {
        background: '#27AE60'
    };
    if (status === 'Archived') {
        color = {
            background: '#F2994A'
        };
    }
    return color;
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        card: {
            '& .MuiCardContent-root:last-child': {
                paddingBottom: '8px'
            }
        },
        cardBody: {
            width: 603,
            padding: '9px 0 8px 0'
        },
        divider: {
            color: '#ECECEC',
            margin: '9px 0 16px 0'
        },
        packageID: {
            padding: '0 4px 0 16px'
        },
        tableHeader: {
            padding: '0 0 8px 0'
        },
        jobCol: {
            padding: '0 0 8px 19px',
            width: 63
        },
        jobNoCol: {
            padding: '0 0 8px 26px',
            width: 63
        },
        assignCol: {
            padding: 0,
            width: 218
        },
        scheduleTags: {
            '& .MuiChip-label': {
                padding: 0
            },
            color: theme.palette.common.white,
            fontSize: '0.5rem',
            background: '#52798F',
            height: 18,
            width: 24,
            borderRadius: '2px',
            textAlign: 'center',
            marginRight: 5
        },
        packageTags: function (props) { return (__assign({ '& .MuiChip-label': {
                padding: 0
            }, color: theme.palette.common.white, borderRadius: '2px', height: 'auto', fontWeight: 700, fontSize: '0.5rem', lineHeight: '1.5em', alignItems: 'center', padding: '3px 6px', margin: '0 0 0 15px' }, getPackageTag(props.status))); },
        linkStyle: {
            color: '#3384FD',
            margin: '0 16px 0 0',
            textAlign: 'right'
        }
    });
});
var ClientPackageCards = function (props) {
    var data = props.data, id = props.id, status = props.status, invisible = props.invisible, pageLink = props.pageLink, children = props.children, rest = __rest(props, ["data", "id", "status", "invisible", "pageLink", "children"]);
    var classes = useStyles(props);
    return (React.createElement(core_1.Card, __assign({ className: classes.card }, rest),
        React.createElement(core_1.CardContent, { className: classes.cardBody },
            React.createElement(core_1.Box, { display: "flex", justifyContent: "space-between" },
                React.createElement(core_1.Box, null,
                    React.createElement(core_1.Badge, { color: "error", variant: "dot", invisible: invisible },
                        React.createElement(Typography_1.default, { className: classes.packageID, bodyVariants: "xsMedium" }, "Package #" + props.id)),
                    React.createElement(core_1.Chip, { className: classes.packageTags, label: props.status })),
                React.createElement(core_1.Box, null,
                    React.createElement(core_1.Link, { underline: "always", href: pageLink },
                        React.createElement(Typography_1.default, { className: classes.linkStyle, variant: "overline" }, "View Details")))),
            React.createElement(core_1.Divider, { className: classes.divider }),
            React.createElement(core_1.Box, { display: "flex", className: classes.tableHeader },
                React.createElement(Typography_1.default, { className: classes.jobCol, bodyVariants: "xsMedium" }, "Job"),
                React.createElement(Typography_1.default, { className: classes.assignCol, bodyVariants: "xsMedium" }, "Assigned to"),
                React.createElement(Typography_1.default, { bodyVariants: "xsMedium" }, "Job Schedule")),
            data.map(function (card, index) { return (React.createElement(core_1.Box, { key: index, display: "flex" },
                React.createElement(core_1.Box, { className: classes.jobNoCol },
                    React.createElement(Typography_1.default, { variant: "overline" }, index + 1)),
                React.createElement(core_1.Box, { className: classes.assignCol },
                    React.createElement(Typography_1.default, { variant: "overline" }, card.assigned)),
                React.createElement(core_1.Box, { display: "flex", justifyContent: "space-btween" }, card.schedule.map(function (sessionDay, index) { return (React.createElement(core_1.Box, { key: index },
                    React.createElement(core_1.Chip, { label: sessionDay, className: classes.scheduleTags }))); })))); }))));
};
exports.default = ClientPackageCards;
//# sourceMappingURL=ClientPackageCard.js.map