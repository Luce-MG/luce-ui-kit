"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardTable = void 0;
var InputBase_1 = __importDefault(require("@material-ui/core/InputBase"));
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var CircularProgress_1 = __importDefault(require("../atom/CircularProgress"));
var Icons_1 = __importDefault(require("../icons/Icons"));
var DashboardDownloadButton_1 = __importDefault(require("../molecules/DashboardDownloadButton"));
var DashboardPagination_1 = __importDefault(require("../molecules/DashboardPagination"));
// Fixed widths for the short typed columns; text columns share what is left,
// so the layout does not shift with the values on each page.
var COLUMN_WIDTHS = (_a = {},
    _a[dashboard_1.DashboardColumnType.IDENTIFIER] = 110,
    _a[dashboard_1.DashboardColumnType.DATE] = 130,
    _a[dashboard_1.DashboardColumnType.NUMBER] = 120,
    _a[dashboard_1.DashboardColumnType.CURRENCY] = 150,
    _a);
var TEXT_COLUMN_MIN_WIDTH = 180;
var BODY_MAX_HEIGHT = 720;
var useStyles = ThemeProvider_1.makeStyles(function (theme) { return ({
    root: {
        border: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        borderRadius: 4,
        background: theme.palette.common.white
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing(1.5, 2)
    },
    search: {
        width: 280,
        height: 36,
        border: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        borderRadius: 4,
        padding: theme.spacing(0, 1),
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.text
    },
    searchIcon: {
        flexShrink: 0,
        color: dashboard_1.DASHBOARD_COLORS.muted,
        marginRight: theme.spacing(1)
    },
    body: {
        maxHeight: BODY_MAX_HEIGHT,
        overflow: 'auto'
    },
    headCell: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        background: theme.palette.common.white,
        borderBottom: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        padding: theme.spacing(1.5, 2),
        fontSize: 14,
        fontWeight: 600,
        color: dashboard_1.DASHBOARD_COLORS.heading,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
        userSelect: 'none'
    },
    sortIcon: {
        marginLeft: theme.spacing(0.5),
        verticalAlign: 'middle',
        color: dashboard_1.DASHBOARD_COLORS.muted
    },
    table: {
        tableLayout: 'fixed',
        width: '100%'
    },
    cell: {
        borderBottom: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        padding: theme.spacing(1.25, 2),
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.text,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    numeric: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums'
    },
    row: {
        '&:hover': {
            background: dashboard_1.DASHBOARD_COLORS.rowHover
        }
    },
    message: {
        padding: theme.spacing(8, 0),
        textAlign: 'center',
        color: dashboard_1.DASHBOARD_COLORS.muted,
        fontSize: 14,
        borderBottom: 'none'
    },
    footer: {
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        borderTop: "1px solid " + dashboard_1.DASHBOARD_COLORS.border,
        padding: theme.spacing(1, 2)
    },
    records: {
        fontSize: 14,
        color: dashboard_1.DASHBOARD_COLORS.text
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}); });
// The table of a dashboard, in the layout of the Tooljet tables: search on
// top, a scrolling body under a sticky header, and paging, the record count
// and the CSV download along the bottom.
var DashboardTable = function (_a) {
    var dashboardKey = _a.dashboardKey, columns = _a.columns, rows = _a.rows, loading = _a.loading, generated = _a.generated, emptyMessage = _a.emptyMessage, sortBy = _a.sortBy, sortAscending = _a.sortAscending, onSort = _a.onSort, page = _a.page, rowsPerPage = _a.rowsPerPage, totalCount = _a.totalCount, onChangePage = _a.onChangePage, search = _a.search, onSearch = _a.onSearch, onDownloadCsv = _a.onDownloadCsv, downloading = _a.downloading;
    var classes = useStyles();
    var pageCount = Math.max(1, Math.ceil(totalCount / rowsPerPage));
    var enumColumns = new Set(columns
        .filter(function (column) {
        return column.type === dashboard_1.DashboardColumnType.STRING &&
            dashboard_1.isDashboardEnumColumn(rows, column.key);
    })
        .map(function (column) { return column.key; }));
    // Below this width the table scrolls sideways instead of squeezing text.
    var tableMinWidth = columns.reduce(function (width, column) { var _a; return width + ((_a = COLUMN_WIDTHS[column.type]) !== null && _a !== void 0 ? _a : TEXT_COLUMN_MIN_WIDTH); }, 0);
    var message = (function () {
        if (loading)
            return react_1.default.createElement(CircularProgress_1.default, null);
        if (!generated)
            return emptyMessage;
        if (!rows.length)
            return 'No data for the selected filters';
        return null;
    })();
    return (react_1.default.createElement("div", { className: classes.root, "data-testid": "dashboard-table-" + dashboardKey },
        react_1.default.createElement("div", { className: classes.toolbar },
            react_1.default.createElement(InputBase_1.default, { className: classes.search, placeholder: "Search", value: search, disabled: !generated, onChange: function (event) { return onSearch(event.target.value); }, startAdornment: react_1.default.createElement(Icons_1.default, { iconName: "SearchIcon", size: "small", className: classes.searchIcon }) })),
        react_1.default.createElement("div", { className: classes.body },
            react_1.default.createElement(Table_1.default, { size: "small", className: classes.table, style: { minWidth: tableMinWidth } },
                react_1.default.createElement("colgroup", null, columns.map(function (column) { return (react_1.default.createElement("col", { key: column.key, style: { width: COLUMN_WIDTHS[column.type] } })); })),
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null, columns.map(function (column) {
                        var numeric = dashboard_1.isDashboardNumericColumn(column.type);
                        var sortIcon = (react_1.default.createElement(Icons_1.default, { iconName: sortAscending ? 'ArrowTopIcon' : 'ArrowBottomIcon', width: 14, height: 14, className: classes.sortIcon }));
                        var sorted = sortBy === column.key;
                        return (react_1.default.createElement(TableCell_1.default, { key: column.key, className: clsx_1.default(classes.headCell, numeric && classes.numeric), role: "button", tabIndex: 0, "aria-sort": sorted
                                ? sortAscending
                                    ? 'ascending'
                                    : 'descending'
                                : undefined, onClick: function () { return onSort(column.key); }, onKeyDown: function (event) {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    onSort(column.key);
                                }
                            } },
                            numeric && sorted && sortIcon,
                            column.label,
                            !numeric && sorted && sortIcon));
                    }))),
                react_1.default.createElement(TableBody_1.default, null, message !== null ? (react_1.default.createElement(TableRow_1.default, null,
                    react_1.default.createElement(TableCell_1.default, { colSpan: columns.length, className: classes.message }, message))) : (rows.map(function (row, index) { return (react_1.default.createElement(TableRow_1.default, { key: index, className: classes.row }, columns.map(function (column) {
                    var value = enumColumns.has(column.key)
                        ? dashboard_1.formatDashboardEnum(row[column.key])
                        : dashboard_1.formatDashboardCell(row[column.key], column.type);
                    return (react_1.default.createElement(TableCell_1.default, { key: column.key, title: value, className: clsx_1.default(classes.cell, dashboard_1.isDashboardNumericColumn(column.type) &&
                            classes.numeric) }, value));
                }))); }))))),
        react_1.default.createElement("div", { className: classes.footer },
            react_1.default.createElement(DashboardPagination_1.default, { page: page, pageCount: pageCount, disabled: !generated, onChangePage: onChangePage }),
            react_1.default.createElement("span", { className: classes.records }, generated ? totalCount + " Records" : ''),
            react_1.default.createElement("div", { className: classes.actions },
                react_1.default.createElement(DashboardDownloadButton_1.default, { options: [{ label: 'Download CSV', onClick: onDownloadCsv }], disabled: !generated || loading || !rows.length, downloading: downloading })))));
};
exports.DashboardTable = DashboardTable;
exports.default = exports.DashboardTable;
//# sourceMappingURL=DashboardTable.js.map