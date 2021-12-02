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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stableSort = exports.getComparator = exports.descendingComparator = void 0;
var react_1 = __importDefault(require("react"));
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var Checkbox_1 = __importDefault(require("../controls/Checkbox"));
var Table_1 = require("./Table");
var useStyles = ThemeProvider_1.makeStyles(function (theme) {
    return ThemeProvider_1.createStyles({
        headRow: {
            '& .MuiTableCell-head': __assign(__assign({}, theme.typography.subtitle1), { color: theme.palette.grey[900] }),
            height: 88
        }
    });
});
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
exports.descendingComparator = descendingComparator;
function getComparator(order, orderBy) {
    return order === 'desc'
        ? function (a, b) { return descendingComparator(a, b, orderBy); }
        : function (a, b) { return -descendingComparator(a, b, orderBy); };
}
exports.getComparator = getComparator;
function stableSort(array, comparator) {
    var stabilizedThis = array.map(function (el, index) { return [el, index]; });
    stabilizedThis.sort(function (a, b) {
        var order = comparator(a[0], b[0]);
        if (order !== 0)
            return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(function (el) { return el[0]; });
}
exports.stableSort = stableSort;
var HeadTableSortLabel = function (props) {
    var headCells = props.headCells, isCheckboxShow = props.isCheckboxShow, order = props.order, orderBy = props.orderBy, onRequestSort = props.onRequestSort, onSelectAllList = props.onSelectAllList, selectAllList = props.selectAllList;
    var classes = useStyles();
    var createSortHandler = function (property) { return function () {
        onRequestSort(property);
    }; };
    return (react_1.default.createElement(Table_1.TableRow, { className: classes.headRow },
        isCheckboxShow && (react_1.default.createElement(Table_1.TableCell, null,
            react_1.default.createElement(Checkbox_1.default, { onClick: onSelectAllList, checked: selectAllList }))),
        headCells.map(function (headCell) { return (react_1.default.createElement(Table_1.TableCell, { key: headCell.id, sortDirection: orderBy === headCell.valueName ? order : false }, headCell.isNotSortAble ? (headCell.label) : (react_1.default.createElement(Table_1.TableSortLabel, { active: orderBy === headCell.valueName, direction: orderBy === headCell.valueName ? order : 'asc', onClick: createSortHandler(headCell.valueName) }, headCell.label)))); })));
};
exports.default = HeadTableSortLabel;
//# sourceMappingURL=HeadTableSortLabel.js.map