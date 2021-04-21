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
var Popper_1 = __importDefault(require("@material-ui/core/Popper"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("../button/Button"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var Input_1 = __importDefault(require("../input/Input"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            background: theme.palette.common.white,
            boxShadow: theme.shadows[1],
            borderRadius: theme.spacing(1),
            position: 'relative'
        },
        labelColor: {
            color: theme.palette.grey[800]
        },
        address: {
            marginRight: theme.spacing(5)
        },
        phone: {
            marginRight: theme.spacing(6)
        },
        postalCode: {
            marginRight: theme.spacing(2.5)
        },
        contactPerson: {
            marginRight: theme.spacing(0.7)
        },
        textArea: __assign(__assign({}, theme.typography.caption), { marginRight: theme.spacing(2) }),
        closeIcon: {
            position: 'absolute',
            right: 0
        },
        arow: {
            position: 'absolute',
            right: '-12px',
            top: '47%',
            color: theme.palette.common.white
        }
    });
});
var CardVisitDetail = function (props) {
    var classes = useStyles();
    var children = props.children, details = props.details, onClickDetail = props.onClickDetail, onClickJobId = props.onClickJobId, rest = __rest(props, ["children", "details", "onClickDetail", "onClickJobId"]);
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var handleClick = function (event) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popper' : undefined;
    return (React.createElement(core_1.Box, null,
        React.createElement(core_1.Box, { "aria-describedby": id, onClick: handleClick }, children),
        React.createElement(Popper_1.default, __assign({}, rest, { className: classes.root, id: id, open: open, anchorEl: anchorEl, placement: "left", disablePortal: false }),
            React.createElement(core_1.Box, { className: classes.arow },
                React.createElement(Icons_1.default, { iconName: "ArrowFillRightIcon", size: "small" })),
            React.createElement(core_1.IconButton, { onClick: handleClick, className: classes.closeIcon },
                React.createElement(Icons_1.default, { iconName: "CloseIcon", size: "small" })),
            React.createElement(core_1.Box, { padding: 2 },
                React.createElement(core_1.Box, { borderLeft: "3px solid #37B24D", paddingLeft: 2, marginBottom: 2 },
                    React.createElement(core_1.Box, { marginBottom: 2 },
                        React.createElement(Typography_1.default, { bodyVariants: "smBold", children: details ? details.name : 'No Name' }),
                        React.createElement(core_1.Grid, { container: true, direction: "row" },
                            React.createElement(core_1.Box, { marginRight: 3 },
                                React.createElement(Typography_1.default, { variant: "caption", children: "Job ID:" }),
                                React.createElement(core_1.Link, { component: "button", onClick: function () { return onClickJobId(details.id); }, variant: "caption" },
                                    "#",
                                    details ? details.jobId : 0)),
                            React.createElement(Tags_1.default, { customVariant: "secondary", sizes: "small", label: details ? details.addressCode : 'Empty' }))),
                    React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "baseline" },
                        React.createElement(core_1.Box, null,
                            React.createElement(Typography_1.default, { className: classes.labelColor + " " + classes.address, variant: "caption", children: "Address:" }),
                            React.createElement(Typography_1.default, { variant: "caption", children: details ? details.address : 'No Address' })),
                        React.createElement(core_1.Box, null,
                            React.createElement(Typography_1.default, { className: classes.labelColor + " " + classes.phone, variant: "caption", children: "Phone:" }),
                            React.createElement(Typography_1.default, { variant: "caption", children: "+65 " + (details ? details.phone : '-') })),
                        React.createElement(core_1.Box, null,
                            React.createElement(Typography_1.default, { className: classes.labelColor + " " + classes.postalCode, variant: "caption", children: "Postal Code:" }),
                            React.createElement(Typography_1.default, { variant: "caption", children: details ? details.postalCode : 0 })),
                        React.createElement(core_1.Box, null,
                            React.createElement(Typography_1.default, { className: classes.labelColor + " " + classes.contactPerson, variant: "caption", children: "Contact Person:" }),
                            React.createElement(Typography_1.default, { variant: "caption", children: details ? details.contact : 'No Contact' })))),
                React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
                    React.createElement(Input_1.default, { multiline: true, rows: 4, readOnly: true, customSize: "small", className: classes.textArea, value: details ? details.note : 'Note Empty' }),
                    React.createElement(Button_1.default, { onClick: function () { return onClickDetail(details.id); }, customSize: "xs", variants: "ghost", children: "View Detail" }))))));
};
exports.default = CardVisitDetail;
//# sourceMappingURL=CardVisitDetail.js.map