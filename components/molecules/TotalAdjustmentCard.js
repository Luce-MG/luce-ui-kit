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
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        card: {
            /* Color / Base 2 */
            background: '#32C27D',
            color: theme.palette.common.white,
            minWidth: theme.spacing(20),
            maxWidth: '100%',
            borderRadius: 8,
            display: 'grid',
            gridGap: theme.spacing(0.5),
            padding: theme.spacing(2) + "px " + theme.spacing(3) + "px"
        }
    });
});
var TotalAdjustmentCard = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Total' : _a, _b = props.amount, amount = _b === void 0 ? 0 : _b;
    var classes = useStyles();
    return (React.createElement(Card_1.default, { elevation: 0, classes: { root: classes.card } },
        React.createElement(Typography_1.default, { bodyVariants: "xsMedium", children: label }),
        React.createElement(Typography_1.default, { variant: "h4", children: '$' + amount })));
};
exports.default = TotalAdjustmentCard;
//# sourceMappingURL=TotalAdjustmentCard.js.map