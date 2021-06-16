"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("./Button"));
var useStyles = ThemeProvider_1.makeStyles({
    button: {
        fontSize: '11px',
        fontWeight: 'initial',
        minWidth: '5px',
        padding: '0 3px'
    }
});
var PackageJobVisitLink = function (props) {
    var classes = useStyles();
    var jobId = props.jobId, packageId = props.packageId, visitId = props.visitId, onClickPackage = props.onClickPackage, onClickJob = props.onClickJob, onClickVisit = props.onClickVisit;
    function buttonsList() {
        var list = [];
        var button = (react_1.default.createElement(Button_1.default, { className: classes.button, customSize: "xs", onClick: function () { } }, "button"));
        if (packageId && onClickPackage) {
            list.push(react_1.default.cloneElement(button, {
                onClick: function (e) { return onClickPackage(e, packageId); }
            }, "P" + packageId));
        }
        if (jobId && onClickJob) {
            list.push(react_1.default.cloneElement(button, { onClick: function (e) { return onClickJob(e, jobId); } }, "J" + jobId));
        }
        if (visitId && onClickVisit) {
            list.push(react_1.default.cloneElement(button, { onClick: function (e) { return onClickVisit(e, visitId); } }, "V" + visitId));
        }
        return list;
    }
    var buttons = buttonsList();
    return (react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center" }, buttons.map(function (button, index) { return (react_1.default.createElement(react_1.default.Fragment, null,
        !!index && react_1.default.createElement(Typography_1.default, null, "-"),
        button)); })));
};
exports.default = PackageJobVisitLink;
//# sourceMappingURL=PackageJobVisitLink.js.map