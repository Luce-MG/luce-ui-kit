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
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        card: {
            width: theme.spacing(30),
            maxWidth: '100%',
            borderRadius: 8,
            padding: theme.spacing(2),
            background: colorManipulator_1.fade(theme.palette.primary.main, 0.03)
        },
        cardContent: {
            marginTop: theme.spacing(2),
            display: 'grid',
            gridTemplateColumns: 'min-content min-content min-content',
            gridColumnGap: theme.spacing(3),
            gridRowGap: theme.spacing(0.5)
        },
        cardContentLabel: {
            color: colorManipulator_1.fade(theme.palette.primary.main, 0.7)
        },
        cardContentNumber: {
            color: theme.palette.primary.main
        }
    });
});
var LeaveQuotaCard = function (props) {
    var _a = props.type, type = _a === void 0 ? 'annual' : _a, _b = props.accrued, accrued = _b === void 0 ? 0 : _b, _c = props.taken, taken = _c === void 0 ? 0 : _c, _d = props.remaining, remaining = _d === void 0 ? 0 : _d;
    var title;
    switch (type) {
        case 'medical':
            title = 'Medical Leave (in hours)';
            break;
        case 'nonpaid':
            title = 'Non Paid Leave (in hours)';
            break;
        default:
            title = 'Annual Leave (in hours)';
    }
    var classes = useStyles();
    return (React.createElement(Card_1.default, { elevation: 0, classes: { root: classes.card } },
        React.createElement(Typography_1.default, { bodyVariants: "smBold", children: title }),
        React.createElement(Box_1.default, { className: classes.cardContent },
            React.createElement(Typography_1.default, { className: classes.cardContentLabel, bodyVariants: "xxsMedium", children: "Accrued" }),
            React.createElement(Typography_1.default, { className: classes.cardContentLabel, bodyVariants: "xxsMedium", children: "Taken" }),
            React.createElement(Typography_1.default, { className: classes.cardContentLabel, bodyVariants: "xxsMedium", children: "Remaining" }),
            React.createElement(Typography_1.default, { className: classes.cardContentNumber, variant: "h5", children: accrued }),
            React.createElement(Typography_1.default, { className: classes.cardContentNumber, variant: "h5", children: taken }),
            React.createElement(Typography_1.default, { className: classes.cardContentNumber, variant: "h5", children: remaining }))));
};
exports.default = LeaveQuotaCard;
//# sourceMappingURL=LeaveQuotaCard.js.map