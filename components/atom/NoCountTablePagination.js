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
var React = __importStar(require("react"));
var Table_1 = require("./Table");
var NoCountTablePagination = function (props) {
    var rowsPerPageOptions = props.rowsPerPageOptions, rowsPerPage = props.rowsPerPage, onChangeProps = props.onChange, onChangeRowsPerPageProps = props.onChangeRowsPerPage, count = props.count, page = props.page;
    var onChangePage = function (event, newPage) {
        onChangeProps(newPage);
    };
    var onChangeRowsPerPage = function (event) {
        var rows = parseInt(event.target.value, 10);
        if (onChangeRowsPerPageProps) {
            onChangeRowsPerPageProps(rows);
        }
    };
    function labelDisplayedRows(_a) {
        var from = _a.from, to = _a.to, count = _a.count;
        return from + "-" + to + " of " + count;
    }
    return (React.createElement(Table_1.TablePagination, { count: count, page: page, rowsPerPage: rowsPerPage, onChangePage: onChangePage, onChangeRowsPerPage: onChangeRowsPerPage, rowsPerPageOptions: rowsPerPageOptions, labelDisplayedRows: labelDisplayedRows }));
};
NoCountTablePagination.defaultProps = {
    rowsPerPageOptions: [5, 10, 25]
};
exports.default = NoCountTablePagination;
//# sourceMappingURL=NoCountTablePagination.js.map