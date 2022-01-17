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
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var IconButton_1 = __importDefault(require("../button/IconButton"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        icon: {
            transform: 'rotate(180deg)',
            color: theme.palette.common.black
        }
    });
});
var HistoryBack = function (props) {
    var classes = useStyles();
    var _a = props.goBack, goBack = _a === void 0 ? function () { } : _a, label = props.label, buttonIconSize = props.buttonIconSize, buttonSize = props.buttonSize, variant = props.variant, space = props.space;
    return (React.createElement(Box_1.default, { display: "flex", alignItems: "center" },
        React.createElement(Box_1.default, { marginRight: space ? space : 2 },
            React.createElement(IconButton_1.default, { onClick: function () { return goBack(); }, className: classes.icon, iconSize: buttonIconSize ? buttonIconSize : 'large', size: buttonSize ? buttonSize : 'small', iconName: "ArrowRightLongIcon" })),
        React.createElement(Typography_1.default, { children: label ? label : 'Label', variant: variant ? variant : 'h4' })));
};
exports.default = HistoryBack;
//# sourceMappingURL=HistoryBack.js.map