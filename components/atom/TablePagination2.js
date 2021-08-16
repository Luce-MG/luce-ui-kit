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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCount = void 0;
var React = __importStar(require("react"));
var Table_1 = require("./Table");
function getCount(count, rowsPerPage) {
    if (count % rowsPerPage) {
        return count;
    }
    return count + 1;
}
exports.getCount = getCount;
var TablePagination2 = function (props) {
    var rowsPerPageOptions = props.rowsPerPageOptions, rowsPerPage = props.rowsPerPage, onChangeProps = props.onChange, onChangeRowsPerPageProps = props.onChangeRowsPerPage, count = props.count;
    var _a = React.useState(0), page = _a[0], setPage = _a[1];
    var onChangePage = function (event, newPage) {
        setPage(newPage);
        onChangeProps(newPage);
    };
    var onChangeRowsPerPage = function (event) {
        var rows = parseInt(event.target.value, 10);
        setPage(0);
        if (onChangeRowsPerPageProps) {
            onChangeRowsPerPageProps(rows);
        }
    };
    function labelDisplayedRows(_a) {
        var from = _a.from, to = _a.to, count = _a.count;
        if ((count - 1) % rowsPerPage) {
            return from + "-" + to + " of " + count;
        }
        return from + "-" + to + " of " + (count - 1);
    }
    return (React.createElement(Table_1.TablePagination, { count: getCount(count, rowsPerPage), page: page, rowsPerPage: rowsPerPage, onChangePage: onChangePage, onChangeRowsPerPage: onChangeRowsPerPage, rowsPerPageOptions: rowsPerPageOptions, labelDisplayedRows: labelDisplayedRows }));
};
TablePagination2.defaultProps = {
    rowsPerPageOptions: [5, 10, 25]
};
exports.default = TablePagination2;
//# sourceMappingURL=TablePagination2.js.map