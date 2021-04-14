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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var getLayoutSize = function (customLayout, duration) {
    if (customLayout === 'vertical') {
        var Vertical = {
            width: 101,
            height: 73 * duration
        };
        return Vertical;
    }
    var Horizontal = {
        width: 118 * duration,
        height: 81
    };
    return Horizontal;
};
var getPackageSize = function (customLayout, duration) {
    if (customLayout === 'vertical') {
        var Vertical = {
            paddingBottom: 6,
            paddingRight: 6,
            width: 101
        };
        return Vertical;
    }
    var Horizontal = {
        paddingBottom: 8,
        paddingRight: 8,
        width: 118 * duration
    };
    return Horizontal;
};
var getPackageStyle = function (cardType) {
    if (cardType === 'officeCleaningJobs') {
        var officeCleaningStyle = {
            color: '#2F80ED',
            background: '#C3E5F9'
        };
        return officeCleaningStyle;
    }
    var homeCleaningJobsStyle = {
        color: '#219653',
        background: '#DFFAED'
    };
    return homeCleaningJobsStyle;
};
var getCardContent = function (customLayout) {
    if (customLayout === 'vertical') {
        var Vertical = {
            paddingLeft: 4,
            paddingTop: 6,
            marginRight: 6
        };
        return Vertical;
    }
    var Horizontal = {
        paddingLeft: 7.11,
        paddingTop: 8,
        marginRight: 7.89
    };
    return Horizontal;
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        recommend: function (props) { return (__assign({ background: '#EDF1F4', color: theme.palette.primary.main, borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', '& .MuiCardContent-root:last-child': {
                padding: 0
            } }, getLayoutSize(props.customLayout, props.duration))); },
        medicalLeave: function (props) { return (__assign({ background: 'rgba(255, 230, 230, 0.45)', color: '#FF4444', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', '& .MuiCardContent-root:last-child': {
                padding: 0
            } }, getLayoutSize(props.customLayout, props.duration))); },
        annualLeave: function (props) { return (__assign({ background: 'rgba(187, 107, 217, 0.3)', color: '#9B51E0', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', '& .MuiCardContent-root:last-child': {
                padding: 0
            } }, getLayoutSize(props.customLayout, props.duration))); },
        homeCleaningJobs: function (props) { return (__assign({ background: '#DFFAED', color: '#222222', borderRadius: '4px 4px 0 0' }, getLayoutSize(props.customLayout, props.duration))); },
        officeCleaningJobs: function (props) { return (__assign({ background: '#C3E5F9', color: '#222222', borderRadius: '4px 4px 0 0' }, getLayoutSize(props.customLayout, props.duration))); },
        cardContentVists: function (props) { return (__assign(__assign({}, getCardContent(props.customLayout)), { paddingBottom: 0, paddingRight: 0 })); },
        cardPackage: function (props) { return (__assign(__assign({ textAlign: 'right', borderRadius: '0px 0px 4px 4px' }, getPackageStyle(props.cardType)), getPackageSize(props.customLayout, props.duration))); },
        boxPackage: {
            position: 'relative',
            bottom: 0
        }
    });
});
var nonJobCards = '';
var CalendarCards = function (props) {
    var classes = useStyles(props);
    var data = props.data, duration = props.duration, tags = props.tags, cardType = props.cardType, customLayout = props.customLayout, children = props.children, rest = __rest(props, ["data", "duration", "tags", "cardType", "customLayout", "children"]);
    var getStyle = function () {
        if (cardType === 'Recommended') {
            nonJobCards = cardType;
            return classes.recommend;
        }
        if (cardType === 'Annual Leave') {
            nonJobCards = cardType;
            return classes.annualLeave;
        }
        if (cardType === 'Medical Leave') {
            nonJobCards = cardType;
            return classes.medicalLeave;
        }
        if (cardType === 'officeCleaningJobs') {
            return classes.officeCleaningJobs;
        }
        return classes.homeCleaningJobs;
    };
    if (cardType === 'officeCleaningJobs' || cardType === 'homeCleaningJobs') {
        return (React.createElement(core_1.Box, { className: getStyle(), alignItems: "flex-end" },
            React.createElement(core_1.Card, __assign({ className: getStyle() }, rest),
                React.createElement(core_1.CardContent, { className: classes.cardContentVists },
                    React.createElement(core_1.Box, { display: "flex", justifyContent: "space-between" },
                        React.createElement(Typography_1.default, { bodyVariants: "smBold" }, props.data.code),
                        tags.map(function (tag, index) { return (React.createElement(core_1.Box, { key: "tag-" + index },
                            React.createElement(Tags_1.default, { label: tag.label, customVariant: tag.variant, sizes: "xs" }))); })),
                    React.createElement(Typography_1.default, { bodyVariants: "xsMedium" }, props.data.clientName),
                    React.createElement(Typography_1.default, { variant: "caption" }, props.data.address))),
            React.createElement(core_1.Box, { className: classes.boxPackage },
                React.createElement(Typography_1.default, { bodyVariants: "xsMedium", className: classes.cardPackage }, props.data.package))));
    }
    else {
        return (React.createElement(core_1.Card, __assign({ className: getStyle() }, rest),
            React.createElement(core_1.CardContent, null,
                React.createElement(Typography_1.default, { variant: "subtitle2" }, nonJobCards))));
    }
};
exports.default = CalendarCards;
//# sourceMappingURL=VisitCard.js.map