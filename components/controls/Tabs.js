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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tab_1 = __importDefault(require("@material-ui/core/Tab"));
var Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var tabsStyle = {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    border: '1px #D3DFE6 solid',
    padding: '8px 20px',
    maxWidth: '100%',
    color: '#1A4D6A'
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        tabs: {
            height: '40px'
        },
        first: __assign({ borderRadius: '4px 0px 0px 4px' }, tabsStyle),
        last: __assign({ borderRadius: '0px 4px 4px 0px' }, tabsStyle),
        tab: __assign({}, tabsStyle),
        selected: {
            background: theme.palette.primary.main,
            color: theme.palette.common.white
        },
        indicator: {
            backgroundColor: 'transparent'
        }
    });
});
var Tabs = function (props) {
    var classes = useStyles();
    var tabs = props.tabs;
    var _a = React.useState(0), selectedTab = _a[0], setSelectedTab = _a[1];
    var handleChange = function (e, newValue) {
        setSelectedTab(newValue);
    };
    var getTabStyle = function (index) {
        var style = { selected: classes.selected };
        if (index === 0) {
            return __assign(__assign({}, style), { root: classes.first });
        }
        else if (index === tabs.length - 1) {
            return __assign(__assign({}, style), { root: classes.last });
        }
        else {
            return __assign(__assign({}, style), { root: classes.tab });
        }
    };
    return (React.createElement("div", null,
        React.createElement(Tabs_1.default, { className: classes.tabs, classes: { indicator: classes.indicator }, value: selectedTab, onChange: handleChange }, tabs.map(function (tab, index) { return (React.createElement(Tab_1.default, { key: "tab-" + index, classes: getTabStyle(index), label: tab })); }))));
};
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map