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
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("../base/Box"));
var Card_1 = require("../base/Card");
var Grid_1 = __importDefault(require("../base/Grid"));
var Typography_1 = __importDefault(require("../base/Typography"));
var IconButton_1 = __importDefault(require("../button/IconButton"));
var Input_1 = __importDefault(require("../input/Input"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            padding: theme.spacing(2),
            borderRadius: 8,
            width: 404
        },
        header: {
            padding: 0,
            marginBottom: theme.spacing(1)
        },
        content: {
            padding: 0,
            marginBottom: theme.spacing(1)
        },
        actions: {
            padding: 0,
            color: theme.palette.grey[800]
        },
        btnIconTrash: {
            marginLeft: theme.spacing(1)
        },
        displayHide: {
            display: 'none'
        }
    });
});
var NoteClientCard = function (props) {
    var note = props.note, isEdit = props.isEdit, onDelete = props.onDelete, onEdit = props.onEdit, onCancel = props.onCancel, onSave = props.onSave, rest = __rest(props, ["note", "isEdit", "onDelete", "onEdit", "onCancel", "onSave"]);
    var classes = useStyles();
    return (React.createElement(Card_1.Card, __assign({ classes: { root: classes.root } }, rest),
        React.createElement(Card_1.CardHeader, { className: classes.header, headTitle: React.createElement(Typography_1.default, { bodyVariants: "xxsMedium", children: "By " + note.author }) }),
        React.createElement(Card_1.CardContent, { className: classes.content },
            React.createElement(Typography_1.default, { className: isEdit ? classes.displayHide : '', variant: "caption", children: note.description }),
            React.createElement(Input_1.default, { fullWidth: true, className: isEdit ? '' : classes.displayHide, multiline: true, value: note.description })),
        React.createElement(Card_1.CardActions, { className: classes.actions },
            React.createElement(Grid_1.default, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
                React.createElement(Typography_1.default, { variant: "caption", children: note.date }),
                React.createElement(Box_1.default, { display: isEdit ? 'none' : 'block' },
                    React.createElement(IconButton_1.default, { onClick: function () { return onEdit(note.id); }, iconName: "EditsIcon", size: "small", iconSize: "small" }),
                    React.createElement(IconButton_1.default, { onClick: function () { return onDelete(note.id); }, className: classes.btnIconTrash, iconName: "TrashIcon", size: "small", iconSize: "small" })),
                React.createElement(Box_1.default, { display: isEdit ? 'block' : 'none' },
                    React.createElement(IconButton_1.default, { onClick: function () { return onSave(note.id); }, iconName: "TickIcon", size: "small", iconSize: "small" }),
                    React.createElement(IconButton_1.default, { onClick: function () { return onCancel(note.id); }, className: classes.btnIconTrash, iconName: "CloseIcon", size: "small", iconSize: "small" }))))));
};
exports.default = NoteClientCard;
//# sourceMappingURL=CardNoteClient.js.map