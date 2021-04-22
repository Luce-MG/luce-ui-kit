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
var Button_1 = __importDefault(require("../button/Button"));
var Checkbox_1 = __importDefault(require("../controls/Checkbox"));
var Dialog_1 = __importDefault(require("./Dialog"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        actionBtn: {
            width: '50%'
        }
    });
});
var DialogAddNewDays = function (props) {
    var children = props.children, title = props.title, _a = props.onCancel, onCancel = _a === void 0 ? function () { } : _a, _b = props.onConfirm, onConfirm = _b === void 0 ? function () { } : _b, onChange = props.onChange, days = props.days, open = props.open;
    var classes = useStyles();
    return (React.createElement(Dialog_1.default, { open: open, title: title, onCancel: function () { return onCancel(); }, children: children, content: React.createElement(core_1.Box, null,
            React.createElement(core_1.DialogContentText, { variant: "subtitle1" }, "Choose Day:"),
            React.createElement(core_1.Box, { marginLeft: 0.4 },
                React.createElement(core_1.FormControl, null, days
                    ? days.map(function (day, index) {
                        return (React.createElement(core_1.Box, { key: "day-" + index },
                            React.createElement(Checkbox_1.default, { label: day.label, name: day.name, value: day.name, disabled: day.disabled, onChange: function (event) { return onChange(event, index); } })));
                    })
                    : 'No Days'))), action: React.createElement(React.Fragment, null,
            React.createElement(Button_1.default, { onClick: function () { return onCancel(); }, variants: "ghost", customSize: "medium", children: "Cancel", className: classes.actionBtn }),
            React.createElement(Button_1.default, { onClick: function () { return onConfirm(); }, variants: "cta", customSize: "medium", children: "Confirm", size: "medium", className: classes.actionBtn })) }));
};
exports.default = DialogAddNewDays;
//# sourceMappingURL=DialogAddNewDays.js.map