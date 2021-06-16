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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("../button/Button"));
var PackageJobVisitLink_1 = __importDefault(require("../button/PackageJobVisitLink"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var TextareaAutosize_1 = __importDefault(require("../input/TextareaAutosize"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
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
        textArea: __assign(__assign({}, theme.typography.caption), { marginRight: theme.spacing(2), width: 200 }),
        closeIcon: {
            position: 'absolute',
            right: 0
        },
        arrow: {
            position: 'absolute',
            right: '-12px',
            top: '47%',
            color: theme.palette.common.white
        },
        linkStyle: __assign(__assign({}, theme.typography.caption), { color: theme.palette.info.main, textDecoration: 'underline', cursor: 'pointer' })
    });
});
var PackageJobVisitDetail = function (props) {
    var classes = useStyles();
    var detailsValues = props.detailsValues, onClose = props.onClose, packageJobVisit = props.packageJobVisit, _a = props.packageJobVisit, visitId = _a.visitId, onClickVisit = _a.onClickVisit;
    return (React.createElement(Box_1.default, null,
        React.createElement(Box_1.default, { className: classes.arrow },
            React.createElement(Icons_1.default, { iconName: "ArrowFillRightIcon", size: "small" })),
        React.createElement(core_1.IconButton, { onClick: function (event) { return onClose(event); }, className: classes.closeIcon },
            React.createElement(Icons_1.default, { iconName: "CloseIcon", size: "small" })),
        React.createElement(Box_1.default, { padding: 2 },
            React.createElement(Box_1.default, { borderLeft: "3px solid #37B24D", paddingLeft: 2, marginBottom: 2 },
                React.createElement(Box_1.default, { marginBottom: 2 },
                    React.createElement(Typography_1.default, { bodyVariants: "smBold", children: detailsValues ? detailsValues.name : 'No Name' }),
                    React.createElement(core_1.Grid, { container: true, direction: "row" },
                        React.createElement(Box_1.default, { marginRight: 3, display: "flex", alignItems: "center", gridGap: 8 },
                            React.createElement(PackageJobVisitLink_1.default, __assign({}, packageJobVisit))),
                        React.createElement(Tags_1.default, { customVariant: "secondary", sizes: "small", label: detailsValues ? detailsValues.addressCode : 'Empty' }))),
                React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "baseline" },
                    React.createElement(Box_1.default, null,
                        React.createElement(Typography_1.default, { className: classes.labelColor + " " + classes.address, variant: "caption", children: "Address:" }),
                        React.createElement(Typography_1.default, { variant: "caption", children: detailsValues ? detailsValues.address : 'No Address' })),
                    React.createElement(Box_1.default, null,
                        React.createElement(Typography_1.default, { className: classes.labelColor + " " + classes.phone, variant: "caption", children: "Phone:" }),
                        React.createElement(Typography_1.default, { variant: "caption", children: detailsValues ? detailsValues.phone : '-' })),
                    React.createElement(Box_1.default, null,
                        React.createElement(Typography_1.default, { className: classes.labelColor + " " + classes.postalCode, variant: "caption", children: "Postal Code:" }),
                        React.createElement(Typography_1.default, { variant: "caption", children: detailsValues ? detailsValues.postalCode : 0 })),
                    React.createElement(Box_1.default, null,
                        React.createElement(Typography_1.default, { className: classes.labelColor + " " + classes.contactPerson, variant: "caption", children: "Contact Person:" }),
                        React.createElement(Typography_1.default, { variant: "caption", children: detailsValues ? detailsValues.contact : 'No Contact' })))),
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
                React.createElement(TextareaAutosize_1.default, { rows: 4, readOnly: true, className: classes.textArea, value: detailsValues ? detailsValues.note : 'Note Empty' }),
                visitId && onClickVisit && (React.createElement(Button_1.default, { onClick: function (e) { return onClickVisit(e, visitId); }, customSize: "xs", variants: "ghost", children: "View Detail" }))))));
};
exports.default = PackageJobVisitDetail;
//# sourceMappingURL=PackageJobVisitDetail.js.map