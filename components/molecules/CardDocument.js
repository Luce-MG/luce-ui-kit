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
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            background: '#EDF1F4',
            width: 237,
            borderRadius: 4,
            border: '1px solid #EDF1F4',
            position: 'relative'
        },
        deleteIcon: {
            display: 'flex',
            justifyContent: 'flex-end',
            right: 0,
            position: 'absolute',
            zIndex: 2,
            color: '#32607A'
        },
        cardIconDoc: {
            padding: theme.spacing(2),
            background: theme.palette.common.white,
            borderRadius: 50,
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
            filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.03))',
            color: theme.palette.primary.main
        },
        hideElement: {
            display: 'none'
        }
    });
});
var DocumentCard = function (props) {
    var author = props.author, hideIdAuthor = props.hideIdAuthor, mandatory = props.mandatory, onClick = props.onClick, onDelete = props.onDelete;
    var classes = useStyles();
    return (React.createElement(core_1.Card, { classes: { root: classes.root }, elevation: 0 },
        React.createElement(core_1.Box, { className: classes.deleteIcon },
            React.createElement(core_1.IconButton, { size: "medium", onClick: function () { return (author ? onDelete(author.id) : ''); } },
                React.createElement(Icons_1.default, { size: "small", iconName: "TrashIcon" }))),
        React.createElement(core_1.CardActionArea, { onClick: function () { return (author ? onClick(author.id) : ''); } },
            React.createElement(core_1.Box, { display: "flex", justifyContent: "center", alignItems: "center" },
                React.createElement(core_1.Box, { className: classes.cardIconDoc },
                    React.createElement(Icons_1.default, { size: "medium", iconName: mandatory ? 'PlusIcon' : 'DocumentIcon' }))),
            React.createElement(core_1.Box, { bgcolor: "#fff", padding: 1 },
                React.createElement(core_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center" },
                    React.createElement(Typography_1.default, { noWrap: true, children: (author ? author.name : 'Doc Name') + " " + (mandatory ? '(Mandatory)' : ''), variant: "subtitle2" }),
                    React.createElement(Typography_1.default, { className: hideIdAuthor ? classes.hideElement : '', children: "#" + (author ? author.id : 'ID'), variant: "caption" })),
                React.createElement(core_1.Box, { marginTop: 1, display: "flex", justifyContent: "space-between", alignItems: "center" },
                    React.createElement(Typography_1.default, { children: "Date: " + (author ? author.date : 'Missing'), variant: "caption" }),
                    React.createElement(Typography_1.default, { className: hideIdAuthor ? classes.hideElement : '', children: "By - " + (author ? author.author : 'Anonym'), variant: "caption" }))))));
};
exports.default = DocumentCard;
//# sourceMappingURL=CardDocument.js.map