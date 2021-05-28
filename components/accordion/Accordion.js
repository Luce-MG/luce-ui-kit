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
exports.AccordionActions = exports.AccordionDetails = void 0;
var core_1 = require("@material-ui/core");
var Accordion_1 = __importDefault(require("@material-ui/core/Accordion"));
var AccordionActions_1 = __importDefault(require("@material-ui/core/AccordionActions"));
var AccordionDetails_1 = __importDefault(require("@material-ui/core/AccordionDetails"));
var AccordionSummary_1 = __importDefault(require("@material-ui/core/AccordionSummary"));
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("../base/Box"));
var Color_1 = __importDefault(require("../base/Color"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        root: {
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0.5),
            background: theme.palette.common.white,
            width: '100%',
            borderRadius: '8px 8px 0px 0px'
        },
        expandIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            background: Color_1.default.primary[400],
            height: 24,
            width: 24
        }
    });
});
exports.AccordionDetails = AccordionDetails_1.default;
exports.AccordionActions = AccordionActions_1.default;
var Accordion = function (props) {
    var title = props.title, content = props.content, rest = __rest(props, ["title", "content"]);
    var summary = __rest(props, []);
    var classes = useStyles();
    return (React.createElement(Accordion_1.default, __assign({ square: true, className: classes.root }, rest),
        React.createElement(AccordionSummary_1.default, __assign({ expandIcon: React.createElement(Box_1.default, { className: classes.expandIcon },
                React.createElement(Icons_1.default, { iconName: "ArrowBottomIcon", size: "small" })) }, summary),
            React.createElement(Typography_1.default, { bodyVariants: "mdBold", children: title ? title : 'Accordion' })),
        content));
};
exports.default = Accordion;
//# sourceMappingURL=Accordion.js.map