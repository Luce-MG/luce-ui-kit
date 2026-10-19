"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPagination = void 0;
var ButtonBase_1 = __importDefault(require("@material-ui/core/ButtonBase"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var Icons_1 = __importDefault(require("../icons/Icons"));
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    pages: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(0.5)
    },
    pageButton: {
        minWidth: 32,
        height: 32,
        borderRadius: 4,
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.text
    },
    activePage: {
        background: dashboard_1.DASHBOARD_COLORS.activePage,
        fontWeight: 600
    },
    navButton: {
        padding: 6,
        color: dashboard_1.DASHBOARD_COLORS.text
    },
    gap: {
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.text
    }
}); });
// Page numbers around the current page, with gaps marked as null.
function visiblePages(page, pageCount) {
    if (pageCount <= 5)
        return Array.from({ length: pageCount }, function (_, i) { return i; });
    var around = [page - 1, page, page + 1].filter(function (value) { return value > 0 && value < pageCount - 1; });
    var pages = [0];
    if (around[0] > 1)
        pages.push(null);
    pages.push.apply(pages, around);
    if (around[around.length - 1] < pageCount - 2)
        pages.push(null);
    pages.push(pageCount - 1);
    return pages;
}
// First, previous, numbered, next and last page buttons, as on the Tooljet
// tables.
var DashboardPagination = function (_a) {
    var page = _a.page, pageCount = _a.pageCount, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChangePage = _a.onChangePage;
    var classes = useStyles();
    var lastPage = Math.max(pageCount - 1, 0);
    return (react_1.default.createElement("div", { className: classes.pages },
        react_1.default.createElement(IconButton_1.default, { className: classes.navButton, disabled: disabled || page === 0, onClick: function () { return onChangePage(0); } },
            react_1.default.createElement(Icons_1.default, { iconName: "HideLeftIcon", size: "small" })),
        react_1.default.createElement(IconButton_1.default, { className: classes.navButton, disabled: disabled || page === 0, onClick: function () { return onChangePage(page - 1); } },
            react_1.default.createElement(Icons_1.default, { iconName: "ArrowLeftIcon", size: "small" })),
        !disabled &&
            visiblePages(page, pageCount).map(function (value, index) {
                return value === null ? (react_1.default.createElement("span", { key: "gap-" + index, className: classes.gap }, "\u2026")) : (react_1.default.createElement(ButtonBase_1.default, { key: value, className: clsx_1.default(classes.pageButton, value === page && classes.activePage), onClick: function () { return onChangePage(value); } }, value + 1));
            }),
        react_1.default.createElement(IconButton_1.default, { className: classes.navButton, disabled: disabled || page >= lastPage, onClick: function () { return onChangePage(page + 1); } },
            react_1.default.createElement(Icons_1.default, { iconName: "ArrowRightIcon", size: "small" })),
        react_1.default.createElement(IconButton_1.default, { className: classes.navButton, disabled: disabled || page >= lastPage, onClick: function () { return onChangePage(lastPage); } },
            react_1.default.createElement(Icons_1.default, { iconName: "HideRightIcon", size: "small" }))));
};
exports.DashboardPagination = DashboardPagination;
exports.default = exports.DashboardPagination;
//# sourceMappingURL=DashboardPagination.js.map