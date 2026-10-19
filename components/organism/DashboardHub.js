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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardHub = void 0;
var ButtonBase_1 = __importDefault(require("@material-ui/core/ButtonBase"));
var InputBase_1 = __importDefault(require("@material-ui/core/InputBase"));
var NativeSelect_1 = __importDefault(require("@material-ui/core/NativeSelect"));
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importStar(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var DashboardReportCard_1 = __importDefault(require("../molecules/DashboardReportCard"));
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    page: {
        padding: theme.spacing(5, 6)
    },
    title: {
        color: dashboard_1.DASHBOARD_COLORS.heading
    },
    subtitle: {
        color: dashboard_1.DASHBOARD_COLORS.subtle,
        marginTop: theme.spacing(0.5)
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        marginTop: theme.spacing(3)
    },
    control: {
        height: 40,
        padding: theme.spacing(0, 1.5),
        border: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        borderRadius: 6,
        background: theme.palette.common.white,
        fontSize: 14
    },
    search: {
        width: 480,
        maxWidth: '100%'
    },
    searchIcon: {
        flexShrink: 0,
        color: dashboard_1.DASHBOARD_COLORS.subtle,
        marginRight: theme.spacing(1)
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(1),
        marginTop: theme.spacing(2.5)
    },
    chip: {
        height: 32,
        padding: theme.spacing(0, 1.75),
        border: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        borderRadius: 16,
        background: theme.palette.common.white,
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.heading
    },
    chipActive: {
        background: dashboard_1.DASHBOARD_COLORS.accent,
        borderColor: dashboard_1.DASHBOARD_COLORS.accent,
        color: theme.palette.common.white
    },
    chipCount: {
        marginLeft: theme.spacing(0.75),
        fontSize: 12,
        opacity: 0.7
    },
    section: {
        marginTop: theme.spacing(4)
    },
    sectionTitle: {
        marginBottom: theme.spacing(1.5),
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: dashboard_1.DASHBOARD_COLORS.subtle
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: theme.spacing(2)
    },
    empty: {
        marginTop: theme.spacing(8),
        textAlign: 'center',
        color: dashboard_1.DASHBOARD_COLORS.subtle
    }
}); });
// Every search term must appear in the title, description, category or
// keywords.
var matchesSearch = function (report, search) {
    var terms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var haystack = __spreadArrays([
        report.title,
        report.description,
        report.category
    ], report.keywords).join(' ')
        .toLowerCase();
    return terms.every(function (term) { return haystack.includes(term); });
};
// The dashboards page: the reports as cards grouped by category, with a
// search, a sort and category chips. It all runs on the given list, nothing
// is fetched.
var DashboardHub = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Reports' : _b, _c = _a.subtitle, subtitle = _c === void 0 ? 'Find a dashboard by name or browse by category.' : _c, reports = _a.reports, categories = _a.categories, onOpen = _a.onOpen;
    var classes = useStyles();
    var _d = react_1.useState(''), search = _d[0], setSearch = _d[1];
    var _e = react_1.useState('ASC'), sort = _e[0], setSort = _e[1];
    var _f = react_1.useState(null), category = _f[0], setCategory = _f[1];
    // Category counts follow the search, so a chip says what clicking it shows.
    var searched = react_1.useMemo(function () {
        var sorted = reports
            .filter(function (report) { return matchesSearch(report, search); })
            .sort(function (a, b) { return a.title.localeCompare(b.title); });
        return sort === 'ASC' ? sorted : sorted.reverse();
    }, [reports, search, sort]);
    var visible = category
        ? searched.filter(function (report) { return report.category === category; })
        : searched;
    var chips = categories.filter(function (name) {
        return reports.some(function (report) { return report.category === name; });
    });
    var countOf = function (name) {
        return searched.filter(function (report) { return report.category === name; }).length;
    };
    var sections = categories
        .map(function (name) { return ({
        name: name,
        reports: visible.filter(function (report) { return report.category === name; })
    }); })
        .filter(function (section) { return section.reports.length > 0; });
    return (react_1.default.createElement(Box_1.default, { className: classes.page },
        react_1.default.createElement(Typography_1.default, { variant: "h4", className: classes.title }, title),
        react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium", className: classes.subtitle }, subtitle),
        react_1.default.createElement(Box_1.default, { className: classes.toolbar },
            react_1.default.createElement(InputBase_1.default, { className: clsx_1.default(classes.control, classes.search), placeholder: "Search reports (name, description, keyword)", value: search, onChange: function (event) { return setSearch(event.target.value); }, startAdornment: react_1.default.createElement(Icons_1.default, { iconName: "SearchIcon", size: "small", className: classes.searchIcon }) }),
            react_1.default.createElement(NativeSelect_1.default, { className: classes.control, disableUnderline: true, value: sort, onChange: function (event) { return setSort(event.target.value); } },
                react_1.default.createElement("option", { value: "ASC" }, "Sort: A\u2013Z"),
                react_1.default.createElement("option", { value: "DESC" }, "Sort: Z\u2013A"))),
        react_1.default.createElement(Box_1.default, { className: classes.chips },
            react_1.default.createElement(ButtonBase_1.default, { className: clsx_1.default(classes.chip, !category && classes.chipActive), onClick: function () { return setCategory(null); } },
                "All",
                react_1.default.createElement("span", { className: classes.chipCount }, searched.length)),
            chips.map(function (name) { return (react_1.default.createElement(ButtonBase_1.default, { key: name, className: clsx_1.default(classes.chip, category === name && classes.chipActive), onClick: function () { return setCategory(category === name ? null : name); } },
                name,
                react_1.default.createElement("span", { className: classes.chipCount }, countOf(name)))); })),
        sections.map(function (section) { return (react_1.default.createElement(Box_1.default, { key: section.name, className: classes.section },
            react_1.default.createElement(Box_1.default, { className: classes.sectionTitle }, section.name),
            react_1.default.createElement(Box_1.default, { className: classes.grid }, section.reports.map(function (report) { return (react_1.default.createElement(DashboardReportCard_1.default, { key: report.path, report: report, onOpen: onOpen })); })))); }),
        visible.length === 0 && (react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium", className: classes.empty }, search
            ? "No report matches \"" + search + "\""
            : 'There is no report you can open yet'))));
};
exports.DashboardHub = DashboardHub;
exports.default = exports.DashboardHub;
//# sourceMappingURL=DashboardHub.js.map