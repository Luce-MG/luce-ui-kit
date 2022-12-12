"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomDrawer = void 0;
var styles_1 = require("@material-ui/core/styles");
var react_1 = __importDefault(require("react"));
var Divider_1 = __importDefault(require("../atom/Divider"));
var Box_1 = __importDefault(require("../base/Box"));
var SwipeableDrawer_1 = require("../base/SwipeableDrawer");
var Typography_1 = __importDefault(require("../base/Typography"));
var useStyles = styles_1.makeStyles({
    root: {
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '16px 16px 0px 0px'
    },
    divider: {
        maxWidth: '42px',
        height: '4px',
        backgroundColor: '#7A98AA',
        margin: 'auto',
        marginBottom: '24px'
    }
});
var BottomDrawer = function (props) {
    var title = props.title, _a = props.open, open = _a === void 0 ? false : _a, style = props.style, onOpen = props.onOpen, onClose = props.onClose, children = props.children;
    var classes = useStyles();
    return (react_1.default.createElement(SwipeableDrawer_1.SwipeableDrawer, { anchor: "bottom", open: open, onClose: onClose, onOpen: onOpen, classes: { paper: classes.root }, style: style },
        react_1.default.createElement(Box_1.default, null,
            react_1.default.createElement(Divider_1.default, { className: classes.divider }),
            title && react_1.default.createElement(Typography_1.default, null, title),
            children)));
};
exports.BottomDrawer = BottomDrawer;
//# sourceMappingURL=BottomDrawer.js.map